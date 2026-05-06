"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { programs, orgs, countryNames } from "@/data/seed";

// ─── Types ────────────────────────────────────────────────────────────────────
type Filter = "all" | "Active" | "Pilot" | "Completed";
type Program = (typeof programs)[number];

// ─── Constants ────────────────────────────────────────────────────────────────
const STATUS_COLORS: Record<string, string> = {
  Active: "#2D4530",    // forest-700
  Pilot: "#C4623F",     // clay-500
  Completed: "#A8A099", // ink-300
  Scaled: "#2D4530",
  Paused: "#A8A099",
};

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// Warm earth-tone map style — matches the site's cream/forest/clay palette
// Uses Mapbox's "light-v11" as a base with custom layer overrides via fog/terrain
const MAP_STYLE = "mapbox://styles/mapbox/light-v11";

// ─── GeoJSON builder ─────────────────────────────────────────────────────────
function buildGeoJSON(filter: Filter) {
  const filtered = filter === "all"
    ? programs
    : programs.filter((p) => p.status === filter);

  return {
    type: "FeatureCollection" as const,
    features: filtered.map((p) => ({
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: [p.pinLng, p.pinLat],
      },
      properties: {
        slug: p.slug,
        name: p.name,
        status: p.status,
        model: p.model,
        oneLiner: p.oneLiner,
        primaryCountry: p.primaryCountry,
        region: p.region || "",
        hhEnrolled: p.hhEnrolled || null,
        implementer: orgs.find((o) => o.slug === p.primaryImplementer)?.name || "",
        countryName: p.countries.map((c) => countryNames[c] || c).join(", "),
        color: STATUS_COLORS[p.status] || "#A8A099",
        startYear: p.startYear,
      },
    })),
  };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AtlasMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Program | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  // Check if we have a token at all
  useEffect(() => {
    setHasToken(!!MAPBOX_TOKEN);
  }, []);

  // Initialise map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current || !hasToken) return;

    let map: mapboxgl.Map;

    import("mapbox-gl").then((mapboxgl) => {
      mapboxgl.default.accessToken = MAPBOX_TOKEN;

      map = new mapboxgl.default.Map({
        container: mapContainerRef.current!,
        style: MAP_STYLE,
        center: [20, 10],
        zoom: 1.8,
        projection: "mercator",
        attributionControl: false,
      });

      mapRef.current = map;

      map.addControl(
        new mapboxgl.default.AttributionControl({ compact: true }),
        "bottom-right"
      );
      map.addControl(
        new mapboxgl.default.NavigationControl({ showCompass: false }),
        "top-right"
      );

      map.on("load", () => {
        // ── Customise the base style ──────────────────────────────────────
        // Warm cream land
        map.setPaintProperty("background", "background-color", "#FDFAF4");

        // Muted sea colour
        ["water", "water-shadow"].forEach((layer) => {
          if (map.getLayer(layer)) {
            map.setPaintProperty(layer, "fill-color", "#E8EDE9");
          }
        });

        // Muted country borders
        ["admin-0-boundary", "admin-0-boundary-disputed", "admin-1-boundary"].forEach((layer) => {
          if (map.getLayer(layer)) {
            map.setPaintProperty(layer, "line-color", "#D4C9B8");
            map.setPaintProperty(layer, "line-width", 0.6);
          }
        });

        // ── Add programme data ────────────────────────────────────────────
        map.addSource("programmes", {
          type: "geojson",
          data: buildGeoJSON("all"),
          cluster: true,
          clusterMaxZoom: 5,
          clusterRadius: 45,
        });

        // Cluster circles
        map.addLayer({
          id: "clusters",
          type: "circle",
          source: "programmes",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#2D4530",
            "circle-radius": ["step", ["get", "point_count"], 18, 5, 24, 10, 30],
            "circle-opacity": 0.85,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#FDFAF4",
          },
        });

        // Cluster count labels
        map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "programmes",
          filter: ["has", "point_count"],
          layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-size": 13,
          },
          paint: {
            "text-color": "#FDFAF4",
          },
        });

        // Individual pins — outer glow
        map.addLayer({
          id: "programme-glow",
          type: "circle",
          source: "programmes",
          filter: ["!", ["has", "point_count"]],
          paint: {
            "circle-radius": 14,
            "circle-color": ["get", "color"],
            "circle-opacity": 0.18,
          },
        });

        // Individual pins — main dot
        map.addLayer({
          id: "programme-dots",
          type: "circle",
          source: "programmes",
          filter: ["!", ["has", "point_count"]],
          paint: {
            "circle-radius": [
              "interpolate", ["linear"], ["zoom"],
              2, 6,
              5, 9,
              10, 12,
            ],
            "circle-color": ["get", "color"],
            "circle-stroke-width": 2.5,
            "circle-stroke-color": "#FDFAF4",
            "circle-opacity": 0.92,
          },
        });

        setMapLoaded(true);

        // ── Interactivity ─────────────────────────────────────────────────
        // Hover cursor
        map.on("mouseenter", "programme-dots", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "programme-dots", () => {
          map.getCanvas().style.cursor = "";
          setHovered(null);
        });
        map.on("mouseenter", "clusters", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "clusters", () => {
          map.getCanvas().style.cursor = "";
        });

        // Hover on individual pin
        map.on("mousemove", "programme-dots", (e) => {
          const feature = e.features?.[0];
          if (feature?.properties?.slug) {
            setHovered(feature.properties?.slug);
          }
        });

        // Click on individual pin → select
        map.on("click", "programme-dots", (e) => {
          const feature = e.features?.[0];
          if (feature?.properties?.slug) {
            const prog = programs.find((p) => p.slug === feature.properties?.slug);
            if (prog) setSelected(prog);
          }
        });

        // Click on cluster → zoom in
        map.on("click", "clusters", (e) => {
          const features = map.queryRenderedFeatures(e.point, { layers: ["clusters"] });
          const clusterId = features[0]?.properties?.cluster_id;
          if (clusterId == null) return;
          (map.getSource("programmes") as mapboxgl.GeoJSONSource)
            .getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err) return;
              map.easeTo({
                center: (features[0].geometry as GeoJSON.Point).coordinates as [number, number],
                zoom: zoom!,
              });
            });
        });

        // Click on empty map → deselect
        map.on("click", (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ["programme-dots", "clusters"],
          });
          if (!features.length) setSelected(null);
        });
      });
    });

    return () => {
      map?.remove();
      mapRef.current = null;
    };
  }, [hasToken]);

  // Update data when filter changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;
    const source = map.getSource("programmes") as mapboxgl.GeoJSONSource | undefined;
    source?.setData(buildGeoJSON(filter));
  }, [filter, mapLoaded]);

  const hoveredProgram = programs.find((p) => p.slug === hovered);

  if (!hasToken) {
    return <NoTokenBanner />;
  }

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* ── Sidebar ── */}
      <aside className="lg:col-span-3 space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-500 mb-3">
            Filter by status
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", "Active", "Pilot", "Completed"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                  filter === f
                    ? "bg-forest-800 text-cream-50 border-forest-800"
                    : "bg-cream-50 text-ink-700 border-ink-900/15 hover:border-clay-400/50"
                }`}
              >
                {f === "all" ? `All (${programs.length})` : `${f} (${programs.filter((p) => p.status === f).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs">
          <div className="font-medium text-ink-900 mb-2">Legend</div>
          {Object.entries(STATUS_COLORS).filter(([k]) => ["Active","Pilot","Completed"].includes(k)).map(([status, color]) => (
            <div key={status} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full border-2 border-cream-50"
                style={{ backgroundColor: color }}
              />
              <span className="text-ink-700">{status}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex w-6 h-6 rounded-full bg-forest-700 text-cream-50 text-[10px] font-bold items-center justify-center border-2 border-cream-50">3</span>
            <span className="text-ink-700">Cluster (zoom to expand)</span>
          </div>
        </div>

        {/* Hover tooltip */}
        {hoveredProgram && !selected && (
          <div className="bg-cream-50 border border-clay-400/40 rounded-lg p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-widest text-clay-600 mb-1">
              Hover preview
            </div>
            <div className="font-display text-sm text-forest-900 leading-tight">
              {hoveredProgram.name}
            </div>
            <div className="text-xs text-ink-500 mt-1">
              {orgs.find((o) => o.slug === hoveredProgram.primaryImplementer)?.name}
            </div>
            <div className="text-xs text-ink-500">
              {hoveredProgram.countries.map((c) => countryNames[c] || c).join(", ")}
              {hoveredProgram.region && ` · ${hoveredProgram.region}`}
            </div>
            {hoveredProgram.hhEnrolled && (
              <div className="text-xs font-mono text-ink-700 mt-1">
                {hoveredProgram.hhEnrolled.toLocaleString()} households
              </div>
            )}
          </div>
        )}

        <div className="text-xs text-ink-500 border-t border-ink-900/10 pt-4">
          <div className="font-medium text-ink-900 mb-1">Missing a programme?</div>
          <p className="mb-2">
            We're aware our coverage is partial. Help us add yours.
          </p>
          <Link href="/about#contribute" className="text-clay-600 font-medium">
            Add a programme →
          </Link>
        </div>
      </aside>

      {/* ── Map + Detail ── */}
      <div className="lg:col-span-9 space-y-4">
        <div
          ref={mapContainerRef}
          className="w-full rounded-lg overflow-hidden border border-ink-900/10 shadow-sm"
          style={{ height: "520px" }}
        />

        {/* Selected programme detail */}
        {selected && (
          <ProgramDetail program={selected} onClose={() => setSelected(null)} />
        )}

        {!selected && (
          <p className="text-center text-sm text-ink-500 py-4 border border-dashed border-ink-900/15 rounded-lg">
            Hover a pin to preview · Click to see full programme detail
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgramDetail({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) {
  const impl = orgs.find((o) => o.slug === program.primaryImplementer);
  const govt = program.govtImplementer
    ? orgs.find((o) => o.slug === program.govtImplementer)
    : null;

  return (
    <div className="bg-cream-50 border border-clay-400/30 rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs flex-wrap">
            <span className="pill-forest">{program.model}</span>
            <span className="pill-ink">{program.status}</span>
            <span className="text-ink-500">since {program.startYear}</span>
          </div>
          <h2 className="font-display text-2xl text-forest-900 leading-tight">
            {program.name}
          </h2>
          <p className="mt-1 text-sm text-ink-700 leading-relaxed max-w-2xl">
            {program.oneLiner}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-ink-400 hover:text-ink-900 text-xl leading-none flex-shrink-0 mt-1"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <DetailCell label="Primary implementer" value={impl?.name || "—"} />
        {govt && <DetailCell label="Government partner" value={govt.name} />}
        <DetailCell
          label="Geography"
          value={`${program.countries.map((c) => countryNames[c] || c).join(", ")}${program.region ? ` · ${program.region}` : ""}`}
        />
        <DetailCell
          label="Households"
          value={program.hhEnrolled ? program.hhEnrolled.toLocaleString() : "Not reported"}
        />
        <DetailCell
          label="Duration"
          value={`${program.durationMonths} months`}
        />
        {program.graduationRate && (
          <DetailCell
            label="Graduation rate"
            value={`${(program.graduationRate * 100).toFixed(0)}%`}
          />
        )}
        {program.costPerHhUsd && (
          <DetailCell
            label="Cost per HH"
            value={`$${program.costPerHhUsd.toLocaleString()}`}
          />
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-ink-900/10">
        <Link
          href={`/programs/${program.slug}`}
          className="text-sm font-medium"
        >
          View full programme page →
        </Link>
      </div>
    </div>
  );
}

function DetailCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-ink-500 mb-0.5">
        {label}
      </div>
      <div className="text-sm font-medium text-ink-900 leading-snug">{value}</div>
    </div>
  );
}

function NoTokenBanner() {
  return (
    <div className="bg-ochre-400/10 border border-ochre-400/30 rounded-lg p-8 text-center">
      <div className="font-display text-xl text-forest-900 mb-2">
        Map needs a Mapbox token
      </div>
      <p className="text-sm text-ink-700 max-w-md mx-auto leading-relaxed mb-4">
        The interactive map uses Mapbox GL JS, which requires a free API token.
        Get one at{" "}
        <a
          href="https://account.mapbox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          account.mapbox.com
        </a>{" "}
        (free up to 50,000 map loads/month), then add it to your Vercel
        environment variables as{" "}
        <code className="bg-ink-900/5 px-1 py-0.5 rounded text-xs">
          NEXT_PUBLIC_MAPBOX_TOKEN
        </code>
        .
      </p>
      <div className="text-xs text-ink-500 bg-ink-900/5 rounded-md px-4 py-3 font-mono max-w-sm mx-auto">
        NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoieW91cn...
      </div>
    </div>
  );
}

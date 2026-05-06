"use client";

import { useState } from "react";
import Link from "next/link";
import { programs, orgs, countryNames } from "@/data/seed";
import { worldGeo } from "./world-geo";

type Filter = "all" | "Active" | "Pilot" | "Completed";

// Convert lat/lng to SVG x/y on an equirectangular projection
function project(lng: number, lat: number) {
  // Map (-180..180, -85..85) to (0..1000, 0..500)
  const x = ((lng + 180) / 360) * 1000;
  const y = ((85 - lat) / 170) * 500;
  return { x, y };
}

export default function AtlasMap() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const visible = programs.filter((p) =>
    filter === "all" ? true : p.status === filter,
  );

  const selectedProgram = programs.find((p) => p.slug === selected);

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* Filters */}
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
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-ink-500 leading-relaxed">
          <div className="font-medium text-ink-900 mb-2">Showing {visible.length} programmes</div>
          <p>
            Tap any pin to see details. The atlas grows every week as
            implementers add their work.
          </p>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs">
          <div className="font-medium text-ink-900 mb-1">Legend</div>
          <LegendItem color="#3D5A40" label="Active programme" />
          <LegendItem color="#D97757" label="Pilot" />
          <LegendItem color="#A8A099" label="Completed" />
        </div>

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

      {/* Map + Detail */}
      <div className="lg:col-span-9 space-y-4">
        <div className="relative bg-cream-100 border border-ink-900/10 rounded-lg overflow-hidden">
          <svg
            viewBox="0 0 1000 500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            role="img"
            aria-label="World map with poverty graduation programme locations"
          >
            {/* Subtle grid */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F0E4CC" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1000" height="500" fill="url(#grid)" />

            {/* Continents (simplified) */}
            {worldGeo.map((g, i) => (
              <path
                key={i}
                d={g.d}
                fill="#F8F1E4"
                stroke="#E0D5BB"
                strokeWidth="0.5"
              />
            ))}

            {/* Equator + tropics, faintly */}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="#D4A24C" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.6" />

            {/* Pins */}
            {visible.map((p) => {
              const { x, y } = project(p.pinLng, p.pinLat);
              const color =
                p.status === "Pilot"
                  ? "#D97757"
                  : p.status === "Completed"
                    ? "#A8A099"
                    : "#3D5A40";
              const isHovered = hovered === p.slug;
              const isSelected = selected === p.slug;
              const r = isHovered || isSelected ? 9 : 6;
              return (
                <g key={p.slug}>
                  <circle
                    cx={x}
                    cy={y}
                    r={r + 4}
                    fill={color}
                    opacity={isHovered || isSelected ? 0.25 : 0.12}
                    style={{ transition: "all 200ms" }}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill={color}
                    stroke="#FDFAF4"
                    strokeWidth="2"
                    onMouseEnter={() => setHovered(p.slug)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(p.slug)}
                    style={{ cursor: "pointer", transition: "r 200ms" }}
                  />
                  {isHovered && !isSelected && (
                    <g>
                      <rect
                        x={x + 12}
                        y={y - 18}
                        width={p.name.length * 5.5 + 16}
                        height="26"
                        fill="#1C1917"
                        rx="4"
                      />
                      <text
                        x={x + 20}
                        y={y - 1}
                        fontSize="11"
                        fontFamily="sans-serif"
                        fill="#FDFAF4"
                      >
                        {p.name}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected program details */}
        {selectedProgram && (
          <ProgramDetail
            program={selectedProgram}
            onClose={() => setSelected(null)}
          />
        )}
        {!selectedProgram && (
          <div className="text-center text-sm text-ink-500 py-6 border border-dashed border-ink-900/15 rounded-lg">
            Tap a pin to see programme details
          </div>
        )}
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block w-3 h-3 rounded-full border-2 border-cream-50"
        style={{ backgroundColor: color }}
      />
      <span className="text-ink-700">{label}</span>
    </div>
  );
}

function ProgramDetail({
  program,
  onClose,
}: {
  program: (typeof programs)[number];
  onClose: () => void;
}) {
  const impl = orgs.find((o) => o.slug === program.primaryImplementer);
  return (
    <div className="bg-cream-50 border border-ink-900/10 rounded-lg p-6">
      <div className="flex justify-between items-start gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs">
            <span className="pill-forest">{program.model}</span>
            <span className="pill-ink">{program.status}</span>
            <span className="text-ink-500">since {program.startYear}</span>
          </div>
          <h2 className="font-display text-2xl text-forest-900">{program.name}</h2>
          <p className="mt-1 text-sm text-ink-700">{program.oneLiner}</p>
        </div>
        <button
          onClick={onClose}
          className="text-ink-500 hover:text-ink-900 text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-5 text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-500 mb-1">Implementer</div>
          <div className="font-medium text-ink-900">{impl?.name}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-500 mb-1">Geography</div>
          <div className="font-medium text-ink-900">
            {program.countries.map((c) => countryNames[c] || c).join(", ")}
            {program.region && <span className="text-ink-500"> · {program.region}</span>}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-500 mb-1">Households</div>
          <div className="font-medium text-ink-900">
            {program.hhEnrolled
              ? program.hhEnrolled.toLocaleString()
              : "—"}
          </div>
        </div>
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

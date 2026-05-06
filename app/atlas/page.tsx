import AtlasMap from "./AtlasMap";

// Mapbox GL JS requires its CSS to be loaded globally.
// The `import` here gets bundled by Next and injected into the page <head>.
import "mapbox-gl/dist/mapbox-gl.css";

export const metadata = {
  title: "Atlas — GraduationApproach.org",
  description:
    "An interactive map of poverty graduation programmes around the world.",
};

export default function AtlasPage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Atlas
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          Where the Graduation Approach is alive
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Every pin is a real programme. Hover to preview, click to see full
          details. Use the filters to explore by status, or zoom in to any
          region.
        </p>
      </div>
      <AtlasMap />
    </div>
  );
}

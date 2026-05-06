import AtlasMap from "./AtlasMap";

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
          Every pin on this map is a real programme. Use the filters to explore
          by status. Click any pin for details and a link to the full programme
          page.
        </p>
      </div>
      <AtlasMap />
    </div>
  );
}

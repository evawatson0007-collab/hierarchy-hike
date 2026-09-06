import { createFileRoute } from "@tanstack/react-router";
import OrgCanvas from "@/components/OrgCanvas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lift Greenwood — Interactive Organisation Map" },
      {
        name: "description",
        content:
          "Explore the Lift Greenwood leadership structure as a living, zoomable map — from the Principal to all four Houses.",
      },
      { property: "og:title", content: "Lift Greenwood — Interactive Organisation Map" },
      {
        property: "og:description",
        content:
          "An explorable constellation of the Lift Greenwood team: pan, zoom and follow the connections between every leader.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">Lift Greenwood interactive organisation map</h1>
      <OrgCanvas />
    </main>
  );
}

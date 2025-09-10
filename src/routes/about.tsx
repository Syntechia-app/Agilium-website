import { createFileRoute } from "@tanstack/react-router";
import AboutPageHero from "@/components/about/about-hero";
import { AboutComponent } from "@/components/about/about-component";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us - Agilium Technologies",
      },
      {
        name: "description",
        content:
          "Learn about Agilium Technologies' mission, vision, and commitment to innovation. We transform ambitious visions into measurable impact through cutting-edge technology.",
      },
      {
        name: "keywords",
        content:
          "about agilium, company mission, technology innovation, digital transformation experts",
      },
    ],
  }),
  component: AboutPage,
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {" "}
      {/* Main background set via CSS variable */}
      <AboutPageHero />
      <AboutComponent />
    </main>
  );
}

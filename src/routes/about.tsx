import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import AboutPageHero from "@/components/about-hero";

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
    <main className="min-h-screen bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A]">
      <AboutPageHero />
      <About />
    </main>
  );
}

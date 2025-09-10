import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { About } from "@/components/about/about-page";
import { Partners } from "@/components/partners";
import { ServicesComponent } from "@/components/services/services-component";
import { WhyAgiliumComponent } from "@/components/why-agilium/why-aglilium-component";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "A multidisciplinary innovation company that transforms ambitious visions into measurable impact. We combine cutting-edge technology, human-centered design, and strategic expertise.",
      },
      {
        name: "keywords",
        content:
          "digital transformation, AI solutions, IoT, data analytics, cybersecurity, software development, technology consulting, agilium technologies",
      },
      {
        name: "author",
        content: "Agilium Technologies",
      },
      {
        name: "publisher",
        content: "Agilium Technologies",
      },
      {
        title: "Agilium Technologies - Where Innovation Meets Success",
      },
    ],
  }),
  component: App,
});

export default function App() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <About />
      <ServicesComponent />
      <WhyAgiliumComponent />
      <Partners />
    </main>
  );
}

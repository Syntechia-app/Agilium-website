import { createFileRoute } from "@tanstack/react-router";
import { WhyAgilium } from "@/components/why-agilium";
import { WhyAgiliumHero } from "@/components/why-agilium-hero";

export const Route = createFileRoute("/why-agilium")({
  head: () => ({
    meta: [
      {
        title: "Why Agilium - Agilium Technologies",
      },
      {
        name: "description",
        content:
          "Discover why Agilium Technologies is the right partner for your digital transformation. Future-ready expertise, end-to-end solutions, and proven track record.",
      },
      {
        name: "keywords",
        content:
          "why choose agilium, technology partner, digital transformation expertise, proven track record",
      },
    ],
  }),
  component: WhyAgiliumPage,
});

export default function WhyAgiliumPage() {
  return (
    <main className="min-h-screen ">
      <WhyAgiliumHero />
      <WhyAgilium />
    </main>
  );
}

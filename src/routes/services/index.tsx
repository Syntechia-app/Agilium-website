import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "OurServices - Agilium Technologies",
      },
      {
        name: "description",
        content:
          "Comprehensive technology solutions including Digital Transformation, AI Solutions, IoT, Data Analytics, Cybersecurity, and more. Transform your business with our expert services.",
      },
      {
        name: "keywords",
        content:
          "technology services, digital transformation, AI solutions, IoT, data analytics, cybersecurity, software development",
      },
    ],
  }),
  component: ServicesPage,
});

import { Services } from "@/components/services/services-page";
import { ServicesPageHero } from "@/components/services/services-hero";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {" "}
      {/* Main background set via CSS variable */}
      <ServicesPageHero />
      <Services />
    </main>
  );
}

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

import { Services } from "@/components/services";
import { ServicesPageHero } from "@/components/services-hero";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <ServicesPageHero />
      <Services />
    </main>
  );
}

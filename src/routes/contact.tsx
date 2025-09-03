import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us - Agilium Technologies",
      },
      {
        name: "description",
        content:
          "Get in touch with Agilium Technologies. Contact us at info@agiliumtech.com or call +1 (555) 123-4567. Let's discuss your technology needs.",
      },
      {
        name: "keywords",
        content:
          "contact agilium, technology consultation, get in touch, info@agiliumtech.com",
      },
    ],
  }),
  component: ContactPage,
});

import { Contact } from "@/components/contact";
import { Partners } from "@/components/partners";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <Contact />
      <Partners />
    </main>
  );
}

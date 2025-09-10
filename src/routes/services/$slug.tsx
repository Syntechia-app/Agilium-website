import { services } from "@/data/services";
import { createFileRoute } from "@tanstack/react-router";
import ServiceComponent from "@/components/services/service-details";

export const Route = createFileRoute("/services/$slug")({
  component: Service,
  loader: async ({ params }) => {
    return services.find((service) => service.slug === params.slug);
  },
  head: ({ loaderData }) => {
    return {
      meta: [
        {
          title: `${loaderData?.title ?? "Not Found"}  - Agilium Technologies`,
        },
        {
          name: "description",
          content: loaderData?.description ?? "",
        },
        {
          name: "keywords",
          content:
            "digital transformation, AI solutions, IoT, data analytics, cybersecurity, software development, technology consulting, agilium technologies",
        },
      ],
    };
  },
});

function Service() {
  const service = Route.useLoaderData();

  if (!service) {
    return (
      <main className="min-h-[80vh] flex">
        <div className="pt-16 flex flex-col items-center justify-center flex-1">
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Page Not Found
                </h1>
                <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                  The page you are looking for does not exist.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return <ServiceComponent service={service} />;
}

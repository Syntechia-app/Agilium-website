import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "ATHRIB IT",
    logo: "/agilium-dev/images/partners/athrib-bg.png",
    category: "Website Development",
  },
  {
    name: "GAD MEDICAL",
    logo: "/agilium-dev/images/partners/gad med.png",
    category: "Website Development",
  },
  {
    name: "SAMGEO",
    logo: "/agilium-dev/images/partners/samgeo.png",
    category: "Website Development",
  },
  {
    name: "WALES",
    logo: "/agilium-dev/images/partners/Wales.png",
    category: "Network Infrastructure",
  },
  {
    name: "KOCH MEDICAL",
    logo: "/agilium-dev/images/partners/koch-medical.png",
    category: "Website Development",
  },
  {
    name: "ALISMAILY MEDICAL",
    logo: "/agilium-dev/images/partners/alismailymedical.png",
    category: "IT & Consulting",
  },
  {
    name: "HORIZON TECHNOLOGIES",
    logo: "/agilium-dev/images/partners/horizon-logo.png",
    category: "Website Development",
  },
  {
    name: "SYNTECHIA",
    logo: "/agilium-dev/images/partners/syntechia.png",
    category: "Virtualization",
  },
];

export function Partners() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[color:var(--brand-cyan)]">Partners</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            We collaborate with industry leaders to deliver best-in-class
            solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 border-blue-700/30 backdrop-blur-sm hover:border-[color:var(--brand-cyan)]/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  loading="lazy"
                  width={320}
                  height={48}
                  className="w-full h-12 object-contain mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="text-white font-semibold mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-300 text-sm">{partner.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200">
            Interested in partnering with us?
            <a
              href="#contact"
              className="text-[color:var(--brand-cyan)] hover:opacity-90 ml-2 underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

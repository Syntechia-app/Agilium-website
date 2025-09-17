import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "ATHRIB IT",
    logo: "/images/partners/athrib-bg.png",
    category: "Website Development",
  },
  {
    name: "GAD MEDICAL",
    logo: "/images/partners/gad med.png",
    category: "Website Development",
  },
  {
    name: "SAMGEO",
    logo: "/images/partners/samgeo.png",
    category: "Website Development",
  },
  {
    name: "WALES",
    logo: "/images/partners/Wales.png",
    category: "Network Infrastructure",
  },
  {
    name: "KOCH MEDICAL",
    logo: "/images/partners/koch-medical.png",
    category: "Website Development",
  },
  {
    name: "ALISMAILY MEDICAL",
    logo: "/images/partners/alismailymedical.png",
    category: "IT & Consulting",
  },
  {
    name: "HORIZON TECHNOLOGIES",
    logo: "/images/partners/horizon-logo.png",
    category: "Website Development",
  },
  {
    name: "SYNTECHIA",
    logo: "/images/partners/syntechia.png",
    category: "Virtualization",
  },
];

export function Partners() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#edf2fa] to-[#b1c7e9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 text-gray-900">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-700">Partners</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto">
            We collaborate with industry leaders to deliver best-in-class
            solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-white/70 border-blue-300 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  loading="lazy"
                  width={320}
                  height={48}
                  className="contrast-0 w-full h-12 object-contain mb-4 group-hover:opacity-100 transition-opacity grayscale"
                />
                <h3 className="text-gray-900 font-semibold mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-800 text-sm">{partner.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

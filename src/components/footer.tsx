import { Link } from "@tanstack/react-router";
import logo from "@/assets/Agilium_logo_resized.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="text-gray-800"
      style={{
        backgroundImage: "linear-gradient(180deg, #b1c7e9, #759cd8)",
        borderTop: "1px solid rgba(59, 130, 246, 0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logo}
                alt="Agilium logo"
                width={32}
                height={32}
                className="w-16 h-16"
              />
              <div className="flex items-baseline gap-2">
                <h3 className="text-gray-900 font-bold text-xl">AGILIUM</h3>
              </div>
            </div>
            <p className="text-sm">Where Innovation Meets Success</p>
            <div className="flex gap-3 mt-4 gap-x-6" aria-label="Social links">
              <a
                className="transition-colors hover:text-blue-700"
                href="https://www.linkedin.com/company/agiliumtech/"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                className="transition-colors hover:text-blue-700"
                href="#"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
                </svg>
              </a>
              <a
                className="transition-colors hover:text-blue-700"
                href="https://www.facebook.com/share/1FHFV1eU7i/?mibextid=wwXIfr/"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                className="transition-colors hover:text-blue-700"
                href="https://www.instagram.com/agiliumtechnologies/"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="transition-colors rounded text-gray-800 hover:text-blue-700"
                  to="/services"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors rounded text-gray-800 hover:text-blue-700"
                  to="/services/$slug"
                  params={{ slug: "digital-solutions" }}
                >
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors rounded text-gray-800 hover:text-blue-700"
                  to="/services"
                >
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors rounded text-gray-800 hover:text-blue-700"
                  to="/services"
                >
                  Advisory & Transformation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="transition-colors text-gray-800 hover:text-blue-700"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors text-gray-800 hover:text-blue-700"
                  to="/why-agilium"
                >
                  Why Agilium
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors text-gray-800 hover:text-blue-700"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Contact</h4>
            <p className="text-sm">info@agiliumtech.com</p>
            <p className="text-sm">www.agiliumtech.com</p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-xs text-gray-800"
          style={{
            borderTop: "1px solid rgba(59, 130, 246, 0.25)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Agilium Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

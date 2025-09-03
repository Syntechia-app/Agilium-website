import { Link } from "@tanstack/react-router";
import logo from "@/assets/Agilium_logo_resized.png";

export function Footer() {
  return (
    <footer
      className="text-blue-200"
      style={{
        backgroundImage: "linear-gradient(180deg, #000000, #1a1a1a)",
        borderTop: "1px solid rgba(20, 193, 250, 0.25)",
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
                className="w-8 h-8"
              />
              <div className="flex items-baseline gap-2">
                <h3 className="text-white font-bold text-xl">AGILIUM</h3>
              </div>
            </div>
            <p className="text-sm">Where Innovation Meets Success</p>
            <div className="flex gap-3 mt-4" aria-label="Social links">
              <a
                className="transition-colors"
                style={{ color: "#e6f2f5" }}
                href="#"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="transition-colors"
                style={{ color: "#e6f2f5" }}
                href="#"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                className="transition-colors"
                style={{ color: "#e6f2f5" }}
                href="#"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="transition-colors rounded"
                  style={{ color: "#e6f2f5" }}
                  to="/services"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors rounded"
                  style={{ color: "#e6f2f5" }}
                  to="/services/digital-solutions"
                >
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors rounded"
                  style={{ color: "#e6f2f5" }}
                  to="/services"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors rounded"
                  style={{ color: "#e6f2f5" }}
                  to="/services"
                >
                  IoT Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="transition-colors"
                  style={{ color: "#e6f2f5" }}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors"
                  style={{ color: "#e6f2f5" }}
                  to="/why-agilium"
                >
                  Why Agilium
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors"
                  style={{ color: "#e6f2f5" }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm">info@agiliumtech.com</p>
            <p className="text-sm">www.agiliumtech.com</p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-xs"
          style={{
            borderTop: "1px solid rgba(20, 193, 250, 0.25)",
            color: "#cfe8ee",
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

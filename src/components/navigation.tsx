import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/Agilium_logo_resized.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/why-agilium", label: "Why Agilium" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="fixed top-0 w-full backdrop-blur-lg z-40"
      style={{
        background: "var(--header-gradient-dark-bg)",
        borderBottom: "1px solid rgba(20, 193, 250, 0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Agilium logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-bold text-xl">AGILIUM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="transition-colors font-medium rounded focus:outline-none focus-visible:ring-2"
                style={{ color: "#e6f2f5" }}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-cyan)] text-white shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[color:var(--brand-cyan)]">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="primary-mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="primary-mobile-menu"
            className="md:hidden py-4"
            style={{ borderTop: "1px solid rgba(20, 193, 250, 0.25)" }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="transition-colors font-medium px-4 py-2"
                  style={{ color: "#e6f2f5" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Button className="w-full text-white">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

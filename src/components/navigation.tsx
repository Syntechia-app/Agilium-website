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
    { href: "/why-agilium", label: "Why Agilium" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="fixed top-0 w-full z-40 bg-gradient-to-tr from-[#edf2fa]/95 via-[#b1c7e9]/90 to-[#edf2fa]/95"
      style={{
        borderBottom: "1px solid rgba(59, 130, 246, 0.25)",
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
            <span className="text-gray-900 font-bold text-xl">AGILIUM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                activeProps={{
                  className: "border-b-2 border-blue-600",
                }}
                className="transition-colors font-medium rounded focus:outline-none focus-visible:ring-2 text-gray-800 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-800 hover:text-gray-900"
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
            style={{ borderTop: "1px solid rgba(59, 130, 246, 0.25)" }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="transition-colors font-medium px-4 py-2 text-gray-800 hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

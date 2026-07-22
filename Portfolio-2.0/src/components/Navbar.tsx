import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl">
      <div
        className={`container flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg border border-border"
            : "bg-background/40 backdrop-blur-md border border-white/5"
        }`}
      >
        <a href="#hero" className="text-base font-semibold tracking-tight">
          Oluwatomisin Ajayi
        </a>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={`relative text-sm transition ${
                active === item.href.slice(1)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setActive(item.href.slice(1))}
            >
              {item.name}
              {active === item.href.slice(1) && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-primary" />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                active === item.href.slice(1) ? "text-primary" : "hover:text-primary"
              }`}
              onClick={() => {
                setActive(item.href.slice(1));
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

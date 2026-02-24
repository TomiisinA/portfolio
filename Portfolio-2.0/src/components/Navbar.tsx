import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


const navItems = [
  // {
  //   name: "Home",
  //   href: "#hero",
  // },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#skills" },

  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className={`container flex items-center justify-evenly px-8 py-4 transition-all duration-300  ${
          isScrolled
            ? "bg-transparent backdrop-blur-lg shadow-lg"
            : "bg-background/40 backdrop-blur-md border-white/5"
        }`}
      >
        <a href="#hero" className="text-xl font-bold flex items-center">
          {/* <span className="relative z-10">
            <span className="font-bold text-xl text-foreground text-[#e6e3e3] ">
              Oluwatomisin
            </span>{" "}
            Ajayi
          </span> */}

          <Icon icon="ic:baseline-home" width="24" height="24" />
        </a>

        {/* desktop */}

        <div className="hidden md:flex items-center gap-8 ">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={`relative transition ${
                active === item.href.slice(1)
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-foreground/70"
              }`}
              onClick={() => setActive(item.href.slice(1))}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label=""
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

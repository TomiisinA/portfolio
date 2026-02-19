import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-background-light/80 shadow-md py-3 backdrop-blur-md" : "py-5 bg-transparent"}`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="font-bold text-xl text-foreground">Oluwatomisin</span> Ajayi
          </span>
        </a>

        {/* desktop */}

        <div className="hidden md:flex space-x-8">
          {navItems.map((item,key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors duration-300 text-foreground/80"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile */}

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground z-50"
          aria-label="">
          {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
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

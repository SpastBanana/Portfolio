import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = [
    { name: "Home", href: "#home" },
    // { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="fixed w-screen h-16 flex items-center justify-center bg-background z-20">
      <div className="w-4/5 flex items-center justify-between">
        <h1 className="font-bold text-base text-glow">
          <span className="text-primary-foreground">Sebastiaans </span>
          <span className="text-primary">Portfolio</span>
        </h1>
        {/* Desktop */}
        <nav className="hidden md:flex text-sm text-primary-foreground font-light w-2/4 lg:w-1/3 items-center justify-between">
          {NavItems.map((item, key) => (
            <a key={key} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        {/* Mobile */}
        <button
          onClick={toggleMenu}
          className="fixed top-5 right-5 z-50 md:hidden cursor-pointer"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={cn(
            "fixed top-0 left-0 bottom-0 right-0 z-45 md:hidden bg-background",
            isMenuOpen ? "flex" : "hidden",
            "align-center justify-center gap-5 flex-col"
          )}
        >
          <div className="w-auto h-1/3 flex items-center justify-between flex-col z-40">
            {NavItems.map((item, key) => (
              <a
                onClick={() => setIsMenuOpen(false)}
                key={key}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

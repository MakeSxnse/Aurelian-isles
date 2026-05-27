"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    ["DOMŮ", "/"],
    ["PRODEJ", "/prodej"],
    ["SLUŽBY", "/sluzby"],
    ["O NÁS", "/o-nas"],
    ["POBOČKY", "/pobocky"],
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 h-[80px] transition-colors duration-500 border-b ${scrolled || isMenuOpen || !isHomePage
          ? "bg-zinc-50 border-zinc-200 shadow-sm"
          : "bg-transparent border-transparent"
          }`}
      >
        <div
          className="w-full px-6 md:px-[48px] h-full flex items-center justify-between"
        >
          {/* Logo - Left */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className={`text-lg md:text-xl font-medium font-serif tracking-widest uppercase transition-colors duration-500 ${scrolled || isMenuOpen || !isHomePage ? "text-[#001B3A]" : "text-white"
                }`}
            >
              AURELIAN ISLES
            </Link>
          </div>

          {/* Links - Center (Desktop) */}
          <div className="hidden lg:flex items-center justify-center gap-10">
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`text-[10px] font-medium transition-all duration-500 uppercase tracking-widest hover:text-[#785A1A] ${scrolled || !isHomePage ? "text-[#001B3A]/80" : "text-white/80"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Action Button - Right (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Link
              href="/kontakt"
              className={`px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500 border ${scrolled || !isHomePage
                ? "bg-[#001B3A] text-white border-[#001B3A] hover:bg-transparent hover:text-[#001B3A]"
                : "bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-[#001B3A]"
                }`}
            >
              KONTAKT
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 z-[60] transition-colors duration-500 ${scrolled || isMenuOpen || !isHomePage ? "text-[#001B3A]" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-700 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map(([label, href], index) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-serif tracking-widest uppercase text-[#001B3A] hover:text-[#C5A059] transition-all duration-500 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setIsMenuOpen(false)}
            className={`block mt-8 px-12 py-4 bg-[#001B3A] text-white text-xs font-medium uppercase tracking-widest transition-all duration-500 transform text-center ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            POPTAT
          </Link>
        </div>

        {/* Decorative background element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 text-[10vw] font-serif font-black pointer-events-none whitespace-nowrap">
          AURELIAN ISLES
        </div>
      </div>
    </>
  );
}

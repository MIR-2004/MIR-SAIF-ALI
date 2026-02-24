import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'SPECS',
    href: '#about'
  },
  {
    name: 'MODELS',
    href: '#projects'
  },
  {
    name: 'PERFORMANCE',
    href: '#skills'
  },
  {
    name: 'CONTACT',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-garage/95 border-challenger-orange py-2 shadow-glow-orange' : 'bg-transparent border-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Badge */}
        <a href="#" className="group flex items-center gap-2">
          <div className="bg-challenger-orange text-black font-bebas text-2xl px-2 py-1 transform -skew-x-12 border-2 border-white group-hover:bg-white group-hover:border-challenger-orange transition-colors">
            MSA
          </div>
          <span className="font-rajdhani font-bold text-white tracking-widest hidden md:block group-hover:text-challenger-orange transition-colors">
            MIR SAIF ALI
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="font-rajdhani font-bold text-sm tracking-widest text-white hover:text-challenger-orange transition-colors relative group">

              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-challenger-orange transition-all group-hover:w-full"></span>
            </a>
          )}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-4 py-1 font-bebas tracking-wide hover:bg-white hover:text-black transition-all transform hover:-skew-x-12">

            <Zap size={16} className="fill-current" />
            START ENGINE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-challenger-orange"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-garage border-b border-challenger-orange p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="font-bebas text-2xl text-white hover:text-challenger-orange pl-4 border-l-2 border-transparent hover:border-challenger-orange transition-all"
          onClick={() => setIsMobileMenuOpen(false)}>

              {link.name}
            </a>
        )}
        </div>
      }
    </nav>);

}
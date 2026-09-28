import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          <div className="logo-icon">DG</div>
          <div>
            <span>DERMA GLO</span>
            <small>Skin • Hair • Laser Clinic</small>
          </div>
        </a>

        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a className="mobile-call" href="tel:08511722157">
            <Phone size={17} />
            Call Now
          </a>
        </nav>

        <a className="nav-call" href="tel:08511722157">
          <Phone size={17} />
          <span>Call Now</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
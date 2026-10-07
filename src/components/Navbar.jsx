// // import { NavLink } from "react-router-dom";
// // import { Menu, X } from "lucide-react";
// // import { useState } from "react";
// // import "../styles/navbar.css"

// // function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //     window.scrollTo(0, 0);
// //   };

// //   return (
// //     <header className="navbar">
// //       <div className="nav-container">

// //         <NavLink to="/" className="logo" onClick={closeMenu}>
// //           <span className="logo-main">DERMA GLO</span>
// //           <span className="logo-sub">SKIN • HAIR • LASER</span>
// //         </NavLink>

// //         <button
// //           className="mobile-menu"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Toggle menu"
// //         >
// //           {menuOpen ? <X size={24} /> : <Menu size={24} />}
// //         </button>

// //         <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

// //           <NavLink
// //             to="/"
// //             end
// //             className={({ isActive }) =>
// //               isActive ? "nav-link active" : "nav-link"
// //             }
// //             onClick={closeMenu}
// //           >
// //             Home
// //           </NavLink>

// //           <NavLink
// //             to="/about"
// //             className={({ isActive }) =>
// //               isActive ? "nav-link active" : "nav-link"
// //             }
// //             onClick={closeMenu}
// //           >
// //             About
// //           </NavLink>

// //           <NavLink
// //             to="/treatments"
// //             className={({ isActive }) =>
// //               isActive ? "nav-link active" : "nav-link"
// //             }
// //             onClick={closeMenu}
// //           >
// //             Treatments
// //           </NavLink>

// //           <NavLink
// //             to="/gallery"
// //             className={({ isActive }) =>
// //               isActive ? "nav-link active" : "nav-link"
// //             }
// //             onClick={closeMenu}
// //           >
// //             Gallery
// //           </NavLink>

// //           <NavLink
// //             to="/reviews"
// //             className={({ isActive }) =>
// //               isActive ? "nav-link active" : "nav-link"
// //             }
// //             onClick={closeMenu}
// //           >
// //             Reviews
// //           </NavLink>

// //           <NavLink
// //             to="/contact"
// //             className={({ isActive }) =>
// //               isActive ? "nav-link active" : "nav-link"
// //             }
// //             onClick={closeMenu}
// //           >
// //             Contact
// //           </NavLink>

// //           <NavLink
// //             to="/appointment"
// //             className="appointment-btn"
// //             onClick={closeMenu}
// //           >
// //             Book Appointment
// //           </NavLink>

// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar;

// import { useState } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         <a href="#home" className="nav-logo" onClick={closeMenu}>
//           Derma Glo
//         </a>

//         <button
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//         >
//           ☰
//         </button>

//         <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <a href="#home" onClick={closeMenu}>Home</a>
//           <a href="#about" onClick={closeMenu}>About</a>
//           <a href="#treatments" onClick={closeMenu}>Treatments</a>
//           <a href="#gallery" onClick={closeMenu}>Gallery</a>
//           <a href="#reviews" onClick={closeMenu}>Reviews</a>
//           <a href="#appointment" onClick={closeMenu}>Appointment</a>
//           <a href="#contact" onClick={closeMenu}>Contact</a>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "../styles/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-main">DERMA GLO</span>
          <span className="logo-sub">SKIN • HAIR • LASER</span>
        </NavLink>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/treatments"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Treatments
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/appointment"
            className="appointment-btn"
            onClick={closeMenu}
          >
            Book Appointment
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;
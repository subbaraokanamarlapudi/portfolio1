// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Handle scroll to add a background color when scrolled
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle mobile menu open/close
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Navigation links
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-[#112240]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-[#64ffda]">
//             KVSR
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className={`text-sm font-medium hover:text-[#64ffda] transition-colors ${
//                   location.pathname === link.path ? "text-[#64ffda]" : "text-gray-300"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#112240] shadow-xl">
//           <div className="px-4 pt-2 pb-3 space-y-2">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className={`block px-3 py-2 rounded-md text-base font-medium ${
//                   location.pathname === link.path ? "text-[#64ffda]" : "text-gray-300 hover:bg-[#172a45] hover:text-[#64ffda]"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/projects" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Brand Logo */}
//           <Link to="/" className="text-xl font-bold">
//             KVSR
//           </Link>

//           {/* Navigation Links */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`px-3 py-2 text-sm font-medium transition-colors ${
//                   location.pathname === link.href
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-600 hover:text-blue-600"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-700 focus:outline-none"
//             >
//               {isMobileMenuOpen ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white shadow-md">
//             <nav className="flex flex-col space-y-4 p-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   to={link.href}
//                   className={`block text-lg font-medium transition-colors ${
//                     location.pathname === link.href
//                       ? "text-blue-600 border-l-4 border-blue-600 pl-2"
//                       : "text-gray-600 hover:text-blue-600"
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;



// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const socialLinks = [
//     { url: "https://github.com/subbaraokanamarlapudi", icon: <Github size={22} /> },
//     { url: "https://www.linkedin.com/in/subbarao-kanamarlapudi/", icon: <Linkedin size={22} /> },
//     { url: "mailto:subbaraov446@gmail.com", icon: <Mail size={22} /> },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a192f]/90 backdrop-blur-sm shadow-lg" : "bg-[#0a192f]"}`}>
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-[#64ffda] tracking-wider">
//               KVSR
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className=" md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-all ${
//                   location.pathname === link.path ? "text-[#64ffda] font-semibold" : "text-gray-400 hover:text-[#64ffda]"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Social Links - Desktop */}
//           <div className=" md:flex items-center space-x-5">
//             {socialLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-[#64ffda] transition-colors"
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#112240] shadow-xl">
//           <div className="px-4 pt-4 pb-5 space-y-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block px-4 py-2 rounded-md text-base font-medium ${
//                   location.pathname === link.path ? "text-[#64ffda] bg-[#172a45]" : "text-gray-300 hover:bg-[#172a45] hover:text-[#64ffda]"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Social Links - Mobile */}
//             <div className="flex justify-center space-x-6 pt-3">
//               {socialLinks.map((link, index) => (
//                 <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64ffda] transition-colors">
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/Navbar.css"; // Imported CSS file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { url: "https://github.com/subbaraokanamarlapudi", icon: <Github size={28} /> },
    { url: "https://www.linkedin.com/in/subbarao-kanamarlapudi/", icon: <Linkedin size={28} /> },
    { url: "mailto:subbaraov446@gmail.com", icon: <Mail size={32} /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-text">
            KVSR
          </Link>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

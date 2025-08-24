// Navbar.tsx
import React, { useState, useEffect } from "react";
// Define the prop type
interface NavbarProps {
  toggled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggled }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Products",
      children: [
        { label: "Product 1", path: "/products/1" },
        { label: "Product 2", path: "/products/2" },
      ],
    },
    {
      label: "Services",
      children: [
        { label: "Embedded engineering", path: "/services/embedded" },
        { label: "Software engineering services", path: "/services/software" },
        { label: "Digital & IoT services", path: "/services/iot" },
        { label: "Test system engineering", path: "/services/test" },
        { label: "Mechanical engineering", path: "/services/mechanical" },
        { label: "Wire harness engineering", path: "/services/wire" },
        {
          label: "Consulting & resource augmentation",
          path: "/services/consulting",
        },
      ],
    },
    {
      label: "Industries",
      children: [
        { label: "Aerospace & defence", path: "/industries/aerospace" },
        { label: "Automotive", path: "/industries/automotive" },
        { label: "Industrial automation", path: "/industries/automation" },
        { label: "Energy", path: "/industries/energy" },
        { label: "Heavy engineering", path: "/industries/heavy" },
        { label: "Railway", path: "/industries/railway" },
        { label: "Shipbuilding", path: "/industries/shipbuilding" },
      ],
    },
    { label: "Contact", path: "/contact" },
    { label: "Career", path: "/career" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 flex top-navbar  ${
        scrolled ? "shadow-md" : ""
      } ${toggled ? "top-navbar-open" : "top-navbar-close"}`}
    >
      <ul className="flex space-x-8 px-8 py-4 font-semibold text-black">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="relative group"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-blue-600">
              {item.label}
              {item.children && <span className="ml-1">▼</span>}
            </button>

            {/* Dropdown */}
            {item.children && openMenu === item.label && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded-md">
                {item.children.map((sub, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                  >
                    {sub.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="list-dis flex space-x-4 px-8 py-2 font-semibold text-black ml-auto items-center">
        <li className="inline mr-4">
          📞{" "}
          <a href="tel:+919900932214" className="hover:text-blue-400">
            +91-9900932214
          </a>
        </li>
        <a
          href="mailto:info@Sagnastechsys.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 info@Sagnastechsys.com
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;

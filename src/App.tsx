

// App.tsx
import React, { useState } from "react";
import SidebarMenu from "./Sidebar";
import type { MenuItemType } from "./Sidebar";
import Navbar from "./Navbar";

import "./App.css"; // Assuming you have some global styles
// import PageUnderConstruction from "../src/views/PageUnderConstruction/PageUnderConstruction";
import {
  FaHome,
  FaInfoCircle,
  FaBox,
  FaCogs,
  FaIndustry,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";
// const industriesData = [
//   { imageSrc: "/images/aerospace.jpg", title: "Aerospace" },
//   { imageSrc: "/images/automotive.jpg", title: "Automotive" },
//   { imageSrc: "/images/railways.jpg", title: "Railways" },
//   { imageSrc: "/images/heavy-engineering.jpg", title: "Heavy Engineering" },
//   { imageSrc: "/images/ship-building.jpg", title: "Ship Building" },
//   { imageSrc: "/images/energy.jpg", title: "Energy" },
// ];

const menuData: MenuItemType[] = [
  { label: "Home", path: "/", icon: <FaHome /> },
  { label: "About", path: "/about", icon: <FaInfoCircle /> },
  {
    label: "Products",
    icon: <FaBox />,
    children: [
      { label: "Product 1", path: "/products/1" },
      { label: "Product 2", path: "/products/2" },
    ],
  },
  {
    label: "Services",
    icon: <FaCogs />,
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
    icon: <FaIndustry />,
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
  { label: "Contact", path: "/contact", icon: <FaEnvelope /> },
  { label: "Career", path: "/career", icon: <FaBriefcase /> },
];

import { Outlet } from "react-router-dom";



const App: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  console.log("toggled", toggled);
  return (
    <div style={{ display: "flex", height: "100vh" }} className="w-full">
      <SidebarMenu
        menuItems={menuData}
        defaultCollapsed={false}
        toggled={toggled}
        setToggled={setToggled}
      />
      <main
        style={{
          flex: 1,
          padding: "20px",
          width: !toggled ? "calc(100% - 250px)" : "calc(100% - 80px)",
        }}
        className={`${
          !toggled ? "sidebar-open" : "sidebar-close"
        } transition-all duration-300`}
      >
        <Navbar toggled={!toggled} />
        {/* <ContactInfo /> */}

        <Outlet />
        {/* <PageUnderConstruction /> */}
      </main>
    </div>
  );
};

export default App;

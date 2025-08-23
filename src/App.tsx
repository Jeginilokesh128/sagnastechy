
   const socialIcons = [
     {
       href: "#",
       icon: '<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>',
     },
     {
       href: "#",
       icon: '<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>',
     },
     {
       href: "#",
       icon: '<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.618 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
     },
   ];

// App.tsx
import React, { useState } from "react";
import SidebarMenu from "./Sidebar";
import type { MenuItemType } from "./Sidebar";
import Navbar from "./Navbar";
import ContactInfo from "./Footer";
import ServicesSection from "./ServiceCard";
import IndustriesSection from "./IndustriesSection";
import "./App.css"; // Assuming you have some global styles
import AboutSection from "./Aboutus";
import AppRoutes from "../src/views/PageUnderConstruction/PageUnderConstruction"
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
const industriesData = [
  { imageSrc: "assets/1.jpg", title: "Aerospace" },
  { imageSrc: "assets/1.jpg", title: "Automotive" },
  { imageSrc: "assets/1.jpg", title: "Railways" },
  { imageSrc: "assets/1.jpg", title: "Heavy Engineering" },
  { imageSrc: "assets/1.jpg", title: "Ship Building" },
  { imageSrc: "assets/1.jpg", title: "Energy" },
];
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
      { label: "Consulting & resource augmentation", path: "/services/consulting" },
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
import CarouselComponent from "./Cursolheader";

const carouselItems = [
  {
    imageSrc: "/assets/1.jpg",
    title: "WELCOME TO SAMNIYA",
    subtitle: "Power is nothing without control",
  },
  {
    imageSrc: "/assets/2.jpg",
    title: "DIGITAL & IOT SERVICES",
    subtitle: "Innovating for the future",
  },
  {
    imageSrc: "/assets/3.jpg",
    title: "ENGINEERING SOLUTIONS",
    subtitle: "Delivering excellence worldwide",
  },
];

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
        <div className="demo-carousel">
          <CarouselComponent
            items={carouselItems}
            autoPlay
            infiniteLoop
            interval={4000}
          />
        </div>
        <ServicesSection />
        <AboutSection />
        <IndustriesSection industries={industriesData} />
        <ContactInfo
          logoSrc="https://via.placeholder.com/100x50"
          logoAlt="Saminya Logo"
          companyName="Saminya"
          slogan="Innovative Insights in Progress"
          address="Building No. 12, First Floor, 3rd Cross, Patel Narayana Reddy Layout, 6th Block, Koramangala, Bangalore-560103"
          email="info@saminyatechsyst.com"
          phone="+91-9900932214"
          socialLinks={socialIcons}
        />
        <AppRoutes/>
      </main>
    </div>
  );
};

export default App;



// App.tsx
// import React from "react";
//  import AppRoutes from "../src/views/PageUnderConstruction/PageUnderConstruction";

// const App: React.FC = () => {
//   return (
//     <div>
//       <main>
//         <AppRoutes />
//       </main>
//     </div>
//   );
// };

// export default App;



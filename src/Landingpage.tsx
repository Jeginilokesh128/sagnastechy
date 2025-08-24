import React from "react";
import MainSections from "./Layoutpagedata";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const carouselItems = [
  {
    imageSrc: "/assets/1.jpg",
    title: "WELCOME TO SAGNAs",
    subtitle: "Power is nothing without control",
  },
  {
    imageSrc: "/assets/2.jpg",
    title: "DIGITAL & IOT SERVICES",
    subtitle: "Innovating for the future",
  },
  {
    imageSrc: "/assets/4.jpg",
    title: "ENGINEERING SOLUTIONS",
    subtitle: "Delivering excellence worldwide",
  },
];
const industriesData = [
  { imageSrc: "assets/1.jpg", title: "Aerospace" },
  { imageSrc: "assets/auto2.jpg", title: "Automotive" },
  { imageSrc: "assets/3.jpg", title: "Railways" },
  { imageSrc: "assets/4.jpg", title: "Heavy Engineering" },
  { imageSrc: "assets/5.jpg", title: "Ship Building" },
  { imageSrc: "assets/6.jpg", title: "Energy" },
];

 const socialIcons = [
   { href: "https://facebook.com", icon: <FaFacebookF /> },
   { href: "https://twitter.com", icon: <FaTwitter /> },
   { href: "https://instagram.com", icon: <FaInstagram /> },
   { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
 ];

const contactInfo = {
  logoSrc: "https://via.placeholder.com/100x50",
  logoAlt: "Saminya Logo",
  companyName: "Saminya",
  slogan: "Innovative Insights in Progress",
  address:
    "Building No. 12, First Floor, 3rd Cross, Patel Narayana Reddy Layout, 6th Block, Koramangala, Bangalore-560103",
  email: "info@saminyatechsyst.com",
  phone: "+91-9900932214",
  socialLinks: socialIcons,
};



const Landingpage: React.FC = () => {
  return (
    <MainSections
      industriesData={industriesData}
      contactInfo={contactInfo}
      carouselItems={carouselItems}
    />
  );
};

export default Landingpage;

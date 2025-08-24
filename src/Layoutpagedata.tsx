import React from "react";
import ServicesSection from "./ServiceCard";
import AboutSection from "./Aboutus";
import IndustriesSection from "./IndustriesSection";
import ContactInfo from "./Footer";
import CarouselComponent from "./Cursolheader";

// Props type
interface Industry {
  imageSrc: string;
  title: string;
}

interface ContactInfoProps {
  logoSrc: string;
  logoAlt: string;
  companyName: string;
  slogan: string;
  address: string;
  email: string;
  phone: string;
  socialLinks: { href: string; icon: React.ReactNode }[];
}

// 👇 Add a type for carousel items
interface CarouselItem {
  imageSrc: string;
  title: string;
  subtitle: string;
}

interface MainSectionsProps {
  industriesData: Industry[];
  contactInfo?: ContactInfoProps;
  carouselItems: CarouselItem[]; // 👈 Added
}

const MainSections: React.FC<MainSectionsProps> = ({
  industriesData,
  contactInfo,
  carouselItems,
}) => {
  return (
    <>
      <div className="demo-carousel mt-3">
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
      {contactInfo && <ContactInfo {...contactInfo} />}
    </>
  );
};


export default MainSections;

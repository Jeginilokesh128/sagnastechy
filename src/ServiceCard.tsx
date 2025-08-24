import React from "react";
import ServiceCard from "./Servicecardlist";
import { FaLaptop, FaCloud, FaCog, FaRandom } from "react-icons/fa"; // Example icons

const services = [
  {
    icon: <FaLaptop size={40} className="text-gray-500" />,
    title: "Software Engineering",
    description: "Sagnas provides software engineering support services",
  },
  {
    icon: <FaCloud size={40} className="text-gray-500" />,
    title: "Digital & IOT Services",
    description: "Sagnas provides digital and IoT services",
  },
  {
    icon: <FaCog size={40} className="text-gray-500" />,
    title: "Embedded Engineering",
    description: "Sagnas provides embedded engineering services",
  },
  {
    icon: <FaRandom size={40} className="text-gray-500" />,
    title: "Wire Harness Engineering",
    description: "Sagnas provides wire harness engineering",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center">
        Our <span className="text-blue-600">Services</span>
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-12">
        Sagnas involved in executing wide variety of services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service?.title}
            description={service?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

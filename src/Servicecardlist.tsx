import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="
        text-center p-4 border rounded shadow 
        flex flex-col justify-center items-center 
        transform transition-transform duration-300 ease-in-out 
        hover:scale-110 hover:shadow-2xl hover:z-10 
      "
    >
      <div className="mb-2">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

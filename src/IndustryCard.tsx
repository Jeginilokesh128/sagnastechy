
import React from "react";

interface IndustryCardProps {
  imageSrc: string;
  title: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-[300px]">
      <img src={imageSrc} alt={title} className="w-full h-[250px] object-cover" />
      <div className="p-2 text-center font-medium">{title}</div>
    </div>
  );
};

export default IndustryCard;

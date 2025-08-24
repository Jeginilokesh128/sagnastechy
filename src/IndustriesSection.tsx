// components/IndustriesSection.tsx
import React from "react";
import IndustryCard from "./IndustryCard";

interface Industry {
  imageSrc: string;
  title: string;
}

interface IndustriesSectionProps {
  industries: Industry[];
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  industries,
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold">Industries we serve</h2>
        <p className="text-gray-600 mt-2">
          We are committed to delivering value with industry-specific solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {industries.map((industry, idx) => (
          <IndustryCard
            key={idx}
            imageSrc={industry.imageSrc}
            title={industry.title}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;

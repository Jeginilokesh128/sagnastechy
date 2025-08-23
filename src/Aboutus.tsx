// AboutSection.tsx
import React from "react";

const AboutSection: React.FC = ()=> {
    
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          About <span className="text-blue-600">Samniya</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-700 text-justify">
          Samniya is an initiation form like-minded technology experts from all
          the major industry segments to support our customers with expert
          solutions. We extend our support to industries like Aerospace,
          Automotive, Railways, Industrial Automation, and IT Industries. We
          have the right blend of enthusiastic and experienced engineers in the
          domains of Structural/Component/Tools Engineering, Software
          Engineering, Embedded Engineering, Wire Harness Fabrication, Test
          Systems & Solutions, and Talent Management. With years of domain and
          technology expertise, our team shall be a perfect solution for our
          customers globally to rely on us for all their needs in end-to-end
          solutions and support. With our global-friendly business process and
          methodology, we offer the best-in-class, cost-effective support and
          services to our local and global customers to ensure a long-term
          mutually beneficial association with our organization.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;

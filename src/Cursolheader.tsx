// CarouselComponent.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface CarouselItem {
  imageSrc: string;
  title?: string;
  subtitle?: string;
}

interface CarouselComponentProps {
  items: CarouselItem[];
  showThumbs?: boolean;
  autoPlay?: boolean;
  infiniteLoop?: boolean;
  interval?: number;
  height?: string; // 👈 new prop for uniform height
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  items,
  showThumbs = false,
  autoPlay = false,
  infiniteLoop = false,
  interval = 3000,
  height = "500px", // 👈 default height
}) => {
  return (
    <Carousel
      showThumbs={showThumbs}
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      interval={interval}
      showStatus={false}
    >
      {items.map((item, index) => (
        <div key={index} className="relative" style={{ height }}>
          {/* Background Image */}
          <img
            src={item.imageSrc}
            alt={item.title || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
            {item.title && (
              <h2 className="text-4xl font-bold mb-4 text-center">
                {item.title}
              </h2>
            )}
            {item.subtitle && (
              <p className="text-lg md:text-xl text-center">{item.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

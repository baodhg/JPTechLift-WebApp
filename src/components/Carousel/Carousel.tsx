import { useEffect, useState } from "react";

export interface Slide {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface CarouselProps {
  slides: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  transitionEffect?: "slide" | "fade";
}

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
  transitionEffect = "fade",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-[530px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full top-0 left-0 flex items-center justify-center transition-all duration-700 ease-in-out 
              ${transitionEffect === "fade" ? (index === current ? "opacity-100 z-10" : "opacity-0 z-0") : ""}
              ${transitionEffect === "slide" ? `transform translate-x-${(index - current) * 100}` : ""}
            `}
          >
            <img
              src={slide.src}
              alt={slide.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0"
            />

            <div className="relative z-10 text-white px-4 flex flex-col items-center text-center max-w-[90%] md:max-w-5xl mx-auto space-y-6">
              {slide.title && (
                <h1 className="font-grifo text-white text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold leading-tight drop-shadow-[4px_4px_10px_rgba(0,0,0,0.7)]">
                  {slide.title}
                </h1>
              )}
              {slide.description && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 mb-2 drop-shadow-md max-w-2xl">
                  {slide.description}
                </p>
              )}
              {slide.ctaText && (
                <a
                  href={slide.ctaLink || "#"}
                  className="mt-4 px-5 py-2 border-2 border-white text-white bg-transparent 
      hover:bg-white hover:text-black transition-all duration-300 font-medium text-base md:text-lg"
                >
                  {slide.ctaText}
                </a>
              )}
            </div>

            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 border-2 border-white-400 rotate-45 ${
              i === current ? "bg-[#cba052]" : "bg-[#cba052]/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

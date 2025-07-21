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
      <div className="relative h-[475px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full top-0 left-0 flex items-center justify-center transition-all duration-700 ease-in-out 
              ${
                transitionEffect === "fade"
                  ? index === current
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                  : ""
              }
              ${
                transitionEffect === "slide"
                  ? `transform translate-x-${(index - current) * 100}`
                  : ""
              }
            `}
          >
            <img
              src={slide.src}
              alt={slide.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0"
            />

            {/* Overlay content */}
            <div className="relative z-10 text-center text-white max-w-8xl px-4">
              {slide.title && (
                <h1
                  style={{
                    fontFamily: "grifo_mmedium",
                    fontSize: "50px",
                    lineHeight: "50px",
                    margin: "0px 0px 30px",
                    textAlign: "center",
                  }}
                  className="font-grifo text-white text-[36px] md:text-[68px] font-black tracking-wide text-center drop-shadow-[3px_4px_4px_rgba(0,0,0,2)] leading-tight"
                >
                  {slide.title}
                </h1>
              )}
              {slide.description && (
                <p className="text-sm md:text-lg mt-4 mb-4 drop-shadow">
                  {slide.description}
                </p>
              )}
              {slide.ctaText && (
                <a
                  href={slide.ctaLink || "#"}
                  className="mt-4 inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

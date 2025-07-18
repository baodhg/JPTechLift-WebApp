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
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
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
            <div className="relative z-10 text-center text-white max-w-2xl px-4">
              {slide.title && (
                <h2
                  className="whitespace-nowrap text-2xl md:text-4xl font-bold mb-5 drop-shadow"
                >
                  {slide.title}
                </h2>
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

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-[47%] left-4 z-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[47%] right-4 z-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition"
      >
        ❯
      </button>

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

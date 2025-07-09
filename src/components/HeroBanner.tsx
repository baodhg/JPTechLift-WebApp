// src/components/HeroSection.tsx
import Carousel from "./Carousel/Carousel";
import TopBar from "./Navbar/DesktopMenu/TopBar";
import MenuBar from "./Navbar/DesktopMenu/MenuBar";
import { slides } from "../data/HeroSlide";

export default function HeroSection() {
  return (
    <header className="relative pt-[120px] w-full h-full">
      <Carousel
        slides={slides}
        autoSlide
        autoSlideInterval={7000}
        transitionEffect="fade"
      />

      {/* NAVIGATION CARD */}
      <div className="absolute inset-x-0 top-0 z-40 flex justify-center">
        <div className="relative w-full overflow-visible bg-white shadow-xl pb-5">

          {/* ---- TOP-BAR trắng ---- */}
          <TopBar />

          {/* ---- MENU-BAR xanh ---- */}
          <div className="absolute inset-x-11 top-full -translate-y-1/3 transform">
            <MenuBar scrolled={false}
                     className="rounded-lg bg-[#012452] px-8 py-4 shadow-md" />
          </div>
        </div>
      </div>
    </header>
  );
}

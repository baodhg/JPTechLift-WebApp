// src/components/HeroSection.tsx
import Carousel from "../Carousel/Carousel";
import { slides } from "../../data/HeroSlide";
import NavBar from "../Navbar/Navbar";

export default function HeroSection() {
  return (
    <header>
      {/* NAVIGATION CARD */}
      <div>
        <NavBar />
      </div>
      <Carousel slides={slides} autoSlide autoSlideInterval={5000} transitionEffect="fade" />
    </header>
  );
}

// HeroFooter.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import backgroundImage from "../../assets/images/BannerFooter.jpg";

export default function HeroFooter() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Ảnh nền */}
      <img
        src={backgroundImage}
        alt="JP TECHLIFT background"
        className="w-full h-full object-cover object-center absolute inset-0 z-0 scale-105"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
      />

      {/* Lớp phủ đen mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Nội dung chính */}
      <div
        className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4"
        data-aos="slide-up"
        data-aos-delay="400"
      >
        <h3 className="font-inter text-white text-[42px] md:text-[64px] font-black tracking-wide text-center drop-shadow-[3px_4px_4px_rgba(0,0,0,2)] leading-tight">
          HÃY ĐỂ CHÚNG TÔI
          <br />
          MANG LẠI GIÁ TRỊ
          <br />
          CHO BẠN
        </h3>
      </div>
    </section>
  );
}
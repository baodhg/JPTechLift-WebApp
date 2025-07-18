// HeroBanner.tsx
import backgroundImage from "../../assets/images/BannerFooter.jpg";

export default function HeroFooter() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Ảnh nền */}
      <img
        src={backgroundImage}
        alt="JP TECHLIFT background"
        className="w-full h-full object-cover object-center absolute inset-0 z-0"
      />

      {/* Lớp phủ đen mờ (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Nội dung chính */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4">
        <h3 className="font-inter text-white text-[44px] md:text-[64px] font-black tracking-wide text-center drop-shadow-[3px_4px_4px_rgba(0,0,0,2)] leading-tight">
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

import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WorldMap from "../../assets/images/WorldMap.png";
import pattern from "../../assets/images/pattern.png";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full py-6 px-6 md:px-20 text-center md:pb-10 overflow-hidden bg-texture-bg bg-texture-pattern bg-[length:8px_8px]">
      {/* Pattern bên trái ở desktop – ngang hàng tiêu đề */}
      <img
        src={pattern}
        alt="pattern"
        className="ml-20 hidden md:block w-[200px] opacity-40 rotate-180 absolute top-10 left-0"
      />
      {/* Nội dung section */}
      <h2
        className="hidden md:block md:mt-14 font-inter font-medium text-[36px] uppercase text-center mb-[30px]"
        data-aos="fade-up"
      >
        VỀ CHÚNG TÔI
      </h2>
      {/* Horizontal accent line */}
      <span
        className="hidden md:block w-16 h-1 bg-[#CBA052] mx-auto mb-10 md:mb-20 rounded"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      {/* Sub‑tagline */}
      <p
        className="text-[#041E42] text-xl md:text-2xl font-semibold text-left md:text-center font-noto mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span className="font-inter font-bold">JP TECHLIFT</span> – Tinh hoa
        kiến trúc, vun đắp giá trị trường tồn.
      </p>
      <div className="mb-10 relative" data-aos="fade-up" data-aos-delay="300">
        <img
          src={WorldMap}
          alt="Bản đồ thế giới"
          className="max-w-[1200px] w-full h-auto mx-auto 
               drop-shadow-[6px_6px_0px_rgba(203,160,82,0.6)]"
        />
      </div>
      <p
        className="text-left md:text-center font-nunito max-w-[1000px] text-xl mx-auto text-gray-700 leading-relaxed mb-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <strong className="text-[#041E42]">JP TECHLIFT</strong>, với sứ mệnh
        định hình lại quan niệm về sự chuyển dịch trong không gian, mang đến
        những kiến giải vượt trội về công năng và thẩm mỹ.
      </p>
      <div
        className="relative w-full flex flex-col md:flex-row justify-start md:justify-center items-center mb-16"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {/* --- Mobile: Button + pattern hàng ngang --- */}
        <div className="flex md:hidden w-full flex-row justify-between items-center h-12">
          {/* Nút bên trái */}
          <Link
            to="/ve-chung-toi"
            className="w-[140px] h-full py-2 px-4 bg-[#041E42] text-white font-inter font-semibold transition-all border border-[#041E42] hover:bg-white hover:text-[#041E42] text-center flex items-center justify-center"
          >
            Về chúng tôi
          </Link>

          {/* Pattern bên phải: 2 hình nằm ngang, cao bằng button */}
          <div className="flex flex-row items-center gap-1 h-full">
            <img
              src={pattern}
              alt="pattern"
              className="h-full w-auto opacity-60"
            />
            <img
              src={pattern}
              alt="pattern"
              className="h-full w-auto opacity-60 rotate-180"
            />
          </div>
        </div>

        {/* --- Desktop: Button ở giữa --- */}
        <Link
          to="/ve-chung-toi"
          className="hidden md:flex z-10 w-[200px] py-4 px-4 bg-[#041E42] text-white font-inter font-semibold transition-all border border-[#041E42] hover:bg-white hover:text-[#041E42] text-center items-center justify-center"
        >
          Về chúng tôi
        </Link>

        {/* --- Desktop: Pattern phải --- */}
        <img
          src={pattern}
          alt="pattern"
          className="hidden md:block w-[200px] opacity-40 absolute right-0"
        />
      </div>
      <div
        className="text-center mb-16"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="flex justify-center gap-2 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.4 8.171L12 18.896l-7.334 3.866 1.4-8.171L.132 9.21l8.2-1.192z" />
              </svg>
            ))}
        </div>

        <h3
          className="text-xl md:text-3xl font-semibold text-[#041E42] font-nunito"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Chất lượng tạo nên thương hiệu
        </h3>
      </div>
      {/* TƯ VẤN */}
      <p
        className="text-[#041E42] text-xl md:text-2xl font-semibold text-left md:text-center font-noto mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Giải pháp thang máy hoàn hảo cho mọi không gian
      </p>

      <div className="mb-10">
        <p
          className="text-left md:text-center font-nunito max-w-[1000px] text-xl mx-auto text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Tại <strong className="text-[#041E42]">JP TECHLIFT</strong>, chúng tôi
          mang đến những giải pháp thang máy tối ưu cho mọi tình huống – từ nhà
          ở, văn phòng đến trung tâm thương mại hay bất kỳ công trình nào khác.
          Khám phá hệ sinh thái sản phẩm đa dạng của chúng tôi và liên hệ ngay
          để được tư vấn thiết kế theo yêu cầu cùng báo giá nhanh chóng, minh
          bạch.
        </p>
        <div className="w-full flex justify-center mb-20">
          <div
            className="flex flex-col md:flex-row items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {/* Nút LIÊN HỆ TƯ VẤN */}
            <button className="group inline-flex items-center gap-2 border border-[#041E42] bg-white px-4 py-2 text-[#041E42] font-semibold hover:bg-[#e5e7eb] hover:text-[#041E42] transition-colors duration-300 whitespace-nowrap">
              LIÊN HỆ TƯ VẤN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 animate-[wiggle_1s_ease-in-out_infinite]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Nút KHÁM PHÁ */}
            <button className="group inline-flex items-center gap-2 border border-[#041E42] bg-[#041E42] text-white px-6 py-2 font-semibold hover:bg-white hover:text-[#041E42] transition-colors duration-300">
              KHÁM PHÁ GIẢI PHÁP THANG MÁY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 animate-[wiggle_1s_ease-in-out_infinite] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <p
          className="text-[#041E42] font-nunito italic text-lg md:text-xl leading-relaxed max-w-5xl mx-auto text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          "JP TECHLIFT – Nơi sự chuẩn mực gặp gỡ tầm nhìn, định hình tương lai
          của không gian kiến trúc."
        </p>
      </div>
    </section>
  );
}

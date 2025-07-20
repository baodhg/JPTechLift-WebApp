import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WorldMap from "../../assets/images/WorldMap.png";
import AboutUs1 from "../../assets/images/AboutUs1.jpg";
import AboutUs2 from "../../assets/images/AboutUs2.jpg";
import AboutUs3 from "../../assets/images/AboutUs3.jpg";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-white py-6 px-6 md:px-20 text-center md:pb-24">
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

      <div className="mb-10" data-aos="fade-up" data-aos-delay="300">
        <img
          src={WorldMap}
          alt="Bản đồ thế giới"
          className="max-w-[1200px] w-full h-auto mx-auto"
        />
      </div>

      <p
        className="text-left md:text-center font-nunito max-w-[1000px] text-xl mx-auto text-gray-700 leading-relaxed mb-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <strong className="text-[#041E42]">JP TECHLIFT</strong>, với sứ mệnh
        định hình lại quan niệm về sự chuyển dịch trong không gian, mang đến
        những kiến giải vượt trội về công năng và thẩm mỹ.
      </p>

      <div
        className="w-full flex justify-start md:justify-center mb-16"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <Link
          to="/ve-chung-toi"
          className="w-[140px] md:w-[200px] py-4 px-4 bg-[#041E42] text-white font-inter font-semibold transition-all border border-[#041E42] hover:bg-white hover:text-[#041E42] text-center flex items-center justify-center"
        >
          Về chúng tôi
        </Link>
      </div>

      <div
        className="text-center mb-20"
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

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-20"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {[AboutUs1, AboutUs2, AboutUs3].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`ảnh thang máy ${idx + 1}`}
            className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] object-cover shadow-md transition-transform hover:scale-105 duration-300"
          />
        ))}
      </div>

      <section className="bg-white">
        <div className="container mx-auto px-4">
          <p
            className="text-[#041E42] font-nunito italic text-lg md:text-xl leading-relaxed max-w-5xl mx-auto text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            JP TECHLIFT – Nơi sự chuẩn mực gặp gỡ tầm nhìn, định hình tương lai
            của không gian kiến trúc.
          </p>

          <p
            className="text-left md:text-center font-nunito text-lg md:text-xl max-w-5xl mx-auto text-gray-800 leading-relaxed mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trong bản thể của mọi kiến trúc, thang máy không chỉ là một cấu phần
            tiện ích, mà còn là linh hồn của sự vận động.
          </p>

          <p
            className="text-left md:text-center font-nunito text-lg md:text-xl max-w-5xl mx-auto text-gray-800 leading-loose"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Chúng tôi không chỉ cung cấp sản phẩm, mà kiến tạo những giải pháp
            hòa quyện giữa tinh hoa công nghệ, chuẩn mực an toàn và sự tinh tế
            trong từng đường nét. Mỗi dự án là sự kết tinh của tư duy thấu đáo
            và kỹ năng chế tác bậc thầy, minh chứng cho sự vững bền và giá trị
            thăng hoa theo thời gian.
          </p>
        </div>
      </section>
    </section>
  );
}

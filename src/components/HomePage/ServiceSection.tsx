import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Tư Vấn Thiết Kế Thang Máy",
    description: "Thiết kế từ nền móng – tối ưu công năng, thẩm mỹ, chi phí.",
    image: service1,
  },
  {
    title: "Lắp Đặt Vận Hành Thang Máy",
    description: "Triển khai chuẩn xác – an toàn, ổn định lâu dài.",
    image: service2,
  },
  {
    title: "Bảo Trì – Bảo Dưỡng Thang Máy",
    description: "Phản ứng nhanh 3 giờ – đảm bảo vận hành ổn định.",
    image: service3,
  },
  {
    title: "Cải Tạo Sửa Chữa Thang Máy",
    description: "Nâng cấp toàn diện – tăng an toàn, nâng tầm trải nghiệm.",
    image: service4,
  },
];

export default function ServiceSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-texture-bg bg-texture-pattern bg-[length:8px_8px] py-16 px-4">
      {/* Title */}
      <h1
        className="text-[#041E42] md:text-black font-inter font-bold md:font-medium text-[30px] md:text-[36px] uppercase text-center mb-5 md:mb-10"
        data-aos="fade-up"
      >
        DỊCH VỤ THANG MÁY
      </h1>

      {/* Border */}
      <div
        className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-10 md:mb-20 rounded-[2px]"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      {/* Cards grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1280px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-[180px] h-[140px] object-cover rounded-xl mb-5 border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="font-inter text-[20px] md:text-[22px] font-bold uppercase text-[#041E42] mb-3">
              {service.title}
            </h3>
            <p className="font-nunito text-sm md:text-base text-[#444] leading-relaxed">
              {service.description}
            </p>

            <button className="group mt-5 inline-flex items-center gap-2 border border-[#041E42] px-4 py-2 text-[#041E42] font-semibold rounded-full hover:bg-[#041E42] hover:text-white transition-colors duration-300">
              XEM THÊM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        ))}
      </div>
    </section>
  );
}

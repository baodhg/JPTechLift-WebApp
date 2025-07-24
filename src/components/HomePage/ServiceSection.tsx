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

interface ServiceMobile {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Tư Vấn - Thiết Kế Thang Máy",
    description: "Thiết kế từ nền móng – tối ưu công năng, thẩm mỹ, chi phí.",
    image: service1,
  },
  {
    title: "Lắp Đặt - Vận Hành Thang Máy",
    description: "Triển khai chuẩn xác – an toàn, ổn định lâu dài.",
    image: service2,
  },
  {
    title: "Bảo Trì – Bảo Dưỡng Thang Máy",
    description: "Phản ứng nhanh 3 giờ – đảm bảo vận hành ổn định.",
    image: service3,
  },
  {
    title: "Cải Tạo - Sửa Chữa Thang Máy",
    description: "Nâng cấp toàn diện – tăng an toàn, nâng tầm trải nghiệm.",
    image: service4,
  },
];

const MobileServices: ServiceMobile[] = [
  {
    title: "Giải pháp và Thiết kế",
    description: "Thiết kế từ nền móng – tối ưu công năng, thẩm mỹ và chi phí.",
    image: service1,
  },
  {
    title: "Lắp Đặt và Vận Hành",
    description: "Thi công chính xác – đảm bảo an toàn và vận hành lâu dài.",
    image: service2,
  },
  {
    title: "Bảo Trì và Bảo Dưỡng",
    description: "Phản ứng nhanh 3 giờ – duy trì hiệu suất và kiểm tra định kỳ.",
    image: service3,
  },
  {
    title: "Cải Tạo và Sửa Chữa",
    description: "Nâng cấp toàn diện – cải thiện an toàn và trải nghiệm sử dụng.",
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
        className="mt-20 font-inter font-semibold md:font-medium md:text-[36px] text-[30px] uppercase text-center mb-5 md:mb-10 text-[#041E42] md:text-black"
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

      {/* --- PC Layout --- */}
      <div
        className="hidden md:grid lg:grid-cols-4 grid-cols-2 gap-6 max-w-[1280px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[160px] object-cover object-center rounded-sm mb-5 border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="font-inter text-[22px] font-bold uppercase text-[#041E42] mb-3 min-h-[52px]">
              {service.title}
            </h3>
            <p className="font-nunito text-base text-[#444] leading-relaxed min-h-[60px]">
              {service.description}
            </p>

            <button className="group mt-5 inline-flex items-center gap-2 border border-[#041E42] px-4 py-2 text-[#041E42] text-[14px] font-semibold hover:bg-[#041E42] hover:text-white transition-colors duration-300">
              XEM THÊM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform animate-[wiggle_1s_ease-in-out_infinite]"
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

      {/* --- Mobile 2x2 Layout --- */}
      <div
        className="grid grid-cols-2 gap-4 md:hidden max-w-[480px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {MobileServices.map((ServiceMobile, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-2 flex flex-col overflow-hidden group"
          >
            <div className="relative w-full h-[120px] rounded-md overflow-hidden mb-3">
              <img
                src={ServiceMobile.image}
                alt={ServiceMobile.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                  XEM THÊM
                </span>
              </div>
            </div>

            <h3 className="font-inter text-[14px] font-bold uppercase text-[#041E42] mb-1 leading-tight">
              {ServiceMobile.title}
            </h3>

            <p className="text-xs text-[#444] leading-snug min-h-[50px] mb-3">
              {ServiceMobile.description}
            </p>

            <button className="w-full border border-[#041E42] px-3 py-1.5 text-[12px] text-[#041E42] font-semibold hover:bg-[#041E42] hover:text-white transition-colors duration-300">
              XEM THÊM
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

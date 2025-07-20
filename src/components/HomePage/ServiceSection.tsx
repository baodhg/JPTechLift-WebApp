import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Service {
  title: string;
  description: string[];
  image: string;
}

const services: Service[] = [
  {
    title: "Tư Vấn Thiết Kế Thang Máy",
    description: [
      "Thiết kế thang máy chính là bước khởi đầu định hình cho toàn bộ công trình. JP TECHLIFT tư vấn từ nền tảng, giúp khách hàng lựa chọn giải pháp tối ưu về công năng, thẩm mỹ và chi phí.",
      "Vậy tại sao không chọn JP TECHLIFT ngay từ đầu?",
    ],
    image: service1,
  },
  {
    title: "Lắp Đặt Vận Hành Thang Máy",
    description: [
      "Quy trình lắp đặt và vận hành được JP TECHLIFT triển khai bài bản bởi đội ngũ kỹ thuật chuyên nghiệp, luôn luôn đảm bảo độ chính xác, tính an toàn và sự ổn định lâu dài cho từng công trình.",
      "Sự chuyên nghiệp là điểm mạnh của JP TECHLIFT.",
    ],
    image: service2,
  },
  {
    title: "Bảo Trì – Bảo Dưỡng Thang Máy",
    description: [
      "Chúng tôi xây dựng mạng lưới kỹ thuật phản ứng nhanh. Chỉ trong vòng 3 giờ, JP TECHLIFT sẵn sàng có mặt để đồng hành, xử lý mọi vấn đề phát sinh trong quá trình vận hành thang máy.",
      "Dịch vụ giúp đảm bảo thang máy hoạt động ổn định.",
    ],
    image: service3,
  },
  {
    title: "Cải Tạo Sửa Chữa Thang Máy",
    description: [
      "Dù đạt chuẩn cao, thang máy vẫn cần cải tạo sau thời gian dài sử dụng. JP TECHLIFT cung cấp giải pháp nâng cấp trọn vẹn, gia tăng độ an toàn và nâng tầm trải nghiệm khách hàng.",
      "Uy tín của JP TECHLIFT đến từ chất lượng cải tạo.",
    ],
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
    <section className="bg-white py-16 px-4">
      {/* Title */}
      <h1
        className="font-inter font-medium text-[36px] uppercase text-center mb-[30px]"
        data-aos="fade-up"
      >
        DỊCH VỤ THANG MÁY
      </h1>

      {/* Horizontal Border */}
      <div
        className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-20 rounded-[2px]"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      {/* Service cards */}
      {/* Danh sách dịch vụ */}
      <div className="space-y-14">
        {services.map((service, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#F9F9F9] rounded-xl shadow-md p-6 md:p-10 transition-transform hover:scale-[1.01]"
          >
            {/* Ảnh dịch vụ */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-[280px] md:max-w-[300px] object-cover rounded-lg shadow-sm border border-gray-200"
            />

            {/* Nội dung */}
            <div className="flex-1">
              <h3 className="font-inter text-[26px] md:text-[30px] font-bold uppercase text-[#041E42] mb-4">
                {service.title}
              </h3>

              {service.description.map((para, i) => (
                <p
                  key={i}
                  className="font-nunito text-base md:text-lg text-[#333] leading-relaxed mb-3"
                >
                  {para}
                </p>
              ))}

              <button className="group mt-4 inline-flex items-center gap-2 border border-[#041E42] px-4 py-2 text-[#041E42] font-semibold hover:bg-[#041E42] hover:text-white transition-colors duration-300">
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
          </div>
        ))}
      </div>
    </section>
  );
}

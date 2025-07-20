import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import commitBanner from "../../assets/images/commit-banner.jpg";
import techImg from "../../assets/images/commit1.png";
import qualityImg from "../../assets/images/commit2.png";
import safetyImg from "../../assets/images/commit3.png";
import expertImg from "../../assets/images/commit4.png";

interface CommitBlock {
  img: string;
  title: string;
  desc: string;
}

const commitments: CommitBlock[] = [
  {
    img: techImg,
    title: "Công nghệ Tiên Tiến",
    desc: "Sử dụng công nghệ tiên tiến nhất để vận hành hiệu quả và trơn tru.",
  },
  {
    img: qualityImg,
    title: "Đảm bảo Chất Lượng",
    desc: "Cung cấp linh kiện chất lượng cao để có độ bền và độ tin cậy cao.",
  },
  {
    img: safetyImg,
    title: "An Toàn là Trên Hết",
    desc: "Tuân thủ các tiêu chuẩn an toàn quốc tế nghiêm ngặt nhất.",
  },
  {
    img: expertImg,
    title: "Đội Ngũ Chuyên Gia",
    desc: "Đội ngũ kĩ sư, kỹ thuật viên dày dạn kinh nghiệm.",
  },
];

export default function CommitSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      {/* Title */}
      <h1
        className="font-inter font-medium text-[36px] uppercase text-center mb-[30px]"
        data-aos="zoom-in-up"
      >
        CAM KẾT
      </h1>

      {/* Horizontal Border */}
      <div
        className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-20 rounded-[2px]"
        data-aos="zoom-in-up"
        data-aos-delay="100"
      />

      {/* Banner */}
      <div
        className="relative w-full mx-auto mb-16 overflow-hidden"
        data-aos="fade-zoom-in"
        data-aos-delay="200"
      >
        <img
          src={commitBanner}
          alt="banner"
          className="w-full h-[220px] object-cover opacity-85"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="font-inter text-[36px] md:text-[48px] font-black text-[#041E42] drop-shadow-md tracking-wide uppercase text-center px-4 md:px-0">
            Luôn luôn là dịch vụ tốt nhất
          </h3>
        </div>
      </div>

      {/* Commit grid */}
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {commitments.map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 px-4"
            data-aos="fade-up"
            data-aos-delay={idx * 150} // delay dần dần
          >
            <img src={img} alt={title} className="h-16 w-16 object-contain" />
            <h4 className="font-inter font-semibold text-lg text-[#041E42]">
              {title}
            </h4>
            <p className="font-nunito text-sm text-[#0D1B2A] leading-relaxed max-w-[240px]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

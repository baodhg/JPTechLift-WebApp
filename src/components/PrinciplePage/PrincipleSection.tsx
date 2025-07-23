import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image from "../../assets/images/Book-Img.jpg";

export default function PrincipleSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full px-4 py-12 md:px-12 lg:px-24 text-center text-[#041E42] bg-texture-bg bg-texture-pattern bg-[length:8px_8px]">
      {/* --- Phần 1: Giới thiệu --- */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2
          className="font-inter text-2xl md:text-3xl font-semibold leading-snug mb-10"
          data-aos="fade-up"
        >
          Những nền tảng cốt lõi để trở thành phiên bản tốt nhất của chính mình
        </h2>

        {/* Horizontal Border */}
        <div
          className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-10 rounded-[2px]"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <p
          className="text-lg md:text-base text-[#041E42] mb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Chúng tôi gọi đó là "Những Giá Trị của JPTechLift" – là nguyên tắc cốt
          lõi định hướng toàn bộ công việc và cách chúng tôi làm việc trên toàn
          thế giới. Chúng định hình tư duy, định hướng quyết định và hành động
          của chúng tôi mỗi ngày, ở mọi nơi.
        </p>
        <p
          className="text-lg md:text-base text-[#041E42] mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Đó là lý do chúng tôi đã hệ thống hóa "Những Giá Trị của JPTechLift"
          trong một tài liệu rõ ràng và toàn diện, nhằm tôn vinh những giá trị
          cốt lõi của mình. Tài liệu này chính là chìa khóa giúp định hướng
          chúng tôi – và cả thế giới xung quanh – vươn tới những tầm cao mới.
        </p>
        <button
          className="px-6 py-2 bg-[#041E42] text-white text-sm hover:bg-[#041E42] transition"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          TẢI VỀ BỘ NGUYÊN TẮC CỦA JPTECHLIFT
        </button>
      </div>

      {/* --- Phần 2: Hình ảnh + CTA --- */}
      <div className="max-w-3xl mx-auto">
        <h3
          className="font-inter text-xl text-[#041E42] md:text-2xl font-semibold mb-10"
          data-aos="fade-up"
        >
          Tìm hiểu tất cả ngay tại đây.
        </h3>

        {/* Horizontal Border */}
        <div
          className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-10 rounded-[2px]"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <p
          className="text-lg md:text-base text-[#041E42] mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Chính cam kết không ngừng nghỉ đối với an toàn, đạo đức và chất lượng
          trong mọi quyết định của chúng tôi là nền tảng dẫn đến thành công
          trong kinh doanh.
        </p>
        <div
          className="mb-10"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <img
            src={image}
            alt="Principle"
            className="rounded-lg mx-auto object-cover max-h-[420px]"
          />
        </div>
        <button
          className="px-6 py-2 bg-[#041E42] text-white text-sm hover:bg-[#041E42] transition"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          ĐỌC BỘ NGUYÊN TẮC JPTECHLIFT
        </button>
      </div>
    </section>
  );
}

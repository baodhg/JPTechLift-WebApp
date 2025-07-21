import React from "react";
import background from "../../assets/images/interior.png";
import logo from "../../assets/images/logo-noname.png";

const SubBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
      {/* Ảnh nền mờ nhẹ */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-screen h-full object-cover object-center z-0 opacity-70 scale-105"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
      />

      {/* Logo, mô tả và nút */}
      <div className="relative z-10 text-center px-4 max-w-[1200px]">
        <img
          src={logo}
          alt="JP TECHLIFT Logo"
          className="mx-auto w-20 md:w-26 lg:w-32 transition-all duration-700 drop-shadow-lg hover:scale-105"
          style={{
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
          }}
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1200"
        />

        <p
          className="mt-6 text-white text-lg md:text-xl md:px-6 lg:px-12 mx-auto leading-relaxed drop-shadow-md"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Trong bản thể của mọi kiến trúc, thang máy không chỉ là một cấu phần
          tiện ích, mà còn là linh hồn của sự vận động.
          <br />
          <br />
          Chúng tôi không chỉ cung cấp sản phẩm, mà kiến tạo giải pháp kết hợp
          tinh hoa công nghệ, chuẩn mực an toàn và sự tinh tế trong từng chi
          tiết. Mỗi dự án là minh chứng cho tư duy thấu đáo và giá trị bền vững
          theo thời gian.
        </p>

        {/* Nút “TRẢI NGHIỆM NGAY” */}
        <div className="mt-6" data-aos="fade-up" data-aos-duration="1000">
          <button className="group inline-flex items-center gap-2 border border-white bg-transparent px-6 py-2 text-white font-semibold hover:bg-white hover:text-[#041E42] transition-colors duration-300 whitespace-nowrap">
            TRẢI NGHIỆM NGAY
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
        </div>
      </div>
    </div>
  );
};

export default SubBanner;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import logo from "../../assets/images/logo-noname.png";
/**
 * ProductSection
 *
 * - Tiêu đề và heading dùng font-inter (đậm).
 * - Nội dung mô tả, nút dùng font-nunito.
 * - Tailwind responsive: 1 cột mobile, 3 cột md trở lên.
 */

interface Product {
  title: string;
  slug: string;
  desc: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Thang Máy Gia Đình",
    slug: "thang-may-gia-dinh",
    desc: "Giúp di chuyển dễ dàng, tiện lợi và đầy phong cách trong chính ngôi nhà của bạn.",
    image: product1,
  },
  {
    title: "Thang Máy Dân Dụng",
    slug: "thang-may-hanh-khach",
    desc: "Thiết kế sang trọng, vận hành êm ái và hiệu quả phù hợp văn phòng và trung tâm thương mại.",
    image: product2,
  },
  {
    title: "Thang Máy Tải Hàng",
    slug: "thang-tai-hang",
    desc: "Bền bỉ và tải trọng lớn, vận chuyển hàng hóa nặng trong kho bãi, nhà máy và khu công nghiệp.",
    image: product3,
  },
  {
    title: "Thang Máy Quan Sát",
    slug: "thang-may-quan-sat",
    desc: "Thiết kế kính toàn cảnh, mang đến tầm nhìn ấn tượng và vẻ đẹp kiến trúc nổi bật.",
    image: product4,
  },
  {
    title: "Thang Máy Bệnh Viện",
    slug: "thang-may-benh-vien",
    desc: "Thiết kế chuyên biệt cho bệnh viện và cơ sở y tế – đủ không gian cho băng ca và thiết bị cấp cứu.",
    image: product5,
  },
  {
    title: "Thang Tải Thực Phẩm",
    slug: "thang-tai-thuc-pham",
    desc: "Nhỏ gọn, sạch sẽ – tối ưu vận chuyển đồ ăn trong nhà hàng, khách sạn, bếp công nghiệp.",
    image: product6,
  },
];

export default function ProductSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className=" px-4 pb-24 overflow-hidden bg-texture-bg bg-texture-pattern bg-[length:8px_8px]">
      {/* Heading */}
      <h2
        className="font-inter font-semibold md:font-medium md:text-[36px] text-[30px] uppercase text-center mb-5 md:mb-10 text-[#041E42] md:text-black"
        data-aos="fade-up"
      >
        SẢN PHẨM
      </h2>

      {/* Horizontal Border */}
      <div
        className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-10 md:mb-20 rounded-[2px]"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      {/* Products grid */}
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {products.map((p, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="w-[300px] flex flex-col items-center border-1 border-[#041E42] rounded-2xl shadow-2xl overflow-hidden bg-white"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-[95%] mt-2 object-cover"
            />

            {/* Content */}
            <div className="px-2 py-4 flex flex-col text-left gap-2">
              {/* Logo + Title side‑by‑side */}
              <div className="flex gap-2">
                <img src={logo} alt="jp logo" className="h-10 w-auto" />
                <h3 className="font-inter font-bold text-[23px] text-[#041E42] whitespace-nowrap">
                  {p.title}
                </h3>
              </div>
              <p className="font-nunito text-[18px] text-[#0D1B2A] leading-relaxed">
                {p.desc}
              </p>

              {/* Buttons */}
              <div className="w-[90%] grid grid-cols-2 gap-2 mt-2">
                <Link
                  to="/lien-he"
                  className="mr-2 py-3 px-6 bg-[#041E42] text-white font-inter font-semibold rounded-md transition-colors whitespace-nowrap border border-[#041E42] hover:bg-white hover:text-[#041E42] text-center flex items-center justify-center"
                >
                  LIÊN HỆ
                </Link>
                <Link
                  to={`/products/${p.slug}`}
                  className="w-[122%] py-4 bg-[#041E42] text-white font-inter font-semibold rounded-md transition-colors whitespace-nowrap border border-[#041E42] hover:bg-white hover:text-[#041E42] text-center flex items-center justify-center"
                >
                  TÌM HIỂU THÊM
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

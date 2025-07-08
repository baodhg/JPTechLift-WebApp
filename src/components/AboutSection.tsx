import WorldMap from "../assets/images/WorldMap.png";
import AboutUs1 from "../assets/images/AboutUs1.jpg";
import AboutUs2 from "../assets/images/AboutUs2.jpg";
import AboutUs3 from "../assets/images/AboutUs3.jpg";
/**
 * AboutSection
 *
 * Headings (h2, h3…) use **Inter** (font-inter) and are bold.
 * All paragraph text uses **Nunito Sans** (font-nunito).
 * Tailwind config ✨
 *   extend: {
 *     fontFamily: {
 *       inter: ["Inter", ...defaultTheme.fontFamily.sans],
 *       nunito: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
 *     },
 *   }
 */
export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="font-inter font-medium text-[36px] uppercase text-center mb-[30px]">
        VỀ CHÚNG TÔI
      </h2>

      {/* Horizontal accent line */}
      <span className="block w-16 h-1 bg-[#CBA052] mx-auto mb-20 rounded" />

      {/* Sub‑tagline */}
      <p className="font-nunito text-3lg text-xl font-bold mb-6">
        JP TECHLIFT – Tinh hoa kiến trúc, vun đắp giá trị trường tồn.
      </p>

      {/* Lead paragraph */}
      <p className="font-nunito max-w-[1000px] text-xl mx-auto text-black-700 leading-relaxed px-4 md:px-6">
        Trong bản thể của mọi kiến trúc, thang máy không chỉ là một cấu phần tiện ích, mà còn là linh hồn của sự
        vận động. <strong>JP TECHLIFT</strong>, với sứ mệnh định hình lại quan niệm về sự chuyển dịch trong không gian,
        mang đến những kiến giải vượt trội về công năng và thẩm mỹ.
      </p>

      {/* World map */}
      <div className="mb-6">
        <img src={WorldMap} alt="Bản đồ thế giới" className="max-w-[1200px] w-full h-auto mx-auto" />
      </div>

      {/* Caption */}
      <p className="font-nunito italic text-black-600 text-xl mb-12">
        JP TECHLIFT – Nơi sự chuẩn mực gặp gỡ tầm nhìn, định hình tương lai của không gian kiến trúc.
      </p>

      {/* Image Trio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-12">
        {[AboutUs1, AboutUs2, AboutUs3].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`ảnh thang máy ${idx + 1}`}
            className="md:w-[280px] md:h-[280px] w-[200px] h-[200px] object-cover rounded-md shadow-lg"
          />
        ))}
      </div>

      {/* Closing paragraph */}
      <p className="font-nunito max-w-[1000px] text-xl mx-auto text-black-700 leading-relaxed mt-5.5">
        Chúng tôi không chỉ cung cấp sản phẩm, mà kiến tạo những giải pháp hòa quyện giữa tinh hoa công nghệ, chuẩn
        mực an toàn và sự tinh tế trong từng đường nét. Mỗi dự án là sự kết tinh của tư duy thấu đáo và kỹ năng chế
        tác bậc thầy, minh chứng cho sự vững bền và giá trị thăng hoa theo thời gian.
      </p>
    </section>
  );
}

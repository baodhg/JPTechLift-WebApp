// src/components/LeaderSection.tsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { leaders } from "../../data/LeaderData";
import type { Leader } from "../../data/LeaderData";

export default function LeaderSection() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  useEffect(() => {
    // Khởi tạo AOS
    AOS.init({ duration: 1000, once: true });

    // Hàm xử lý phím Esc
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedLeader(null);
      }
    };

    // Lắng nghe sự kiện keydown
    window.addEventListener("keydown", handleEsc);

    // Cleanup khi unmount
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className="px-4 py-10 lg:px-24 bg-texture-bg bg-texture-pattern bg-[length:8px_8px]">
      {/* Tiêu đề */}
      <section className="text-[#041E42] w-full px-6 md:px-20 text-center md:pb-10">
        <h2
          className=" md:mt-8 font-inter font-bold text-[36px] uppercase text-center mb-[30px]"
          data-aos="fade-up"
        >
          BAN LÃNH ĐẠO CỦA CHÚNG TÔI
        </h2>

        {/* Horizontal accent line */}
        <span
          className="block w-16 h-1 bg-[#CBA052] mx-auto mb-10 md:mb-20 rounded"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <p className="text-[#041E42] text-lg md:text-base">
          Không tài sản nào quý giá hơn con người – với tài năng, tầm nhìn và
          kinh nghiệm vượt trội mà họ mang lại.
        </p>
        <p className="text-[#041E42] text-lg md:text-base my-6">
          “Chúng tôi sở hữu đội ngũ lãnh đạo tận tâm, luôn dẫn dắt bằng những
          chiến lược truyền cảm hứng và thúc đẩy sự bứt phá trong toàn hệ
          thống.”
        </p>
      </section>

      {/* Danh sách leader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-10">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="text-center cursor-pointer group"
            onClick={() => setSelectedLeader(leader)}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="overflow-hidden rounded shadow transition group-hover:scale-105 group-hover:shadow-xl">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-[#041E42] mt-4">{leader.name}</h3>
            <p className="text-sm text-[#041E42] mt-1">{leader.title}</p>

            {/* Gách dưới kéo dài khi hover */}
            <div className="mt-4 h-0.5 bg-[#041E42] w-12 group-hover:w-full transition-all duration-300 mx-auto origin-left" />
          </div>
        ))}
      </div>

      {selectedLeader && (
        <div 
          className="flex fixed inset-0 bg-black/40 backdrop-blur-sm items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedLeader(null);
          }}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-md w-[90%] relative shadow-2xl border border-gray-200 animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Ngăn click trong modal đóng
          >
            {/* Số thứ tự nếu có */}
            <div className="absolute -top-4 left-4 bg-[#0f172a] text-white text-sm font-bold px-3 py-1 rounded-full shadow">
              #{leaders.findIndex((l) => l === selectedLeader) + 1}
            </div>

            {/* Nút đóng */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-1 right-2 text-gray-500 hover:text-red-500 text-2xl transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Hình ảnh */}
            <img
              src={selectedLeader.image}
              alt={selectedLeader.name}
              className="w-full h-56 object-cover rounded-lg mb-4 shadow-md border"
            />

            {/* Nội dung chính */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              {selectedLeader.name}
            </h2>
            <p className="text-sm text-gray-600 mb-3 italic">
              {selectedLeader.title}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-4">
              {selectedLeader.description}
            </p>

            {selectedLeader.highlights &&
              selectedLeader.highlights.length > 0 && (
                <>
                  <p className="text-base font-medium text-gray-800 mt-6 mb-2">
                    Điểm nổi bật:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                    {selectedLeader.highlights.map(
                      (item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                </>
              )}
          </div>
        </div>
      )}
    </section>
  );
}

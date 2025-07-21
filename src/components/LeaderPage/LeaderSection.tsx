// src/components/LeaderSection.tsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { leaders } from "../../data/LeaderData";
import type { Leader } from "../../data/LeaderData";

export default function LeaderSection() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
          Không tài sản nào quý giá hơn con người – với tài năng, tầm nhìn và kinh nghiệm vượt trội mà họ mang lại.
        </p>
        <p className="text-[#041E42] text-lg md:text-base my-6">
          Đội ngũ lãnh đạo dày dạn kinh nghiệm và đầy nhiệt huyết của chúng tôi luôn triển khai những chiến lược hiệu quả để truyền cảm hứng và thúc đẩy 72.000 nhân viên.
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

      {/* Modal popup */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="p-6 rounded-md max-w-md w-[90%] relative shadow-xl animate-fadeIn">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedLeader.image}
              alt={selectedLeader.name}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold text-[#0f172a]">
              {selectedLeader.name}
            </h2>
            <p className="text-sm text-[#1e293b] mb-2">
              {selectedLeader.title}
            </p>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {selectedLeader.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

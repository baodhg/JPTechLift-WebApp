// src/components/LeaderSection.tsx
import { useState } from "react";
import { leaders } from "../../data/LeaderData";
import type { Leader } from "../../data/LeaderData"; // thêm từ khóa "type"

export default function LeaderSection() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <section className="bg-white py-10 px-4 md:px-12 lg:px-24">
      {/* Tiêu đề */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="font-inter text-3xl font-bold text-[#041E42] mb-10">
          Ban Điều Hành Của Chúng Tôi
        </h2>

        {/* Horizontal Border */}
        <div className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-10 rounded-[2px]" />

        <p className="text-[#041E42] text-lg md:text-base">
          Không tài sản nào quý giá hơn con người – với tài năng, tầm nhìn và
          kinh nghiệm vượt trội mà họ mang lại.
        </p>
        <p className="text-[#041E42] text-lg md:text-base mt-2">
          Đội ngũ lãnh đạo dày dạn kinh nghiệm và đầy nhiệt huyết của chúng tôi
          luôn triển khai những chiến lược hiệu quả để truyền cảm hứng và thúc
          đẩy 72.000 nhân viên đang làm việc đầy đam mê và cam kết.
        </p>
      </div>

      {/* Danh sách leader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-10">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="text-center cursor-pointer group"
            onClick={() => setSelectedLeader(leader)}
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
            <div className="mt-4 w-12 h-0.5 bg-[#041E42] mx-auto" />
          </div>
        ))}
      </div>

      {/* Modal popup khi click */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md max-w-md w-[90%] relative shadow-xl">
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

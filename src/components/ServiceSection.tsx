import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";

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
  return (
    <section className="bg-white py-16 px-4">
      {/* Title */}
      <h1 className="font-inter font-medium text-[36px] uppercase text-center mb-[30px]">
        DỊCH VỤ THANG MÁY
      </h1>

      {/* Horizontal Border */}
      <div className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-20 rounded-[2px]" />

      {/* Service cards */}
      <div className="space-y-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="mx-auto max-w-[1200px] flex flex-col md:flex-row gap-6 rounded-lg py-6 px-6 md:px-10"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="self-center self-start aspect-square w-[280px] md:w-[300px] object-cover rounded-md shadow-lg"
            />

            {/* Content */}
            <div className="flex-1 md:pl-6 mx-5">
              <h3 className="font-inter font-semibold md:text-[30px] text-[28px] uppercase mt-2 mb-3 text-left">
                {service.title}
              </h3>
              {service.description.map((para, i) => (
                <p
                  key={i}
                  className="font-nunito text-black-600 md:text-[20px] text-[18px] leading-[1.7] text-black-700 mb-3"
                >
                  {para}
                </p>
              ))}
              <button className="inline-block border border-black py-2 px-3 text-[20px] mt-3 transition-colors duration-300 hover:bg-[#041E42] hover:text-white">
                XEM THÊM
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
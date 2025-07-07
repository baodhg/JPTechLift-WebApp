import styles from "./ServiceSection.module.scss";
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";
import HorizontalBorder from "../../assets/images/HorizontalBorder.png";

interface Service {
  title: string;
  description: string[];
  image: string;
}

const services: Service[] = [
  {
    title: "Tư Vấn Thiết Kế Thang Máy",
    description: [
      "Tư vấn thiết kế thang máy là bước đầu quan trọng, đảm bảo hiệu quả và an toàn công trình. JP TECHLIFT đồng hành cùng khách hàng chọn giải pháp phù hợp, thông minh, an toàn và tối ưu chi phí.",
      "Vậy tại sao không chọn JP TECHLIFT ngay từ đầu?",
    ],
    image: service1,
  },
  {
    title: "Lắp Đặt Vận Hành Thang Máy",
    description: [
      "JP TECHLIFT chú trọng đào tạo đội ngũ kỹ thuật chuyên sâu, đảm bảo quy trình lắp đặt và vận hành chuẩn xác, an toàn và tối ưu. Sự chuyên nghiệp trong từng công trình là nền tảng tạo dựng uy tín của JP TECHLIFT.",
      "Sự chuyên nghiệp là điểm mạnh của JP TECHLIFT.",
    ],
    image: service2,
  },
  {
    title: "Bảo Trì – Bảo Dưỡng Thang Máy",
    description: [
      "Tại JP TECHLIFT, với đội ngũ kỹ thuật dày dạn và mạng lưới vệ tinh rộng khắp, chúng tôi cam kết có mặt trong 3 giờ, đồng hành và xử lý mọi vấn đề về thang máy.",
      "Dịch vụ giúp đảm bảo thang máy hoạt động ổn định.",
    ],
    image: service3,
  },
  {
    title: "Cải Tạo Sửa Chữa Thang Máy",
    description: [
      "Dù thang máy có chất lượng cao, sau thời gian sử dụng vẫn cần cải tạo để đảm bảo an toàn và vận hành ổn định. JP TECHLIFT luôn sẵn sàng hỗ trợ với giải pháp nâng cấp tối ưu, mang lại sự an tâm và hài lòng cho khách hàng.",
      "Uy tín của JP TECHLIFT đến từ chất lượng cải tạo.",
    ],
    image: service4,
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>DỊCH VỤ THANG MÁY</h1>
        <img src={HorizontalBorder} className="" />
      </div>
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {/* Ảnh trái */}
            <img
              src={service.image}
              alt={service.title}
              className={styles.image}
            />

            {/* Nội dung phải */}
            <div className={styles.content}>
              <h3 className={styles.text}>{service.title}</h3>
              {service.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <button className={styles.button}>XEM THÊM</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;

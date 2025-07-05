import styles from './ServiceSection.module.css';
import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import service3 from '../../assets/images/service3.jpg';
import service4 from '../../assets/images/service4.jpg';


interface Service {
  title: string;
  description: string[];
  image: string;
}

const services: Service[] = [
  {
    title: 'Tư Vấn Thiết Kế Thang Máy',
    description: [
      'Tư vấn thiết kế thang máy là bước đầu quan trọng...',
      'Vậy tại sao không chọn JP TECHLIFT ngay từ đầu?'
    ],
    image: service1,
  },
  {
    title: 'Lắp Đặt Vận Hành Thang Máy',
    description: [
      'JP TECHLIFT chú trọng đào tạo đội ngũ kỹ thuật chuyên sâu...',
      'Sự chuyên nghiệp là điểm mạnh của JP TECHLIFT.'
    ],
    image: service2,
  },
  {
    title: 'Bảo Trì – Bảo Dưỡng Thang Máy',
    description: [
      'Chúng tôi có đội kỹ thuật phản ứng nhanh trong 3 giờ...',
      'Dịch vụ giúp đảm bảo thang máy hoạt động ổn định.'
    ],
    image: service3,
  },
  {
    title: 'Cải Tạo Sửa Chữa Thang Máy',
    description: [
      'Sau thời gian sử dụng, thang máy cần cải tạo để đảm bảo an toàn.',
      'Uy tín của JP TECHLIFT đến từ chất lượng cải tạo.'
    ],
    image: service4,
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">
        DỊCH VỤ THANG MÁY
      </h2>

      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {/* Hình ảnh luôn bên trái */}
            <img src={service.image} alt={service.title} className={styles.image} />

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 uppercase">
                {service.title}
              </h3>

              {service.description.map((para, i) => (
                <p key={i} className={styles.description}>{para}</p>
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

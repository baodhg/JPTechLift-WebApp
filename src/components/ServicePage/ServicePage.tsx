import styles from '../../styles/pages/ServicePage/Service.module.scss';
import elevatorImg from '../../assets/images/AboutUs1.jpg'; // Đổi tên file đúng với ảnh bạn lưu

const services = [
  {
    title: 'Tư Vấn Thiết Kế Thang Máy',
    desc: 'Tư vấn thiết kế thang máy là bước đầu tiên và quan trọng để tối ưu hóa giải pháp cho công trình. Đội ngũ JP TechLift sẽ hỗ trợ bạn phân tích nhu cầu, lựa chọn giải pháp tối ưu nhất với chi phí hợp lý, đảm bảo an toàn, tính thẩm mỹ và công năng. Chúng tôi cam kết mang đến các phương án thiết kế phù hợp, đáp ứng tiêu chuẩn an toàn, tiết kiệm năng lượng và vận hành ổn định.',
  },
  {
    title: 'Lắp Đặt Vận Hành Thang Máy',
    desc: 'Thiết bị được lắp đặt tuân thủ quy trình kiểm định, vận hành chuyên nghiệp bởi đội ngũ kỹ thuật viên JP TechLift giàu kinh nghiệm. Chúng tôi đảm bảo thang máy vận hành ổn định, an toàn, bền bỉ và đạt hiệu suất tối ưu cho công trình của bạn.',
  },
  {
    title: 'Bảo Trì Bảo Dưỡng Thang Máy',
    desc: 'Dịch vụ bảo trì JP TechLift giúp thang máy luôn hoạt động tốt, tiết kiệm điện, kéo dài tuổi thọ và hạn chế tối đa sự cố. Đội ngũ kỹ thuật viên sẽ kiểm tra, bảo dưỡng định kỳ, thay thế linh kiện chính hãng, đảm bảo an toàn tuyệt đối cho người sử dụng.',
  },
  {
    title: 'Cải Tạo Sửa Chữa Thang Máy',
    desc: 'JP TechLift cung cấp dịch vụ cải tạo, nâng cấp, sửa chữa thang máy cũ, giúp tăng hiệu quả vận hành, an toàn và tiết kiệm chi phí đầu tư mới. Đội ngũ kỹ thuật viên sẽ khảo sát, tư vấn giải pháp tối ưu, đảm bảo thang máy hoạt động ổn định và bền bỉ.',
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>DỊCH VỤ THANG MÁY</h2>
      <div className={styles.grid}>
        {services.map((s, idx) => (
          <div className={styles.serviceCard} key={idx}>
            <div className={styles.imageBox}>
              <img src={elevatorImg} alt="Elevator Service" />
            </div>
            <div className={styles.textBox}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cta}>CÓ NHIỀU LỰA CHỌN VÀ TƯ VẤN TỐT HƠN</div>
    </section>
  );
}
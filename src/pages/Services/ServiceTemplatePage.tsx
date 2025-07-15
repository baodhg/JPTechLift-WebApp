import styles from "../../styles/pages/ServicesPage/ServiceTemplatePage.module.scss";
import banner from "../../assets/images/header/Contact_Icon.png"; // ảnh top trang

const services = [
  {
    title: "Tư vấn thiết kế thang máy",
    description: "Tư vấn khởi đầu cho dự án thang máy hiệu quả, an toàn, tối ưu chi phí.",
    image: "", // TODO: thêm ảnh sau
  },
  {
    title: "Lắp đặt vận hành thang máy",
    description: "Thi công, chạy thử và bàn giao hệ thống thang máy đúng chuẩn kỹ thuật.",
    image: "",
  },
  {
    title: "Bảo trì bảo dưỡng thang máy",
    description: "Duy trì ổn định, an toàn lâu dài, bảo hành chu đáo – linh kiện chính hãng.",
    image: "",
  },
  {
    title: "Cải tạo – sửa chữa thang máy",
    description: "Nâng cấp hệ thống cũ, tối ưu vận hành và tiết kiệm chi phí bảo trì về sau.",
    image: "", 
  },
];

export default function ServiceTemplatePage() {
  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <img src={banner} alt="Dịch vụ JP TechLift" />
        <div className={styles.breadcrumb}>SẢN PHẨM & DỊCH VỤ / DỊCH VỤ</div>
      </section>

      {/* Danh sách dịch vụ */}
      <section className={styles.services}>
        {services.map((sv, i) => (
          <div key={i} className={styles.serviceItem}>
            {sv.image && <img src={sv.image} alt={sv.title} />}
            <div className={styles.info}>
              <h3>{sv.title}</h3>
              <p>{sv.description}</p>
              <button>Xem thêm</button>
            </div>
          </div>
        ))}
      </section>

      {/* Slogan cuối trang */}
      <section className={styles.valueBanner}>
        <h2>HÃY ĐỂ CHÚNG TÔI MANG LẠI GIÁ TRỊ CHO BẠN</h2>
      </section>
    </div>
  );
}

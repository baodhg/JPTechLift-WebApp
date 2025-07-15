import styles from './AboutUsIntro.module.css';

export default function AboutUsIntro() {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.heading}>GIỚI THIỆU CHUNG</h1>
      <div className={styles.content}>
        <p className={styles.greeting}><i>Kính chào quý khách hàng.</i></p>
        <p>
          Lời đầu tiên, toàn thể đội ngũ JP TechLift xin gửi đến Quý doanh nghiệp lời chào trân trọng và lời chúc thành công!
        </p>
        <p>
          Trong kỷ nguyên số, JP TechLift tiên phong trong việc ứng dụng những công nghệ đột phá vào lĩnh vực thang máy. Sứ mệnh của chúng tôi là mang đến những giải pháp di chuyển thông minh, uy tín lâu dài, không chỉ đáp ứng nhu cầu di lại mà còn nâng tầm trải nghiệm và tối ưu hóa vận hành cho tòa nhà. Vì vậy, mọi sản phẩm của JP TechLift đều được xây dựng trên nền tảng công nghệ tiên tiến, tuân thủ những tiêu chuẩn an toàn quốc tế khắt khe nhất.
        </p>
        <p>
          Với tôn chỉ <b>“Đổi mới để dẫn đầu”</b>, chúng tôi không ngừng nghiên cứu và phát triển các dòng thang máy tích hợp tính năng thông minh và sở hữu thiết kế tinh tế. Hệ sinh thái JP TechLift đồng hành cùng Quý vị kiến tạo những không gian sống - làm việc hiện đại, linh hoạt, với giải pháp đa dạng cho cư dân, chủ đầu tư biệt thự, chung cư cao cấp, tòa nhà văn phòng, trung tâm thương mại, khách sạn, bệnh viện đến các khu công nghiệp.
        </p>
        <p className={styles.slogan}>
          JP TechLift – An toàn là tối thượng, Chất lượng là danh dự.
        </p>
        <div className={styles.signature}>
          <p>Trân trọng kính chào.</p>
          <p><b>Giám đốc</b></p>
          <p className={styles.director}>VŨ NGỌC MINH TUYẾT</p>
        </div>
      </div>
    </section>
  );
}
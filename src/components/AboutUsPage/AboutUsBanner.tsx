import styles from './AboutUsBanner.module.css';
import cityImg from '../../assets/images/city.jpg'; 

export default function AboutUsBanner() {
  return (
    <section>
      <div className={styles.banner}>
        <img src={cityImg} className={styles.bannerImg} alt="City" />
        <div className={styles.bannerText}>
          Mỗi thang máy JPTechLift là sự kết hợp giữa kỹ thuật hiện đại, tiết kiệm năng lượng và thiết kế nâng tầm không gian.
        </div>
      </div>
      <div className={styles.vmvGrid}>
        <div>
          <h4>Tầm Nhìn</h4>
          <p>Chúng tôi trao cho mọi người quyền tự do di chuyển và trải nghiệm thang máy thế hệ cao hơn, nhanh hơn và thông minh hơn.</p>
        </div>
        <div>
          <h4>Sứ mệnh</h4>
          <p>Trở thành nơi đáng tin cậy nhất, lấy khách hàng làm trung tâm và không ngừng đổi mới dịch vụ.</p>
        </div>
        <div>
          <h4>Giá trị</h4>
          <p>Chúng tôi đặt con người làm trung tâm trong mọi việc. Chúng tôi không ngừng sáng tạo, lấy uy tín và sự hài lòng của khách hàng làm kim chỉ nam cho mọi hành động.</p>
        </div>
      </div>
    </section>
  );
}
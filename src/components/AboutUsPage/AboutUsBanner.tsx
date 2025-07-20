import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from './AboutUsBanner.module.css';
import cityImg from '../../assets/images/city.jpg';

export default function AboutUsBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.sectionWrapper}>
      {/* Banner Image with Centered Text */}
      <div className={styles.banner}>
        <img src={cityImg} className={styles.bannerImg} alt="City View" />
        <div className={styles.bannerText} data-aos="fade-up">
          Mỗi thang máy JPTechLift là sự kết hợp giữa kỹ thuật hiện đại, tiết kiệm năng lượng và thiết kế nâng tầm không gian.
        </div>
      </div>

      {/* Vision - Mission - Values */}
      <div className={styles.vmvGrid}>
        <div className={styles.vmvItem} data-aos="fade-up" data-aos-delay="100">
          <h4>Tầm Nhìn</h4>
          <p>
            Chúng tôi trao cho mọi người quyền tự do di chuyển và trải nghiệm
            thang máy thế hệ cao hơn, nhanh hơn và thông minh hơn.
          </p>
        </div>
        <div className={styles.vmvItem} data-aos="fade-up" data-aos-delay="200">
          <h4>Sứ Mệnh</h4>
          <p>
            Trở thành nơi đáng tin cậy nhất, lấy khách hàng làm trung tâm và không
            ngừng đổi mới dịch vụ.
          </p>
        </div>
        <div className={styles.vmvItem} data-aos="fade-up" data-aos-delay="300">
          <h4>Giá Trị</h4>
          <p>
            Chúng tôi đặt con người làm trung tâm trong mọi việc. Chúng tôi không
            ngừng sáng tạo, lấy uy tín và sự hài lòng của khách hàng làm kim chỉ
            nam cho mọi hành động.
          </p>
        </div>
      </div>
    </section>
  );
}

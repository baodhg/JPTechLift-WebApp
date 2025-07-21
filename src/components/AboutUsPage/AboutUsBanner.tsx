import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutUsBanner.module.css";
import cityImg from "../../assets/images/city.jpg";

export default function AboutUsBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.banner}>
        <img
          src={cityImg}
          className={styles.bannerImg}
          alt="City View"
        />
        <div
          className={styles.bannerText}
          data-aos="fade"
          data-aos-duration="1200"
        >
          Mỗi thang máy JPTechLift là
          <br />
          sự kết hợp giữa kỹ thuật hiện đại, tiết kiệm năng lượng
          <br />
          và thiết kế nâng tầm không gian.
        </div>
      </div>

      <div className={styles.vmvBlocks}>
        <div
          className={styles.vmvBlock}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className={styles.vmvTitle}>Tầm Nhìn</h2>
          <div className={styles.underline}></div>
          <p className={styles.vmvDesc}>
            Chúng tôi trao cho mọi người quyền tự do kết nối và phát triển ở một
            thế giới cao hơn, nhanh hơn và thông minh hơn.
          </p>
        </div>
        <div
          className={styles.vmvBlock}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className={styles.vmvTitle}>Sứ mệnh</h2>
          <div className={styles.underline}></div>
          <p className={styles.vmvDesc}>
            Trở thành một công ty đẳng cấp thế giới. Lấy khách hàng làm trung
            tâm và hướng tới dịch vụ.
          </p>
        </div>
        <div
          className={styles.vmvBlock}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className={styles.vmvTitle}>Giá Trị</h2>
          <div className={styles.underline}></div>
          <p className={styles.vmvDesc}>
            Chúng tôi đặt con người làm trung tâm trong mọi việc.
            <br />
            Chúng tôi đáng tin cậy, thông minh và tập trung vào tương lai.
            <br />
            Chúng tôi đang tạo ra một thế giới kết nối và cá nhân hơn.
            <br />
            Chúng tôi sẵn sàng để hoàn thành điều đó.
          </p>
        </div>
        <div className={styles.vmvButtonWrap}>
          <button className={styles.vmvButton}>
            ĐỒNG HÀNH CÙNG JPTECHLIFT
          </button>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../AboutUsPage/AboutUsNewsBlogs.module.css";
import newsImg from "../../assets/images/news.jpg";
import blogImg from "../../assets/images/blog.jpg";

export default function AboutUsNewsBlogs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className={styles.newsBlogsSection}>
      <div className={styles.grid}>
        <div
          className={styles.card}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          data-aos-offset="100"
        >
          <img src={newsImg} alt="Tin tức" className={styles.img} />
          <div className={styles.labelWrap}>
            <div className={styles.label}>Tin tức</div>
            <div className={styles.labelUnderline}></div>
          </div>
        </div>

        <div
          className={styles.card}
          data-aos="fade-zoom-in"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          data-aos-offset="100"
        >
          <img src={blogImg} alt="Blogs" className={styles.img} />
          <div className={styles.labelWrap}>
            <div className={styles.label}>Blogs</div>
            <div className={styles.labelUnderline}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

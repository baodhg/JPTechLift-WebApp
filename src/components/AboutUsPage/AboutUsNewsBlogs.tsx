import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../AboutUsPage/AboutUsNewsBlogs.module.css';
import newsImg from '../../assets/images/news.jpg';  
import blogImg from '../../assets/images/blog.jpg';

export default function AboutUsNewsBlogs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.newsBlogsSection}>
      <div className={styles.grid}>
        <div className={styles.card} data-aos="zoom-in-up">
          <img src={newsImg} alt="Tin tức" className={styles.img} />
          <div className={styles.label}>Tin tức</div>
        </div>
        <div className={styles.card} data-aos="zoom-in-up" data-aos-delay="200">
          <img src={blogImg} alt="Blogs" className={styles.img} />
          <div className={styles.label}>Blogs</div>
        </div>
      </div>
    </section>
  );
}

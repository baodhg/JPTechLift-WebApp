import styles from '../AboutUsPage/AboutUsNewsBlogs.module.css';
import newsImg from '../../assets/images/news.jpg';  
import blogImg from '../../assets/images/blog.jpg';

export default function AboutUsNewsBlogs() {
  return (
    <section className={styles.newsBlogsSection}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={newsImg} alt="Tin tức" className={styles.img} />
          <div className={styles.label}>Tin tức</div>
        </div>
        <div className={styles.card}>
          <img src={blogImg} alt="Blogs" className={styles.img} />
          <div className={styles.label}>Blogs</div>
        </div>
      </div>
    </section>
  );
}
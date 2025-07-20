import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './BlogPage.module.css';
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';

const blogs = [
  {
    id: 1,
    image: blog1,
    title: 'Bảo Trì Phòng Ngừa: Giải Pháp Đảm Bảo An Toàn Và Vận Hành Cho Thang Máy Của Bạn.',
    desc: 'Khám phá 3 mẹo cho thiết kế đơn giản, phù hợp để thang máy hoạt động hoàn hảo...',
    link: '#'
  },
  {
    id: 2,
    image: blog2,
    title: 'Nâng Tầm Ứng Xử Của Bạn: Nghệ Thuật Đi Thang Máy Đúng Cách.',
    desc: 'Khám phá 3 mẹo cần thiết để đơn giản hóa việc sử dụng thang máy hoàn hảo...',
    link: '#'
  },
];

const BLOGS_PER_PAGE = 6;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const shownBlogs = blogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  return (
    <div className={styles.blogWrap}>
      <h1 className={styles.title} data-aos="fade-up">
        BLOG THANG MÁY JP TECHLIFT
      </h1>

      <div className={styles.toolbar} data-aos="fade-up" data-aos-delay="100">
        <div>
          <label>LỌC:</label>
          <select className={styles.select} data-aos="fade-in" data-aos-delay="200">
            <option value="">Tất cả</option>
            <option value="kienthuc">Kiến thức</option>
            <option value="kythuat">Kỹ thuật</option>
            <option value="phongvan">Phỏng vấn</option>
          </select>
        </div>
        <div>
          <button className={styles.toolbarBtn} onClick={() => setPage(Math.max(1, page - 1))}>&#60;</button>
          <span className={styles.pageNum}>Trang {page} / {totalPages}</span>
          <button className={styles.toolbarBtn} onClick={() => setPage(Math.min(totalPages, page + 1))}>&#62;</button>
        </div>
      </div>

      <div className={styles.grid}>
        {shownBlogs.map((blog, idx) => (
          <div
            key={blog.id}
            className={styles.card}
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            <img src={blog.image} alt={blog.title} className={styles.thumb} />
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <a href={blog.link} className={styles.readMore}>ĐỌC CHI TIẾT</a>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={page === idx + 1 ? styles.active : ''}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
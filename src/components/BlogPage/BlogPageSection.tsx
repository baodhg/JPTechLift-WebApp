import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './BlogPage.module.css';
import blog1 from '../../assets/images/blog-1.jpg';

const blogs = [
  {
    id: 1,
    image: blog1, // GẮN LINK ẢNH Ở ĐÂY
    title: 'Bảo Trì Phòng Ngừa: Giải Pháp Đảm Bảo An Toàn Và Vận Hành Cho Thang Máy Của Bạn.',
    desc: 'Khám phá 3 mẹo cho thiết kế đơn giản, phù hợp để thang máy hoạt động hoàn hảo...',
    link: '#'
  },
  {
    id: 2,
    image: blog1, // GẮN LINK ẢNH Ở ĐÂY
    title: 'Nâng Tầm Ứng Xử Của Bạn: Nghệ Thuật Đi Thang Máy Đúng Cách.',
    desc: 'Khám phá 3 mẹo cần thiết để đơn giản hóa việc sử dụng thang máy hoàn hảo...',
    link: '#'
  },
  {
    id: 3,
    image: blog1, // GẮN LINK ẢNH Ở ĐÂY
    title: 'Cách Các Nhà Quản Lý Tòa Nhà Và Nhà Cung Cấp Dịch Vụ Bảo Trì Có Thể Hợp Tác Cùng Nhau.',
    desc: 'Hướng dẫn bảo trì thang máy dành cho các chuyên gia quản lý cơ sở vật chất...',
    link: '#'
  },
  {
    id: 4,
    image: blog1, // GẮN LINK ẢNH Ở ĐÂY
    title: '3 Mẹo Để Chọn Hợp Đồng Bảo Trì Thang Máy Phù Hợp Cho Bạn',
    desc: 'JP TECHLIFT giải thích một số yếu tố quan trọng nhất khi lựa chọn một hợp đồng...',
    link: '#'
  },
  {
    id: 5,
    image: blog1, // GẮN LINK ẢNH Ở ĐÂY
    title: 'Công Nghệ Có Thể Cải Thiện Việc Bảo Trì Thang Máy Của Bạn Như Thế Nào?',
    desc: 'JP TECHLIFT giải thích cách công nghệ có thể di động minh cần bạn trong việc sửa chữa và bảo trì...',
    link: '#'
  },
  {
    id: 6,
    image: blog1, // GẮN LINK ẢNH Ở ĐÂY
    title: 'Cách Lập Kế Hoạch Hiện Đại Hóa Thang Máy',
    desc: 'JP TECHLIFT giải thích các quy trình hiện đại hóa thang máy và những lợi ích...',
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

      <div className={styles.topBar} data-aos="fade-up" data-aos-delay="100">
        <div className={styles.resultText}>6 thẻ mỗi trang. Hiển thị kết quả 1 – 6</div>
        <div className={styles.filterSort}>
          <select className={styles.select}>
            <option value="">Bộ lọc</option>
            <option value="kienthuc">Kiến thức</option>
            <option value="kythuat">Kỹ thuật</option>
            <option value="phongvan">Phỏng vấn</option>
          </select>
          <select className={styles.select}>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
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
            <a href={blog.link} className={styles.readMore}>ĐỌC BÀI VIẾT</a>
          </div>
        ))}
      </div>

      <div className={styles.paginationWrap}>
        <span className={styles.pageNav}>TRƯỚC</span>
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
        <span className={styles.pageNav}>SAU</span>
      </div>
    </div>
  );
}
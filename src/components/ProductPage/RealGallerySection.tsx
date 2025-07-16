import styles from "../../styles/pages/ProductsPage/RealGallerySection.module.scss";

interface Props {
  images: string[];
}

export default function RealGallerySection({ images }: Props) {
  return (
    <section id="real-gallery" className={styles.realGallerySection}>
      <h2 className={styles.heading}>Hình ảnh thực tế</h2>

      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Ảnh thực tế ${i + 1}`} />
          ))}
        </div>

        <div className={styles.textBox}>
          <h3>
            Trải Nghiệm Thực Tế <br /> Lắp đặt Thang Máy Tại Công Trình
          </h3>
          <p>
            Mỗi công trình là một hành trình riêng: từ khảo sát thực tế, lên phương án thi công, cho đến khi vận hành trơn tru và bàn giao cho khách hàng.
          </p>
          <p>
            Chúng tôi luôn đặt tiêu chí an toàn – tối ưu – thẩm mỹ lên hàng đầu trong từng bước triển khai.
          </p>
          <p>
            Thang máy có thể được lắp đặt trong nhà hoặc ngoài trời. Thiết kế linh hoạt theo không gian và nhu cầu sử dụng.
          </p>
          <p>
            Muốn hiểu rõ hơn về cách chọn thang máy đúng nhu cầu? Đừng bỏ qua những bài viết chuyên sâu và kinh nghiệm thực tế từ đội ngũ của chúng tôi.
          </p>

          <div className={styles.buttons}>
            <button>ẢNH THỰC TẾ</button>
            <button>XEM THÊM TẠI MỤC TIN TỨC & BLOG</button>
          </div>
        </div>
      </div>
    </section>
  );
}

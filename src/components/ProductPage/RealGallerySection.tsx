import styles from "../../styles/pages/ProductsPage/RealGallerySection.module.scss";
import { useNavigate } from "react-router-dom";
interface Props {
  images: string[];
}

export default function RealGallerySection({ images }: Props) {
  const navigate = useNavigate();
  return (
    <section id="real-gallery" className={styles["real-gallery"]}>
      <h2 className={styles["real-gallery__heading"]}>Hình ảnh thực tế</h2>

      <div className={styles["real-gallery__wrapper"]}>
        <div className={styles["real-gallery__gallery"]}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Ảnh thực tế ${i + 1}`} />
          ))}
        </div>

        <div className={styles["real-gallery__text"]}>
          <h3>
            Trải Nghiệm Thực Tế <br /> Lắp đặt Thang Máy Tại Công Trình
          </h3>
          <p>
            Mỗi công trình là một hành trình riêng: từ khảo sát thực tế, lên phương án thi công, cho đến khi vận hành
            trơn tru và bàn giao cho khách hàng.
          </p>
          <p>Chúng tôi luôn đặt tiêu chí an toàn – tối ưu – thẩm mỹ lên hàng đầu trong từng bước triển khai.</p>
          <p>
            Thang máy có thể được lắp đặt trong nhà hoặc ngoài trời. Thiết kế linh hoạt theo không gian và nhu cầu sử
            dụng.
          </p>
          <p>
            Muốn hiểu rõ hơn về cách chọn thang máy đúng nhu cầu? Đừng bỏ qua những bài viết chuyên sâu và kinh nghiệm
            thực tế từ đội ngũ của chúng tôi.
          </p>

          <div className={styles["real-gallery__buttons"]}>
            <a
              href="https://zalo.me/3469899057771273254"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button>ẢNH THỰC TẾ</button>
            </a>
            <button onClick={() => navigate("/tin-tuc")}>XEM THÊM TẠI MỤC TIN TỨC</button>
          </div>
        </div>
      </div>
    </section>
  );
}

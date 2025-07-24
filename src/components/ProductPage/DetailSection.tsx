import { useState, useEffect } from "react";
import styles from "../../styles/pages/ProductsPage/ProductGallery.module.scss";
import { useNavigate } from "react-router-dom";
interface Props {
  data: {
    title: string;
    introductionLine1: string;
    introductionLine2: string;
    productLine: string;
    config: string;
    brand: string;
    operation: string;
    load: string;
    speed: string;
    size: string;
    pitDepth: string;
  };
  images: string[];
  onOpenAesthetics?: () => void;
}

export default function DetailSection({ data, images }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const navigate = useNavigate();

  return (
    <div>
      <section id="details" className={styles["product-gallery"]}>
        <div className={styles["product-gallery__image-wrapper"]}>
          <div className={styles["product-gallery__carousel"]}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Product image ${index + 1}`}
                className={`${styles["product-gallery__image"]} ${
                  index === currentSlide ? styles["product-gallery__image--active"] : ""
                }`}
              />
            ))}
          </div>

          {/* Triangle Pagination with SVG */}
          <div className={styles["product-gallery__triangle-pagination"]}>
            <div className={styles["product-gallery__pagination-background"]}>
              {images.map((_, index) => {
                const isCenter = index === Math.floor(images.length / 2);
                const isActive = index === currentSlide;
                const fillColor = isActive ? "#ffffff" : "#CBA052";

                return (
                  <div
                    key={index}
                    className={styles["product-gallery__triangle-container"]}
                    onClick={() => goToSlide(index)}
                  >
                    {isCenter ? (
                      // Triangle pointing up (center)
                      <svg
                        width="28"
                        height="24"
                        viewBox="0 0 40 38"
                        className={styles["product-gallery__triangle-svg"]}
                      >
                        <path
                          d="M23.8365 34.6973C22.1585 37.9391 17.5224 37.9391 15.8444 34.6973L1.54553 7.07422C-0.00459107 4.07908 2.16916 0.506155 5.54163 0.505859L34.1393 0.505859C37.5117 0.506157 39.6855 4.07908 38.1354 7.07422L23.8365 34.6973Z"
                          fill={fillColor}
                          stroke="rgba(0, 0, 0, 0.15)"
                          strokeWidth="0.5"
                        />
                      </svg>
                    ) : (
                      // Triangle pointing down (sides)
                      <svg width="28" height="24" viewBox="0 0 40 38" className={styles.triangleSvg}>
                        <path
                          d="M16.1635 3.30273C17.8415 0.0608963 22.4776 0.0608963 24.1556 3.30273L38.4545 30.9258C40.0046 33.9209 37.8308 37.4938 34.4584 37.4941L5.86066 37.4941C2.48819 37.4938 0.314548 33.9209 1.86467 30.9258L16.1635 3.30273Z"
                          fill={fillColor}
                          stroke="rgba(0, 0, 0, 0.15)"
                          strokeWidth="0.5"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles["product-gallery__info"]}>
          <h2>{data.title}</h2>
          <p>{data.introductionLine1}</p>
          <p>{data.introductionLine2}</p>
          <ul className={styles["product-gallery__spec-list"]}>
            <li className={styles.specItem}>{data.productLine}</li>
            <li className={styles.specItem}>Cấu hình: {data.config}</li>
            <li className={styles.specItem}>Thương hiệu: {data.brand}</li>
            <li className={styles.specItem}>Công nghệ vận hành: {data.operation}</li>
            <li className={styles.specItem}>Tải trọng: {data.load}</li>
            <li className={styles.specItem}>Tốc độ: {data.speed}</li>
            <li className={styles.specItem}>Kích thước: {data.size}</li>
            <li className={styles.specItem}>Chiều sâu hố PIT: {data.pitDepth}</li>
          </ul>
        </div>
      </section>
      {/* Bottom Section with Buttons */}
      <section className={styles["product-gallery__buttons-container"]}>
        <div className={styles["product-gallery__buttons-wrapper"]}>
          <a>
          <button className={styles["product-gallery__button"]} onClick={() => navigate("/lien-he")}>
            LIÊN HỆ NGAY
          </button>
          </a>
          <a
            href="https://zalo.me/3469899057771273254"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className={styles["product-gallery__button"]}>GIÁ CẢ</button>
          </a>
        </div>
      </section>
    </div>
  );
}

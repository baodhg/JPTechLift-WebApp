import { useState, useEffect } from "react";
import styles from "../../styles/pages/ProductsPage/ProductGallery.module.scss";

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

  return (
    <div>
      <section id="details" className={styles.detailSection}>
        <div className={styles.imageWrapper}>
          <div className={styles.carousel}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Product image ${index + 1}`}
                className={`${styles.image} ${index === currentSlide ? styles.imageActive : ""}`}
              />
            ))}
          </div>

          {/* Triangle Pagination with SVG */}
          <div className={styles.trianglePagination}>
            <div className={styles.paginationBackground}>
              {images.map((_, index) => {
                const isCenter = index === Math.floor(images.length / 2);
                const isActive = index === currentSlide;
                const fillColor = isActive ? "#ffffff" : "#CBA052";

                return (
                  <div key={index} className={styles.triangleContainer} onClick={() => goToSlide(index)}>
                    {isCenter ? (
                      // Triangle pointing up (center)
                      <svg width="28" height="24" viewBox="0 0 40 38" className={styles.triangleSvg}>
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

        <div className={styles.info}>
          <h2>{data.title}</h2>
          <p>{data.introductionLine1}</p>
          <p>{data.introductionLine2}</p>
          <ul className={styles.specList}>
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
      <section className={styles.buttonsContainer}>
        <div className={styles.buttonsWrapper}>
          <button className={styles.button}>LIÊN HỆ CHÚNG TÔI NGAY</button>
          <button className={styles.button}>THÔNG TIN & GIÁ CẢ</button>
        </div>
      </section>
    </div>
  );
}

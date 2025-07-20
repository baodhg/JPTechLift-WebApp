import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../../styles/pages/ProductsPage/ProductDrawing.module.scss";

interface Props {
  blueprint: {
    image: string;
    specs: string[];
    stops: string;
    description: string[]; // gồm 2 dòng đầu tiên
    heightNote: string;
  };
}

export default function BlueprintSection({ blueprint }: Props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className={styles.blueprintWrapper}>
      <h2 className={styles.title}>Bản vẽ kỹ thuật</h2>
      <section id="blueprint" className={styles.blueprintSection}>
        <div className={styles.content} data-aos="fade-up">
          <div className={styles.imageWrapper}>
            <img
              src={blueprint.image}
              alt="Bản vẽ kỹ thuật"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            {blueprint.description.map((line, idx) => (
              <p key={idx} className={styles.description}>
                {line}
              </p>
            ))}
            <ul className={styles.specList}>
              {blueprint.specs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className={styles.stops}>
              <strong>Số điểm dừng:</strong> {blueprint.stops}
            </p>
            <p className={styles.note}>
              <strong>{blueprint.heightNote}</strong>
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                LIÊN HỆ TRỰC TIẾP ĐỂ BIẾT THÊM THÔNG TIN
              </button>
              <button className={styles.secondaryButton}>KHO ẢNH</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

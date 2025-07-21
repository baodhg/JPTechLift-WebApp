import styles from "../../styles/pages/ProductsPage/ProductDrawing.module.scss";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div className={styles["product-blueprint__wrapper"]}>
      <h2 className={styles["product-blueprint__title"]}>Bản vẽ kỹ thuật</h2>
      <section id="blueprint" className={styles["product-blueprint"]}>
        <div className={styles.content}>
          <div className={styles["product-blueprint__image-wrapper"]}>
            <img src={blueprint.image} alt="Bản vẽ kỹ thuật" className={styles["product-blueprint__image"]} />
          </div>
          <div className={styles["product-blueprint__info"]}>
            {blueprint.description.map((line, idx) => (
              <p key={idx} className={styles["product-blueprint__description"]}>
                {line}
              </p>
            ))}
            <ul className={styles["product-blueprint__spec-list"]}>
              {blueprint.specs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className={styles["product-blueprint__stops"]}>
              <strong>Số điểm dừng:</strong> {blueprint.stops}
            </p>
            <p className={styles["product-blueprint__note"]}>
              <strong>{blueprint.heightNote}</strong>
            </p>
            <div className={styles["product-blueprint__button-group"]}>
              <button className={styles["product-blueprint__primary-button"]} onClick={() => navigate("/lien-he")}>
                LIÊN HỆ TRỰC TIẾP ĐỂ BIẾT THÊM THÔNG TIN
              </button>
              <a
                href="https://zalo.me/3469899057771273254"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className={styles["product-blueprint__secondary-button"]}>KHO ẢNH</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

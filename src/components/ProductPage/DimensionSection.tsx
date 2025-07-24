import { memo } from "react";
import styles from "../../styles/pages/ProductsPage/ProductSpecs.module.scss";

interface Dimension {
  readonly people: string;
  readonly size: string;
  readonly weight: string;
}

interface Props {
  readonly data: ReadonlyArray<Dimension>;
  readonly className?: string;
}

const INSTALLATION_FACTORS = [
  "Số điểm dừng",
  "Yêu cầu thi công phòng máy",
  "Vị trí lắp đặt thang máy: ngoài trời sẽ có mức phí cao hơn từ 10 – 15% so với trong nhà",
  "Mức tải trọng: 300kg, 400kg, 500kg, 600kg",
  "Kết cấu giếng thang và nguyên liệu thi công",
  "Đặc điểm công trình: nếu xa, không nằm trong tỉnh có chi nhánh",
  "Nội thất bên trong thang máy và các tính năng cập nhật",
  "Tùy chỉnh thiết kế: màu sắc, cửa tự động, và các phụ kiện thang máy",
] as const;

const DimensionSection = memo(({ data, className }: Props) => {
  const containerClass = className ? `${styles["product-specs"]} ${className}` : styles["product-specs"];

  if (!data || data.length === 0) {
    return (
      <div className={containerClass}>
        <p>Không có dữ liệu kích thước để hiển thị.</p>
      </div>
    );
  }

  return (
    <div id="size-price" className={`${styles["product-specs"]} ${styles["product-specs__grid"]}`}>
      <h2 className={styles["product-specs__heading"]}>Kích thước và giá lắp đặt</h2>
      <section className={styles["product-specs__dimension-section"]}>
        <h2 className={styles["product-specs__title"]}>Kích thước thang máy</h2>
        <div className={styles["product-specs__table-wrapper"]}>
          <table className={styles["product-specs__table"]}>
            <thead>
              <tr>
                <th>KHỐI LƯỢNG</th>
                <th>KÍCH THƯỚC</th>
                <th>TẢI TRỌNG</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.people}</td>
                  <td>{item.size}</td>
                  <td>{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles["product-specs__installation-section"]}>
        <h2 className={styles["product-specs__title"]}>Giá lắp đặt</h2>
        <div className={styles["product-specs__content"]}>
          <p className={styles["product-specs__subtitle"]}>
            Trên thực tế, giá thang máy thay đổi phụ thuộc vào nhiều yếu tố:
          </p>
          <ul>
            {INSTALLATION_FACTORS.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
          <a
            href="https://zalo.me/3469899057771273254"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className={styles["product-specs__button"]} type="button">
            THẨM MỸ THANG MÁY
            </button>
          </a>
        </div>
      </section>
    </div>
  );
});

DimensionSection.displayName = "DimensionSection";

export default DimensionSection;

import { memo, useCallback } from "react";
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
  const containerClass = className ? `${styles.container} ${className}` : styles.container;

  const handleDetailsClick = useCallback(() => {
    console.log("Xem chi tiết về thẩm mỹ cho thang máy");
  }, []);

  if (!data || data.length === 0) {
    return (
      <div className={containerClass}>
        <p>Không có dữ liệu kích thước để hiển thị.</p>
      </div>
    );
  }

  return (
    <div
      id="size-price"
      className={`${styles.container} ${styles.specGrid}`}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 className={styles.heading} data-aos="zoom-in" data-aos-duration="600">
        Kích thước và giá lắp đặt
      </h2>

      {/* Kích thước */}
      <section
        className={styles.dimensionSection}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <h2 className={styles.title}>Kích thước thang máy</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>SỐ NGƯỜI</th>
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

      {/* Giá lắp đặt */}
      <section
        className={styles.installationSection}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <h2 className={styles.title}>Giá lắp đặt</h2>
        <div className={styles.content}>
          <p className={styles.subtitle}>
            Trên thực tế, giá thang máy gia đình thay đổi phụ thuộc vào nhiều yếu tố:
          </p>
          <ul data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
            {INSTALLATION_FACTORS.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
          <button
            className={styles.button}
            onClick={handleDetailsClick}
            type="button"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            XEM CHI TIẾT VỀ THẨM MỸ CHO THANG MÁY
          </button>
        </div>
      </section>
    </div>
  );
});

DimensionSection.displayName = "DimensionSection";

export default DimensionSection;

import styles from "../../styles/pages/ProductsPage/ProductCabin.module.scss";

interface Props {
  data: {
    roofStyles: ReadonlyArray<string>;
    handrails: ReadonlyArray<string>;
    materials: ReadonlyArray<string>;
  };
  open: boolean;
  onClose: () => void;
}

export default function AestheticsModal({ data, open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Thẩm mỹ nội thất cabin</h2>

        <h4>Kiểu trần:</h4>
        <ul>
          {data.roofStyles.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h4>Tay vịn:</h4>
        <ul>
          {data.handrails.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h4>Vật liệu hoàn thiện:</h4>
        <ul>
          {data.materials.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button className={styles.closeButton} onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}

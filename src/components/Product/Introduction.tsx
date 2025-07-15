// src/components/product/Introduction.tsx
import styles from "../../styles/pages/ProductsPage/ProductIntro.module.scss";

interface Props {
  title: string;
  introduction: string;
  description: string;
  imageUrl: string;
}

export default function Introduction({ title, introduction, description, imageUrl }: Props) {
  // Tách tại từ "Máy" (viết hoa đúng chính tả)
  const splitIndex = title.indexOf("Máy");
  let first = title;
  let highlight = "";

  if (splitIndex !== -1) {
    first = title.slice(0, splitIndex + 3); // "Máy" dài 3 ký tự
    highlight = title.slice(splitIndex + 3).trim();
  }

  // Kiểm tra có chứa "JP TECHLIFT" hay không
  const descriptionParts = description.split("JP TECHLIFT");

  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>
            {first} <br />
            {highlight && <span>{highlight}</span>}
          </h1>

          <p className={styles.description}>
            {descriptionParts.length === 2 ? (
              <>
                {descriptionParts[0]}
                <strong>JP TECHLIFT</strong>
                {descriptionParts[1]}
              </>
            ) : (
              description
            )}
          </p>

          <p className={styles.introduction}>{introduction}</p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt="Ảnh minh họa sản phẩm" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

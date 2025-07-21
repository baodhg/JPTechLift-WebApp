// src/components/product/Introduction.tsx
import styles from "../../styles/pages/ProductsPage/ProductIntro.module.scss";
import TitleIntro from "../Navbar/TitleIntro";
interface Props {
  title: string;
  introduction: string;
  description: string;
  imageUrl: string;
}

export default function Introduction({ title, introduction, description, imageUrl }: Props) {


  // Kiểm tra có chứa "JP TECHLIFT" hay không
  const descriptionParts = description.split("JP TECHLIFT");

  return (
    <section className={styles["product-intro"]}>
      <div className={styles["product-intro__container"]}>
        <div className={styles["product-intro__text"]}>
           <TitleIntro title={title} className={styles["product-intro__title"]} />

          <p className={styles["product-intro__description"]}>
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

          <p className={styles["product-intro__intro"]}>{introduction}</p>
        </div>

        <div className={styles["product-intro__image-wrapper"]}>
          <img src={imageUrl} alt="Ảnh minh họa sản phẩm" className={styles["product-intro__image"]} />
        </div>
      </div>
    </section>
  );
}

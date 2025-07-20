// src/components/product/Introduction.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../../styles/pages/ProductsPage/ProductIntro.module.scss";

interface Props {
  title: string;
  introduction: string;
  description: string;
  imageUrl: string;
}

export default function Introduction({ title, introduction, description, imageUrl }: Props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const splitIndex = title.indexOf("Máy");
  let first = title;
  let highlight = "";

  if (splitIndex !== -1) {
    first = title.slice(0, splitIndex + 3);
    highlight = title.slice(splitIndex + 3).trim();
  }

  const descriptionParts = description.split("JP TECHLIFT");

  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.textBox} data-aos="fade-right">
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

        <div className={styles.imageWrapper} data-aos="fade-left">
          <img src={imageUrl} alt="Ảnh minh họa sản phẩm" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../../styles/pages/ProductsPage/ProductContentTable.module.scss";
import size from "../../assets/images/productPage_img/home_lift/size_content_table.jpg";
import install from "../../assets/images/productPage_img/home_lift/install_content_table.jpg";
import gallery from "../../assets/images/productPage_img/home_lift/gallery_content_table.jpg";
import blueprint from "../../assets/images/productPage_img/home_lift/blueprint1.png";

interface Props {
  data: Readonly<{
    title: string;
    quickLinks: ReadonlyArray<{ label: string; targetId: string }>;
  }>;
  imageUrl: string;
}

const quickThumbnails = [
  {
    label: "Kích thước và giá lắp đặt",
    targetId: "size-price",
    image: size,
  },
  {
    label: "Quy trình lắp đặt",
    targetId: "installation",
    image: install,
  },
  {
    label: "Hình ảnh thực tế",
    targetId: "real-gallery",
    image: gallery,
  },
  {
    label: "Bản vẽ kỹ thuật",
    targetId: "blueprint",
    image: blueprint,
  },
];

export default function ContentTableSection({ data, imageUrl }: Props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="overview" className={styles["content-table"]}>
      <div className={styles["content-table__container"]}>
        <div
          className={styles["content-table__text-content"]}
          data-aos="fade-up"
        >
          <h2 className={styles["content-table__title"]}>{data.title}</h2>
        </div>

        <div
          className={styles["content-table__image-wrapper"]}
          data-aos="zoom-in"
        >
          <img
            src={imageUrl}
            alt="Ảnh minh họa sản phẩm"
            className={styles.image}
          />
        </div>

        <div className={styles["content-table__grid"]}>
          {quickThumbnails.map((item, index) => (
            <div
              key={index}
              className={styles["content-table__item"]}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.label}
                className={styles["content-table__thumb"]}
              />
              <h4>{item.label}</h4>
              <a
                href={`#${item.targetId}`}
                className={styles["content-table__link-btn"]}
              >
                TÌM HIỂU THÊM
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

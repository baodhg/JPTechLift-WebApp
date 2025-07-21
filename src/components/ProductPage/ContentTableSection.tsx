import styles from "../../styles/pages/ProductsPage/ProductContentTable.module.scss";
import size from "../../assets/images/productPage_img/home_lift/contentTable_size&price.png";
import install from "../../assets/images/productPage_img/home_lift/contentTable_realític.png";
import gallery from "../../assets/images/productPage_img/home_lift/contentTable_installation.png";
import blueprint from "../../assets/images/productPage_img/home_lift/contentTable_blueprint.png";
interface Props {
  data: Readonly<{
    title: string;
    quickLinks: ReadonlyArray<{ label: string; targetId: string }>;
  }>;
  imageUrl: string; // ✅ truyền thêm ảnh cố định
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
  return (
    <section id="overview" className={styles["content-table"]}>
      <div className={styles["content-table__container"]}>
        <div className={styles["content-table__text-content"]}>
          <h2 className={styles["content-table__title"]}>{data.title}</h2>        
        </div>

        <div className={styles["content-table__image-wrapper"]}>
          <img src={imageUrl} alt="Ảnh minh họa sản phẩm" className={styles.image} />
        </div>
        <div className={styles["content-table__grid"]}>
          {quickThumbnails.map((item, index) => (
            <div key={index} className={styles["content-table__item"]}>
              <img src={item.image} alt={item.label} className={styles["content-table__thumb"]} />
              <h4>{item.label}</h4>
              <a href={`#${item.targetId}`} className={styles["content-table__link-btn"]}>
                TÌM HIỂU THÊM
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

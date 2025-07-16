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
    <section id="overview" className={styles.contentTable}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles.titleLine}></div>
          <div className={styles.links}>
            {data.quickLinks.map((item, index) => (
              <a key={index} href={`#${item.targetId}`} className={styles.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt="Ảnh minh họa sản phẩm" className={styles.image} />
        </div>
        <div className={styles.quickGrid}>
  {quickThumbnails.map((item, index) => (
    <div key={index} className={styles.quickItem}>
      <img src={item.image} alt={item.label} className={styles.thumb} />
      <h4>{item.label}</h4>
      <a href={`#${item.targetId}`} className={styles.linkBtn}>
        TÌM HIỂU THÊM
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

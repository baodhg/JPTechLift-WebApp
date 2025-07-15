import styles from "../../../styles/components/Navbar/DesktopNavbar/DesktopNav.module.scss";
import { Link } from "react-router-dom";
import { productSlugMap } from "../../../constants/productSlugMap"; // ánh xạ chuẩn
import type { ProductTitle } from "../../../constants/productSlugMap";
interface DropdownContentProps {
  type: "product" | "about" | "contact";
}

const ProductServiceDropdown = ({ type }: DropdownContentProps) => {
  const content = {
    product: [
      {
        title: "SẢN PHẨM",
        items: Object.keys(productSlugMap) as ProductTitle[], // chỉ dùng key hợp lệ
      },
      {
        title: "DỊCH VỤ",
        items: [
          "TƯ VẤN - THIẾT KẾ",
          "BẢO TRÌ",
          "LẮP ĐẶT - VẬN HÀNH",
          "CẢI TẠO - SỬA CHỮA",
          "VẬT TƯ - PHỤ KIỆN THANG MÁY",
        ],
      },
    ],
    about: {
      title: "GIỚI THIỆU",
      items: ["Tầm nhìn sứ mệnh", "Đội ngũ chuyên gia", "Câu chuyện thương hiệu"],
    },
    contact: {
      title: "LIÊN HỆ",
      items: ["Hotline", "Email", "Chi nhánh"],
    },
  };

  function toSlug(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  const getLink = (item: string): string => {
    if (type === "product") {
      const slug = productSlugMap[item as ProductTitle];
      return slug ? `/products/${slug}` : "#";
    }

    if (type === "about" || type === "contact") return "#";

    return `/service/${toSlug(item)}`;
  };

  const data = content[type];

  return (
    <div className={styles.dropdown}>
      {Array.isArray(data) ? (
        data.map((col, idx) => (
          <div className={styles.column} key={idx}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, i) => (
                <li key={i}>
                  <Link to={getLink(item)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className={styles.column}>
          <h4>{data.title}</h4>
          <ul>
            {data.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductServiceDropdown;

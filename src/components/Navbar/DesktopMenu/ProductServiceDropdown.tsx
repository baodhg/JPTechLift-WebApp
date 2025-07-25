import styles from "../../../styles/components/Navbar/DesktopNavbar/DesktopNav.module.scss";
import { Link } from "react-router-dom";
import { productSlugMap } from "../../../constants/productSlugMap"; // ánh xạ chuẩn
import type { ProductTitle } from "../../../constants/productSlugMap";

const aboutLinks: Record<string, string> = {
  "VỀ CHÚNG TÔI": "/ve-chung-toi",
  "BAN LÃNH ĐẠO": "/ban-lanh-dao",
  "NGUYÊN TẮC": "/nguyen-tac",
  "QUY TRÌNH DỰ ÁN": "/quy-trinh-du-an",
};

const serviceLinks: Record<string, string> = {
  "TƯ VẤN - THIẾT KẾ": "/dich-vu/tu-van-lap-dat",
  "LẮP ĐẶT - VẬN HÀNH": "/dich-vu/lap-dat-thang-may",
  "BẢO TRÌ": "/dich-vu/bao-tri",
  "CẢI TẠO - SỬA CHỮA": "/dich-vu/cai-tao",
  "VẬT TƯ - PHỤ KIỆN THANG MÁY": "/dich-vu/cai-tao",
};

const newsLinks: Record<string, string> = {
  BLOG: "/blog",
  "TIN TỨC": "/tin-tuc",
};
interface DropdownContentProps {
  type: "product" | "about" | "contact" | "news";
  onClose?: () => void; // hàm đóng dropdown khi click
}

const ProductServiceDropdown = ({ type, onClose }: DropdownContentProps) => {
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
      items: ["VỀ CHÚNG TÔI", "BAN LÃNH ĐẠO", "NGUYÊN TẮC", "QUY TRÌNH DỰ ÁN"],
    },
    contact: {
      title: "LIÊN HỆ CHÍNH",
      items: ["Hotline", "Email", "Chi nhánh"],
    },
    news: {
      title: "NHÓM TIN TỨC",
      items: ["BLOG", "TIN TỨC"],
    },
  };

  const getLink = (item: string, group: string): string => {
    if (group === "DỊCH VỤ") {
      return serviceLinks[item.toUpperCase()] || "/dich-vu";
    }

    if (type === "product") {
      const slug = productSlugMap[item as ProductTitle];
      return slug ? `/products/${slug}` : "#";
    }

    if (type === "about") {
      return aboutLinks[item.toUpperCase()] || "/ve-chung-toi";
    }
    if (type === "contact") {
      return "/lien-he";
    }

    if (type === "news") {
      return newsLinks[item.toUpperCase()] || "/tin-tuc";
    }
    return "#";
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
                  <Link
                    to={getLink(item, col.title)}
                    onClick={onClose} // gọi hàm đóng dropdown
                  >
                    {item}
                  </Link>
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
              <li key={i}>
                <Link to={getLink(item, data.title)}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductServiceDropdown;

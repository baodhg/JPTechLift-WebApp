import styles from "./DesktopNav.module.scss";
import { Link } from "react-router-dom";

interface DropdownContentProps {
  type: "product" | "about" | "contact";
}
const ProductServiceDropdown = ({ type }: DropdownContentProps) => {
  const content = {
    product: [
      {
        title: "SẢN PHẨM",
        items: [
          "THANG MÁY GIA ĐÌNH",
          "THANG MÁY TẢI KHÁCH",
          "THANG TRƯỢT & THANG CUỐN",
          "THANG TẢI HÀNG",
          "THANG TẢI THỰC PHẨM",
          "THANG MÁY BỆNH VIỆN",
          "THANG MÁY QUAN SÁT",
        ],
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

  const pageRoutes: Record<string, string> = {
    "THANG MÁY GIA ĐÌNH": "/product/home-lift",
    "THANG MÁY TẢI KHÁCH": "/product/passenger-elevator",
    "THANG TRƯỢT & THANG CUỐN": "/product/escalator",
    "THANG TẢI HÀNG": "/product/freight-lift",
    "THANG TẢI THỰC PHẨM": "/product/food-lift",
    "THANG MÁY BỆNH VIỆN": "/product/hospital-lift",
    "THANG MÁY QUAN SÁT": "/product/panorama-lift",

    "TƯ VẤN - THIẾT KẾ": "/service/consulting",
    "BẢO TRÌ": "/service/maintenance",
    "LẮP ĐẶT - VẬN HÀNH": "/service/installation",
    "CẢI TẠO - SỬA CHỮA": "/service/upgrade",
    "VẬT TƯ - PHỤ KIỆN THANG MÁY": "/service/accessories",
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
                  <Link to={pageRoutes[item] || "#"}>{item}</Link>
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
              <li key={i}>{item}</li> // bạn có thể sửa thành Link sau
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductServiceDropdown;

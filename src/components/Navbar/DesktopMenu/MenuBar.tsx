import { useState } from "react";
import facebook from "../../../assets/images/header/Facebook_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon.png";
import search from "../../../assets/images/header/Search_Icon.png";
import styles from "./DesktopNav.module.scss";
import Search from "./Search";
import ProductServiceDropdown from "./ProductServiceDropdown";

interface MenuBarProps {
  scrolled: boolean;
  className?: string; // ✅ thêm dòng này
}
const MenuBar = ({ scrolled }: MenuBarProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <div className={`${styles.menuWrapper} ${scrolled ? styles.menuBarScrolled : ""}`}>
        <div className={styles.menuBar}>
          {/* Thanh điều hướng */}
          <div className={styles.menuBar__left}>
            <ul className={styles.menuBar__list}>
              <li className={styles.menuItem}>
                <div className={styles.dropdownWrapper}>
                  <a onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}>
                    SẢN PHẨM & DỊCH VỤ
                  </a>
                  {activeDropdown === "product" && <ProductServiceDropdown type="product" />}
                </div>
              </li>
              <li>/</li>
              <li className={styles.menuItem}>
                <div className={styles.dropdownWrapper}>
                  <a onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}>
                    CÔNG TY CHÚNG TÔI
                  </a>
                  {activeDropdown === "about" && <ProductServiceDropdown type="about" />}
                </div>
              </li>
              <li>/</li>
              <li className={styles.menuItem}>
                <div className={styles.dropdownWrapper}>
                  <a onClick={() => setActiveDropdown(activeDropdown === "contact" ? null : "contact")}>LIÊN HỆ</a>
                  {activeDropdown === "contact" && <ProductServiceDropdown type="contact" />}
                </div>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="hover: transition-colors">
                  TIN TỨC
                </a>
              </li>
            </ul>
          </div>
          {/* Icon mạng xã hội + tìm kiếm */}
          <div className={styles.menuBar__icons}>
            <a href="#" className="transition duration-200 hover:brightness-200 hover:scale-105">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#" className="transition duration-200 hover:brightness-200 hover:scale-105">
              <img src={linkendin} alt="linkendin" />
            </a>
            <a href="#" className="transition duration-200 hover:brightness-200 hover:scale-105">
              <img src={tiktok} alt="tiktok" />
            </a>
            <div className={styles.menuBar__search}>
              <a
                href="#"
                className={`${styles.searchIcon} transition duration-200 hover:brightness-200 hover:scale-105`}
                onClick={() => setShowSearch(true)}
              >
                <img src={search} alt="search" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Panel tìm kiếm nằm bên dưới */}
      {showSearch && (
        <div className={styles.searchWrapper}>
          <Search onClose={() => setShowSearch(false)} />
        </div>
      )}
    </>
  );
};

export default MenuBar;

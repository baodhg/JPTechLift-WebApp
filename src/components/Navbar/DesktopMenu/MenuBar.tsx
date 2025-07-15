import { useState } from "react";
import facebook from "../../../assets/images/header/Facebook_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon.png";
import search from "../../../assets/images/header/Search_Icon.png";
import styles from "../../../styles/components/Navbar/DesktopNavbar/DesktopNav.module.scss";

import ProductServiceDropdown from "./ProductServiceDropdown";

interface MenuBarProps {
  scrolled: boolean;
  onSearchOpen: () => void;
  showSearch: boolean;
}
const MenuBar = ({ scrolled, onSearchOpen, showSearch }: MenuBarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <div className={`${styles.menuWrapper} ${scrolled ? styles.menuBarScrolled : ""}`}>
        <div className={`${styles.menuBar} ${scrolled ? styles.menuBarScrolled : ""}`}>
          {/* Thanh điều hướng */}
          <div className={styles.menuBar__left}>
            <ul className={styles.menuBar__list}>
              <li className={styles.menuItem}>
                <div className={styles.dropdownWrapper}>
                  <a
                    className="transition duration-200 hover:brightness-200 hover:scale-105"
                    onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
                  >
                    SẢN PHẨM & DỊCH VỤ
                  </a>
                  {!showSearch && activeDropdown === "product" && <ProductServiceDropdown type="product" />}
                </div>
              </li>
              <li>/</li>
              <li className={styles.menuItem}>
                <div className={styles.dropdownWrapper}>
                  <a
                    className="transition duration-200 hover:brightness-200 hover:scale-105"
                    onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
                  >
                    CÔNG TY CHÚNG TÔI
                  </a>
                  {!showSearch && activeDropdown === "about" && <ProductServiceDropdown type="about" />}
                </div>
              </li>
              <li>/</li>
              <li className={styles.menuItem}>
                <div className={styles.dropdownWrapper}>
                  <a
                    className="transition duration-200 hover:brightness-200 hover:scale-105"
                    onClick={() => setActiveDropdown(activeDropdown === "contact" ? null : "contact")}
                  >
                    LIÊN HỆ
                  </a>
                  {!showSearch && activeDropdown === "contact" && <ProductServiceDropdown type="contact" />}
                </div>
              </li>
              <li>/</li>
              <li>
                <a className="transition duration-200 hover:brightness-200 hover:scale-105" href="#">
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
              <a onClick={onSearchOpen}>
                <img src={search} alt="search" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;

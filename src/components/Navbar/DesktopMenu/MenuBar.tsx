import { useState } from "react";
import facebook from "../../../assets/images/header/Facebook_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon.png";
import search from "../../../assets/images/header/Search_Icon_2.png";
import styles from "../../../styles/components/Navbar/DesktopNavbar/DesktopNav.module.scss";

import ProductServiceDropdown from "./ProductServiceDropdown";

interface MenuBarProps {
  scrolled: boolean;
  onSearchOpen: () => void;
  showSearch: boolean;
}
const MenuBar = ({ scrolled, onSearchOpen, showSearch }: MenuBarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
const closeDropdown = () => setActiveDropdown(null); // hàm đóng dropdown
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
                   {!showSearch && activeDropdown === "product" && (
                    <ProductServiceDropdown type="product" onClose={closeDropdown} />
                  )}
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
                    {!showSearch && activeDropdown === "about" && (
                    <ProductServiceDropdown type="about" onClose={closeDropdown} />
                  )}
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
                {!showSearch && activeDropdown === "contact" && (
                    <ProductServiceDropdown type="contact" onClose={closeDropdown} />
                  )}
                </div>
              </li>
              <li>/</li>
              <li>
                <a
                  className="transition duration-200 hover:brightness-200 hover:scale-105"
                  onClick={() => setActiveDropdown(activeDropdown === "news" ? null : "news")}
                >
                  TIN TỨC
                </a>
                 {!showSearch && activeDropdown === "news" && (
                  <ProductServiceDropdown type="news" onClose={closeDropdown} />
                )}
              </li>
            </ul>
          </div>
          {/* Icon mạng xã hội + tìm kiếm */}
          <div className={styles.menuBar__icons}>
            <a
              href="https://www.facebook.com/profile.php?id=61573816036604"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:brightness-200 hover:scale-105"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayinpixels"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:brightness-200 hover:scale-105"
            >
              <img src={linkendin} alt="linkendin" />
            </a>
            <a
              href="https://www.tiktok.com/@jptechlift"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:brightness-200 hover:scale-105"
            >
              <img src={tiktok} alt="tiktok" />
            </a>
            <button onClick={onSearchOpen}>
              <a onClick={onSearchOpen}>
                <img src={search} alt="search" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;

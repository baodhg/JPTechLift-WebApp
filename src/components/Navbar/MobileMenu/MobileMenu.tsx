import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/components/Navbar/MobieNavbar/MobileMenu.module.scss";
import { ChevronRight } from "lucide-react";
import Logo from "../../Logo/Logo";
import facebook from "../../../assets/images/header/Facebook_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon.png";
import search from "../../../assets/images/header/Search_Icon.png";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuLevel, setMenuLevel] = useState<"main" | "product_service" | "product">("main");
  const navigate = useNavigate();
  return (
    <>
      {/* Thanh trên: Hotline */}
      <div className={styles.hotlineBar}>
        <p>Hotline: (+84) 777 275 384</p>
      </div>

      {/* Thanh xanh: logo + nút toggle */}
      <div className={styles.headerBar}>
        {/* Logo bên trái */}
        <Logo variant="white" className={styles.logo} />
        {/* Khối phải: social + search + toggle */}
        <div className={styles.headerBar__right}>
          <div className={styles.headerBar__icons}>
            <div className={`${styles.headerBar__socialIcons} ${showSearch ? styles.hidden : ""}`}>
              <a href="#" className="transition duration-200 hover:brightness-200 hover:scale-105">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#" className="transition duration-200 hover:brightness-200 hover:scale-105">
                <img src={linkendin} alt="linkendin" />
              </a>
              <a href="#" className="transition duration-200 hover:brightness-200 hover:scale-105">
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>

            {/*Thanh search */}
            <form className={`${styles.headerBar__searchForm} ${showSearch ? styles.show : ""}`}>
              <input type="text" placeholder="Tìm kiếm..." className={styles.searchInput} />
              <button type="submit" className={styles.searchBtn}></button>
            </form>
            {/* Icon Search luôn hiển thị để bấm */}
            <button className={styles.searchToggleBtn} onClick={() => setShowSearch(!showSearch)}>
              {" "}
              <img src={search} alt="search" className={styles.headerBar__searchIcon} />
            </button>
            <div className={styles.iconDivider}></div>
            {/* Hamburger */}
            <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      {/* Menu trượt xuống */}
      <div className={`${styles.menuPanel} ${isOpen ? styles.menuPanel__open : ""}`}>
        <div className={styles.menuInner}>
          {menuLevel === "main" && (
            <ul className={styles.menuList}>
              <li onClick={() => setMenuLevel("product_service")}>
                <a>
                  <span>SẢN PHẨM & DỊCH VỤ</span> <ChevronRight size={16} />
                </a>
              </li>
              <li onClick={() => navigate("/cong-ty")}>
                <a href="">
                  <span>CÔNG TY CHÚNG TÔI</span> <ChevronRight size={16} />
                </a>
              </li>
              <li onClick={() => navigate("/lien-he")}>
                <a href="">
                  <span>LIÊN HỆ</span> <ChevronRight size={16} />
                </a>
              </li>
              <li onClick={() => navigate("/tin-tuc")}>
                <a href="">
                  <span>TIN TỨC</span> <ChevronRight size={16} />
                </a>
              </li>
            </ul>
          )}

          {menuLevel === "product_service" && (
            <ul className={styles.menuList}>
              <li onClick={() => setMenuLevel("product")}>
                <a>
                  <span>SẢN PHẨM</span> <span>+</span>
                </a>
              </li>
              <li onClick={() => navigate("/dich-vu")}>
                <a>
                  <span>DỊCH VỤ</span> <span>+</span>
                </a>
              </li>
            </ul>
          )}

          {menuLevel === "product" && (
            <ul className={styles.menuList}>
              <li onClick={() => navigate("/products/home-lift")}>
                <a>
                  <span>THANG MÁY GIA ĐÌNH</span> <span>→</span>
                </a>{" "}
              </li>
              <li onClick={() => navigate("/products/passenger-elevator")}>
                <a>
                  <span>THANG MÁY DÂN DỤNG</span> <span>→</span>
                </a>{" "}
              </li>
              <li onClick={() => navigate("/products/freight-lift")}>
                <a>
                  {" "}
                  <span>THANG MÁY CHỞ HÀNG</span> <span>→</span>
                </a>
              </li>
              <li onClick={() => navigate("/products/panorama-lift")}>
                <a>
                  <span>THANG MÁY QUAN SÁT</span> <span>→</span>
                </a>{" "}
              </li>
              <li onClick={() => navigate("/products/hospital-lift")}>
                <a>
                  <span>THANG MÁY BỆNH VIỆN</span> <span>→</span>
                </a>{" "}
              </li>
              <li onClick={() => navigate("/products/food-lift")}>
                <a>
                  <span>THANG MÁY THỰC PHẨM</span> <span>→</span>
                </a>{" "}
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/components/Navbar/MobieNavbar/MobileMenu.module.scss";
import { ChevronRight } from "lucide-react";
import Logo from "../../Logo/Logo";
import facebook from "../../../assets/images/header/Facebook_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon.png";
import search from "../../../assets/images/header/Search_Icon.png";

const aboutLinks = [
  { label: "VỀ CHÚNG TÔI", path: "/ve-chung-toi" },
  { label: "BAN LÃNH ĐẠO", path: "/ban-lanh-dao" },
  { label: "NGUYÊN TẮC", path: "/nguyen-tac" },
  { label: "QUY TRÌNH DỰ ÁN", path: "/quy-trinh-du-an" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuLevel, setMenuLevel] = useState<
    "main" | "product_service" | "product" | "about"
  >("main");
  const closeMenu = () => {
    setIsOpen(false);
    setMenuLevel("main");
  };
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
            <div
              className={`${styles.headerBar__socialIcons} ${
                showSearch ? styles.hidden : ""
              }`}
            >
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
            </div>

            {/*Thanh search */}
            <form
              className={`${styles.headerBar__searchForm} ${
                showSearch ? styles.show : ""
              }`}
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchBtn}></button>
            </form>
            {/* Icon Search luôn hiển thị để bấm */}
            <button
              className={styles.searchToggleBtn}
              onClick={() => setShowSearch(!showSearch)}
            >
              {" "}
              <img
                src={search}
                alt="search"
                className={styles.headerBar__searchIcon}
              />
            </button>
            <div className={styles.iconDivider}></div>
            {/* Hamburger */}
            <button
              className={styles.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      {/* Menu trượt xuống */}
      <div
        className={`${styles.menuPanel} ${
          isOpen ? styles.menuPanel__open : ""
        }`}
      >
        <div className={styles.menuInner}>
          {menuLevel === "main" && (
            <ul className={styles.menuList}>
              <li onClick={() => setMenuLevel("product_service")}>
                <a>
                  <span>SẢN PHẨM & DỊCH VỤ</span> <ChevronRight size={16} />
                </a>
              </li>
              <li onClick={() => setMenuLevel("about")}>
                <a>
                  <span>CÔNG TY CHÚNG TÔI</span> <ChevronRight size={16} />
                </a>
              </li>
              <li>
                <Link to="/lien-he" onClick={closeMenu}>
                  <span>LIÊN HỆ</span> <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeMenu}>
                  <span>TIN TỨC</span> <ChevronRight size={16} />
                </Link>
              </li>
            </ul>
          )}

          {menuLevel === "about" && (
            <ul className={styles.menuList}>
              {aboutLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} onClick={closeMenu}>
                    <span>{item.label}</span> <span>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {menuLevel === "product" && (
            <ul className={styles.menuList}>
              <li>
                <Link to="/products/home-lift" onClick={closeMenu}>
                  <span>THANG MÁY GIA ĐÌNH</span> <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="/products/passenger-elevator" onClick={closeMenu}>
                  <span>THANG MÁY DÂN DỤNG</span> <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="/products/freight-lift" onClick={closeMenu}>
                  <span>THANG MÁY CHỞ HÀNG</span> <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="/products/panorama-lift" onClick={closeMenu}>
                  <span>THANG MÁY QUAN SÁT</span> <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="/products/hospital-lift" onClick={closeMenu}>
                  <span>THANG MÁY BỆNH VIỆN</span> <span>→</span>
                </Link>
              </li>
              <li>
                <Link to="/products/food-lift" onClick={closeMenu}>
                  <span>THANG MÁY THỰC PHẨM</span> <span>→</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

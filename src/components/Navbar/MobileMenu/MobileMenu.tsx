import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/components/Navbar/MobieNavbar/MobileMenu.module.scss";
import { ChevronRight } from "lucide-react";
import Logo from "../../Logo/Logo";
import facebook from "../../../assets/images/header/Facebook_Icon_3.png";
import tiktok from "../../../assets/images/header/TikTok_Icon_3.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon_3.png";
import search from "../../../assets/images/header/Search_Icon_2.png";
import XIcon from "../../../assets/images/header/X_Icon.png";
import youtube from "../../../assets/images/header/Youtube_Icon_3.png";
import backIcon from "../../../assets/images/header/Back_Icon.png";

const productLinks = [
  { label: "THANG MÁY GIA ĐÌNH", path: "/products/thang-may-gia-dinh" },
  { label: "THANG MÁY DÂN DỤNG", path: "/products/thang-may-hanh-khach" },
  { label: "THANG MÁY CHỞ HÀNG", path: "/products/thang-tai-hang" },
  { label: "THANG MÁY QUAN SÁT", path: "/products/thang-may-quan-sat" },
  { label: "THANG MÁY BỆNH VIỆN", path: "/products/thang-may-benh-vien" },
  { label: "THANG MÁY THỰC PHẨM", path: "/products/thang-tai-thuc-pham" },
  { label: "THANG CUỐN", path: "/products/thang-truot-thang-cuon" },
];

const serviceLinks = [
  { label: "TƯ VẤN – THIẾT KẾ", path: "/dich-vu#tu-van-thiet-ke" },
  { label: "BẢO TRÌ", path: "/dich-vu#bao-tri" },
  { label: "LẮP ĐẶT – VẬN HÀNH", path: "/dich-vu#lap-dat-van-hanh" },
  { label: "CẢI TẠO – SỬA CHỮA", path: "/dich-vu#cai-tao" },
  { label: "VẬT TƯ – PHỤ KIỆN THANG MÁY", path: "/dich-vu#vat-tu-phu-kien" },
];

const aboutLinks = [
  { label: "VỀ CHÚNG TÔI", path: "/ve-chung-toi" },
  { label: "BAN LÃNH ĐẠO", path: "/ban-lanh-dao" },
  { label: "NGUYÊN TẮC", path: "/nguyen-tac" },
  { label: "QUY TRÌNH DỰ ÁN", path: "/quy-trinh-du-an" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuLevel, setMenuLevel] = useState<"main" | "product_service" | "product" | "about" | "service">("main");

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
        <Logo variant="white" className={`${styles.logo} ${showSearch ? styles.logoHidden : ""}`} />
        {/* Khối phải: social + search + toggle */}
        <div className={styles.headerBar__right}>
          <div className={styles.headerBar__icons}>
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

          {menuLevel === "product_service" && (
            <ul className={styles.menuList}>
              {/* Nút quay lại */}
              <li onClick={() => setMenuLevel("main")}>
                <a>
                  <span className={styles.backIconWrapper}>
                    <img src={backIcon} alt="back" className={styles.backIcon} /> <p>QUAY LẠI</p>
                  </span>
                </a>
              </li>

              {/* SẢN PHẨM */}
              <li onClick={() => setMenuLevel("product")}>
                <a>
                  <span>SẢN PHẨM</span> <span>+</span>
                </a>
              </li>

              {/* DỊCH VỤ */}
              <li onClick={() => setMenuLevel("service")}>
                <a>
                  <span>DỊCH VỤ</span> <span>+</span>
                </a>
              </li>
            </ul>
          )}

          {menuLevel === "service" && (
            <ul className={styles.menuList}>
              {/* Quay lại */}
              <li onClick={() => setMenuLevel("product_service")}>
                <a>
                  <span className={styles.backIconWrapper}>
                    <img src={backIcon} alt="back" className={styles.backIcon} />
                    <p>QUAY LẠI</p>
                  </span>
                </a>
              </li>

              {/* Danh sách dịch vụ */}
              {serviceLinks.map((item, i) => (
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
              {/* Nút quay lại */}
              <li onClick={() => setMenuLevel("product_service")}>
                <a>
                  <span className={styles.backIconWrapper}>
                    <img src={backIcon} alt="back" className={styles.backIcon} />
                    <p>QUAY LẠI</p>
                  </span>
                </a>
              </li>

              {/* Danh sách sản phẩm */}
              {productLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} onClick={closeMenu}>
                    <span>{item.label}</span> <span>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isOpen && (
          <div className={styles.menuPanel__socials}>
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
            <a
              href="https://x.com/JPTechLift"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:brightness-200 hover:scale-105"
            >
              <img src={XIcon} alt="X" />
            </a>
            <a
              href=" https://www.youtube.com/@jptechlift"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:brightness-200 hover:scale-105"
            >
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;

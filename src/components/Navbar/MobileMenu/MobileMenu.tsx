import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Logo from "../../Logo/Logo";
import styles from "../../../styles/components/Navbar/MobieNavbar/MobileMenu.module.scss";
import AdvancedSearch from "../AdvancedSearch";
// Assets imports
import facebook from "../../../assets/images/header/Facebook_Icon_3.png";
import tiktok from "../../../assets/images/header/TikTok_Icon_3.png";
import linkendin from "../../../assets/images/header/Linkedin_Icon_3.png";
import search from "../../../assets/images/header/Search_Icon_2.png";
import XIcon from "../../../assets/images/header/X_Icon.png";
import youtube from "../../../assets/images/header/Youtube_Icon_3.png";
import backIcon from "../../../assets/images/header/Back_Icon.png";

// Constants
const MENU_LEVELS = {
  MAIN: "main",
  PRODUCT_SERVICE: "product_service",
  PRODUCT: "product",
  ABOUT: "about",
  SERVICE: "service",
} as const;

type MenuLevel = typeof MENU_LEVELS[keyof typeof MENU_LEVELS];

// Menu data
const NAVIGATION_DATA = {
  products: [
    { label: "THANG MÁY GIA ĐÌNH", path: "/products/thang-may-gia-dinh" },
    { label: "THANG MÁY DÂN DỤNG", path: "/products/thang-may-hanh-khach" },
    { label: "THANG MÁY CHỞ HÀNG", path: "/products/thang-tai-hang" },
    { label: "THANG MÁY QUAN SÁT", path: "/products/thang-may-quan-sat" },
    { label: "THANG MÁY BỆNH VIỆN", path: "/products/thang-may-benh-vien" },
    { label: "THANG MÁY THỰC PHẨM", path: "/products/thang-tai-thuc-pham" },
    { label: "THANG CUỐN", path: "/products/thang-truot-thang-cuon" },
  ],
  services: [
    { label: "TƯ VẤN – THIẾT KẾ", path: "/dich-vu#tu-van-thiet-ke" },
    { label: "BẢO TRÌ", path: "/dich-vu#bao-tri" },
    { label: "LẮP ĐẶT – VẬN HÀNH", path: "/dich-vu#lap-dat-van-hanh" },
    { label: "CẢI TẠO – SỬA CHỮA", path: "/dich-vu#cai-tao" },
    { label: "VẬT TƯ – PHỤ KIỆN THANG MÁY", path: "/dich-vu#vat-tu-phu-kien" },
  ],
  about: [
    { label: "VỀ CHÚNG TÔI", path: "/ve-chung-toi" },
    { label: "BAN LÃNH ĐẠO", path: "/ban-lanh-dao" },
    { label: "NGUYÊN TẮC", path: "/nguyen-tac" },
    { label: "QUY TRÌNH DỰ ÁN", path: "/quy-trinh-du-an" },
  ],
  socials: [
    { 
      href: "https://www.facebook.com/profile.php?id=61573816036604", 
      icon: facebook, 
      alt: "Facebook" 
    },
    { 
      href: "https://www.linkedin.com/in/mayinpixels", 
      icon: linkendin, 
      alt: "LinkedIn" 
    },
    { 
      href: "https://www.tiktok.com/@jptechlift", 
      icon: tiktok, 
      alt: "TikTok" 
    },
    { 
      href: "https://x.com/JPTechLift", 
      icon: XIcon, 
      alt: "X (Twitter)" 
    },
    { 
      href: "https://www.youtube.com/@jptechlift", 
      icon: youtube, 
      alt: "YouTube" 
    },
  ]
};

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuLevel, setActiveMenuLevel] = useState<MenuLevel>(MENU_LEVELS.MAIN);
  const [isSearchOpen, setShowSearch] = useState(false);
  // Optimized event handlers with useCallback
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    if (isMenuOpen) {
      setActiveMenuLevel(MENU_LEVELS.MAIN);
    }
  }, [isMenuOpen]);


  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
    setActiveMenuLevel(MENU_LEVELS.MAIN);
  }, []);

  const handleMenuLevelChange = useCallback((level: MenuLevel) => {
    setActiveMenuLevel(level);
  }, []);


  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleMenuClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, handleMenuClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Component render functions
  const renderBackButton = (targetLevel: MenuLevel, label = "QUAY LẠI") => (
    <li className={styles["menu__item--back"]}>
      <button
        className={styles["menu__button"]}
        onClick={() => handleMenuLevelChange(targetLevel)}
        aria-label={`Quay lại ${label}`}
      >
        <span className={styles["menu__back-content"]}>
          <img 
            src={backIcon} 
            alt="Quay lại" 
            className={styles["menu__back-icon"]} 
          />
          <span>{label}</span>
        </span>
      </button>
    </li>
  );

  const renderMenuItems = (items: Array<{label: string, path: string}>) => (
    <>
      {items.map((item, index) => (
        <li key={`${item.path}-${index}`} className={styles["menu__item"]}>
          <Link 
            to={item.path} 
            onClick={handleMenuClose}
            className={styles["menu__link"]}
            aria-label={item.label}
          >
            <span>{item.label}</span>
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </>
  );

  const renderSocialLinks = () => (
    <div className={styles["menu__socials"]} role="complementary" aria-label="Liên kết mạng xã hội">
      {NAVIGATION_DATA.socials.map((social, index) => (
        <a
          key={`${social.alt}-${index}`}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["menu__social-link"]}
          aria-label={`Theo dõi trên ${social.alt}`}
        >
          <img 
            src={social.icon} 
            alt={social.alt}
            className={styles["menu__social-icon"]}
          />
        </a>
      ))}
    </div>
  );

  return (
    <header className={styles["mobile-navbar"]} role="banner">
      {/* Hotline Bar */}
      <div className={styles["mobile-navbar__hotline"]} role="banner">
        <p>Hotline: <a href="tel:+84777275384">(+84) 777 275 384</a></p>
      </div>

      {/* Main Header Bar */}
      <div className={styles["mobile-navbar__header"]} role="navigation" aria-label="Thanh điều hướng chính">
        {/* Logo */}
        <Logo 
  variant="white" 
  className={`${styles["mobile-navbar__logo"]} ${isSearchOpen ? styles["mobile-navbar__logo--hidden"] : ""}`}
/>

        {/* Right side controls */}
        <div className={styles["mobile-navbar__controls"]}>
          {/* Search Form */}
  <AdvancedSearch isOpen={isSearchOpen} setIsOpen={setShowSearch} scrolled={false}/>

          <div className={styles["mobile-navbar__actions"]}>
            {/* Search Toggle */}
            <button 
              className={styles["mobile-navbar__search-toggle"]} 
              onClick={() => setShowSearch(true)}
              aria-label="Tìm kiếm"
            >
              <img 
                src={search} 
                alt="Tìm kiếm" 
                className={styles["mobile-navbar__search-icon"]} 
              />
            </button>

            <div className={styles["mobile-navbar__divider"]} aria-hidden="true"></div>

            {/* Menu Toggle */}
            <button
              className={`${styles["mobile-navbar__menu-toggle"]} ${isMenuOpen ? styles["mobile-navbar__menu-toggle--active"] : ""}`}
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Panel */}
      <nav 
        id="mobile-menu"
        className={`${styles["menu"]} ${isMenuOpen ? styles["menu--open"] : ""}`}
        role="navigation"
        aria-label="Menu điều hướng di động"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles["menu__content"]}>
          {/* Main Menu Level */}
          {activeMenuLevel === MENU_LEVELS.MAIN && (
            <ul className={styles["menu__list"]} role="list">
              <li className={styles["menu__item"]}>
                <button
                  className={styles["menu__button"]}
                  onClick={() => handleMenuLevelChange(MENU_LEVELS.PRODUCT_SERVICE)}
                  aria-label="Xem sản phẩm và dịch vụ"
                >
                  <span>SẢN PHẨM & DỊCH VỤ</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </li>
              <li className={styles["menu__item"]}>
                <button
                  className={styles["menu__button"]}
                  onClick={() => handleMenuLevelChange(MENU_LEVELS.ABOUT)}
                  aria-label="Thông tin về công ty"
                >
                  <span>CÔNG TY CHÚNG TÔI</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </li>
              <li className={styles["menu__item"]}>
                <Link 
                  to="/lien-he" 
                  onClick={handleMenuClose}
                  className={styles["menu__link"]}
                >
                  <span>LIÊN HỆ</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </li>
              <li className={styles["menu__item"]}>
                <Link 
                  to="/blog" 
                  onClick={handleMenuClose}
                  className={styles["menu__link"]}
                >
                  <span>TIN TỨC</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          )}

          {/* About Menu Level */}
          {activeMenuLevel === MENU_LEVELS.ABOUT && (
            <ul className={styles["menu__list"]} role="list">
              {renderBackButton(MENU_LEVELS.MAIN)}
              {renderMenuItems(NAVIGATION_DATA.about)}
            </ul>
          )}

          {/* Product & Service Menu Level */}
          {activeMenuLevel === MENU_LEVELS.PRODUCT_SERVICE && (
            <ul className={styles["menu__list"]} role="list">
              {renderBackButton(MENU_LEVELS.MAIN)}
              <li className={styles["menu__item"]}>
                <button
                  className={styles["menu__button"]}
                  onClick={() => handleMenuLevelChange(MENU_LEVELS.PRODUCT)}
                  aria-label="Xem danh sách sản phẩm"
                >
                  <span>SẢN PHẨM</span>
                  <span aria-hidden="true">+</span>
                </button>
              </li>
              <li className={styles["menu__item"]}>
                <button
                  className={styles["menu__button"]}
                  onClick={() => handleMenuLevelChange(MENU_LEVELS.SERVICE)}
                  aria-label="Xem danh sách dịch vụ"
                >
                  <span>DỊCH VỤ</span>
                  <span aria-hidden="true">+</span>
                </button>
              </li>
            </ul>
          )}

          {/* Service Menu Level */}
          {activeMenuLevel === MENU_LEVELS.SERVICE && (
            <ul className={styles["menu__list"]} role="list">
              {renderBackButton(MENU_LEVELS.PRODUCT_SERVICE)}
              {renderMenuItems(NAVIGATION_DATA.services)}
            </ul>
          )}

          {/* Product Menu Level */}
          {activeMenuLevel === MENU_LEVELS.PRODUCT && (
            <ul className={styles["menu__list"]} role="list">
              {renderBackButton(MENU_LEVELS.PRODUCT_SERVICE)}
              {renderMenuItems(NAVIGATION_DATA.products)}
            </ul>
          )}
        </div>

        {/* Social Links */}
        {isMenuOpen && renderSocialLinks()}
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className={styles["mobile-navbar__overlay"]} 
          onClick={handleMenuClose}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default MobileMenu;
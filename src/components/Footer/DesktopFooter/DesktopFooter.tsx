import styles from "../../../styles/components/Footer/DesktopFooter/DesktopFooter.module.scss";
import Logo from "../../Logo/Logo";
import { Link } from "react-router-dom";
import facebook from "../../../assets/images/header/Facebook_2_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon_2.png";
import linkendin from "../../../assets/images/header/Linkedin_2_Icon.png";
import instagram from "../../../assets/images/header/Instagram_Icon.png";
import youtube from "../../../assets/images/header/Youtube-Icon.png";
import generalcontact from "../../../assets/images/header/General_Request_Icon.png";
import contact from "../../../assets/images/header/Contact_Icon.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61573816036604",
    icon: facebook,
    alt: "facebook",
  },
  {
    href: "https://www.instagram.com/jptechlift/",
    icon: instagram,
    alt: "instagram",
  },
  {
    href: "https://www.youtube.com/@jptechlift",
    icon: youtube,
    alt: "youtube",
  },
  {
    href: "https://www.linkedin.com/in/mayinpixels",
    icon: linkendin,
    alt: "linkedin",
  },
  {
    href: "https://www.tiktok.com/@jptechlift",
    icon: tiktok,
    alt: "tiktok",
  },
];

const footerLinks = [
  {
    title: "SẢN PHẨM & DỊCH VỤ",
    items: [
    { label: "Sản phẩm JPTechLifts", to: "/san-pham/thang-may-gia-dinh" },
      { label: "Nâng cấp & sửa chữa", to: "/dich-vu-thang-may/cai-tao-sua-chua" },
    ],
  },
  {
    title: "CÔNG TY CHÚNG TÔI",
    items: [
     { label: "Về chúng tôi", to: "/gioi-thieu" },
      { label: "Lãnh đạo", to: "/gioi-thieu/ban-lanh-dao" },
      { label: "Tin tức", to: "/tin-tuc-thang-may" },
      { label: "Nguyên tắc công ty", to: "/gioi-thieu/nguyen-tac" },
    ],
  },
];

const bottomLinks = [
  {
    label: "Liên hệ để nhận hỗ trợ",
    icon: generalcontact,
    to: "/lien-he",
  },
  {
    label: "Yêu cầu chung",
    icon: contact,
    to: "/lien-he",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* --- Phần nội dung chính --- */}
      <div className={styles.content}>
        {/* Logo + MXH */}
        <div className={styles.column}>
          <Logo variant="white" className={styles.logo} />
          <div className={styles.socials}>
            {socialLinks.map((item) => (
              <a key={item.alt} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                <img src={item.icon} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* SP & Dịch vụ */}
        {footerLinks.map((col) => (
          <div className={styles.column} key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Thông tin liên hệ */}
        <div className={styles.column}>
          <h4>THÔNG TIN LIÊN HỆ</h4>
          <p>(+84) 277 225 384</p>
          <p>contact.jptechlift@gmail.com</p>
          <p>Địa chỉ: 106/107 Đường Đỗ Năng Tế, Phường An Lạc A, Quận Bình Tân, TP.HCM</p>
        </div>

        {/* Bản đồ Google Map */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9096937049844!2d106.6146879748044!3d10.741443189405224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d77eccf8a89%3A0x2713c9be549abe31!2zMTA2LzEwLzkgxJDhu5cgTsSDbmcgVOG6vw!5e0!3m2!1svi!2s!4v1752058104832!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "28px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* --- Phần cuối --- */}
      <div className={styles.bottom}>
        <p>© Copyrights 2025. All Rights Reserved.</p>
        <div className={styles.links}>
          {bottomLinks.map((link) => (
            <Link key={link.label} to={link.to}>
              <img src={link.icon} alt={link.label} /> {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

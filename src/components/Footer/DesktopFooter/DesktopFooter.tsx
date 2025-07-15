import styles from "../../../styles/components/Footer/DesktopFooter/DesktopFooter.module.scss";
import logo from "../../../assets/images/header/Logo_White_Removebackground.png"; // chỉnh lại theo bạn
import facebook from "../../../assets/images/header/Facebook_2_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon_2.png";
import linkendin from "../../../assets/images/header/Linkedin_2_Icon.png";
import instagram from "../../../assets/images/header/Instagram_Icon.png";
import youtube from "../../../assets/images/header/Youtube-Icon.png";
import generalcontact from "../../../assets/images/header/General_Request_Icon.png";
import contact from "../../../assets/images/header/Contact_Icon.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* --- Phần nội dung chính --- */}
      <div className={styles.content}>
        {/* Logo + MXH */}
        <div className={styles.column}>
          <img src={logo} alt="JP TECHLIFT" className={styles.logo} />
          <div className={styles.socials}>
            <a href="#" className={styles.iconLink}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#" className={styles.iconLink}>
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#" className={styles.iconLink}>
              <img src={youtube} alt="youtube" />
            </a>
            <a href="#" className={styles.iconLink}>
              <img src={linkendin} alt="linkendin" />
            </a>
            <a href="#" className={styles.iconLink}>
              <img src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>

        {/* SP & Dịch vụ */}
        <div className={styles.column}>
          <h4>SẢN PHẨM & DỊCH VỤ</h4>
          <ul>
            <li>Sản phẩm JPTechLifts</li>
            <li>Nâng cấp & sửa chữa</li>
          </ul>
        </div>

        {/* Giới thiệu */}
        <div className={styles.column}>
          <h4>CÔNG TY CHÚNG TÔI</h4>
          <ul>
            <li>Về chúng tôi</li>
            <li>Lãnh đạo</li>
            <li>Tin tức</li>
            <li>Nguyên tắc công ty</li>
          </ul>
        </div>

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
          <a href="#">
            <img src={generalcontact} alt="generalcontact" /> Liên hệ để nhận hỗ trợ
          </a>
          <a href="#">
            <img src={contact} alt="contact" /> Yêu cầu chung
          </a>
        </div>
      </div>
    </footer>
  );
}

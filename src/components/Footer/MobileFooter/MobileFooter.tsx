import styles from "../../../styles/components/Footer/MobileFooter/MobileFooter.module.scss";
import Logo from "../../Logo/Logo";
import facebook from "../../../assets/images/header/Facebook_2_Icon.png";
import instagram from "../../../assets/images/header/Instagram_Icon.png";
import youtube from "../../../assets/images/header/Youtube-Icon.png";
import linkedin from "../../../assets/images/header/Linkedin_2_Icon.png";
import tiktok from "../../../assets/images/header/TikTok_Icon_2.png";

export default function MobileFooter() {
  return (
    <footer className={styles.footer}>
      {/* Logo + MXH nền xanh đậm */}
      <div className={styles.top}>
        <Logo variant="white" className={styles.logo} />
        <div className={styles.socials}>
          <a href="https://www.facebook.com/profile.php?id=61573816036604" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/jptechlift/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.youtube.com/@jptechlift" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.linkedin.com/in/mayinpixels" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.tiktok.com/@jptechlift" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="tiktok" />
          </a>
        </div>
      </div>

      {/* Thông tin liên hệ */}
      <div className={styles.contact}>
        <p>
          <strong>ĐỊA CHỈ:</strong>
          <br />
          106/10/17 Đường Đỗ Năng Tế, Phường An Lạc A, <br />
          Quận Bình Tân, Thành Phố Hồ Chí Minh, Việt Nam
        </p>
        <p>
          <strong>EMAIL:</strong>
          <br />
          contact.jptechlift@gmail.com
        </p>
        <p>
          <strong>HOTLINE:</strong>
          <br />
          (+84) 777 275 384
        </p>
      </div>

      {/* Footer dưới cùng */}
      <div className={styles.bottom}>
        <p>© Copyrights 2025. All Rights Reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Cookies and setting</a>
        </div>
      </div>
    </footer>
  );
}

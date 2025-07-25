import Logo from "../../Logo/Logo";
import phone from "../../../assets/images/header/Phone_Icon.jpg";
import email from "../../../assets/images/header/Email_Icon.jpg";
import flag from "../../../assets/images/header/Flag_Icon.jpg";
import polygon from "../../../assets/images/header/Polygon 1.jpg";
import styles from "../../../styles/components/Navbar/DesktopNavbar/DesktopNav.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      {/* Logo */}
      <div className={styles.topBar__logo}>
        <Logo />
      </div>
      {/* Info + ngôn ngữ */}
      <div className={styles.topBar__info}>
        <div className={styles.topBar__item + " " + styles.topBar__contactIcon}>
          <img src={phone} alt="Phone" />
          <span>(+84) 777 275 384</span>
        </div>
        <div className={styles.topBar__item + " " + styles.topBar__contactIcon}>
          <img src={email} alt="Email" />
          <span>
            {" "}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=contact.jptechlift@gmail.com&su=Yêu cầu tư vấn thang máy&body=${encodeURIComponent(
                `Xin chào JP TechLift,

Tôi cần được tư vấn về sản phẩm thang máy. Dưới đây là thông tin của tôi:

• Họ tên: 
• Số điện thoại: 
• Loại thang máy quan tâm: 
• Nhu cầu lắp đặt: 
• Khu vực (tỉnh/thành): 

Rất mong sớm nhận được phản hồi từ quý công ty.

Trân trọng,`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact.jptechlift@gmail.com
            </a>
          </span>
        </div>
        <div className={styles.topBar__lang}>
          <img src={polygon} alt="scroll down" className={styles.topBar__icon_sc} />
          <span>VN</span>
          <img src={flag} alt="VN" className={styles.topBar__icon_flag} />
        </div>
      </div>
    </div>
  );
};
export default TopBar;

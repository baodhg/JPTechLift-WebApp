import DesktopFooter from "./DesktopFooter/DesktopFooter";
import FooterMobile from "./MobileFooter/MobileFooter";
import { useMediaQuery } from "react-responsive"; // hoặc hook tự viết

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {/* nội dung chính */}
      {isMobile ? <FooterMobile /> : <DesktopFooter />}
    </>
  );
};
export default Footer;
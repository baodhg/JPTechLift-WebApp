import DesktopFooter from "./DesktopFooter/DesktopFooter";
import FooterMobile from "./MobileFooter/MobileFooter";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <FooterMobile /> : <DesktopFooter />;
};

export default Footer;

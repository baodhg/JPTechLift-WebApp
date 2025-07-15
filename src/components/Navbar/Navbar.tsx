import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileMenu /> : <DesktopMenu />;
};

export default NavBar;

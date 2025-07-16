import DesktopMenu from "./DesktopMenu/DesktopMenu";
import FixedButtons from "./FixedButton";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
      <FixedButtons />
    </>
  );
};

export default NavBar;

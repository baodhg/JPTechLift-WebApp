import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobieMenu/MobileMenu";
const MenuBar = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopMenu />
      </div>
      <div>
        <MobileMenu />
      </div>
    </>
  );
};

export default MenuBar;

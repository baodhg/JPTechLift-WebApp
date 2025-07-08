import MenuBar from "./MenuBar";
import TopBar from "./TopBar";
import styles from "./DesktopNav.module.scss";
import { useEffect, useState } from "react";
const DesktopMenu = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // nếu cuộn > 80px thì hiện menu
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.desktopMenu}>
      {!scrolled && (
        <div className={styles.topBarWrapper}>
          <TopBar />
        </div>
      )}
      <MenuBar scrolled={scrolled} /> {/* ✅ truyền prop */}
    </div>
  );
};

export default DesktopMenu;

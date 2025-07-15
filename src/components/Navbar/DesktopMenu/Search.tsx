import styles from "../../../styles/components/Navbar/DesktopNavbar/Search.module.scss";
import searchIcon from "../../../assets/images/header/Search_Icon.png";

interface SearchProps {
  onClose: () => void;
  scrolled: boolean;
}

const Search = ({ onClose, scrolled }: SearchProps) => {
  return (
    <div className={`${styles.searchPanel} ${scrolled ? styles.searchScrolled : ""}`}>
      <div className={styles.searchPanel__header}>
        <h4>TÌM KIẾM</h4>
        <button onClick={onClose}>ĐÓNG ✕</button>
      </div>
      <form className={styles.searchPanel__form}>
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="submit">
          <img src={searchIcon} alt="🔍" />
        </button>
      </form>
    </div>
  );
};

export default Search;

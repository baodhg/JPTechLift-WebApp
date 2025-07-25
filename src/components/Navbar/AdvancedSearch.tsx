import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/components/Navbar/SearchPanel.module.scss";
import { searchData, popularSearches, type SearchItem } from "../../constants/searchData";
interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  scrolled?: boolean;
}

const typeIcons: Record<SearchItem["type"], string> = {
  "Sản phẩm": "📦 ",
  "Dịch vụ": "🛠 ",
  "Giới thiệu": "🏢 ",
  "Tin tức": "📰 ",
  "Trang khác": "📄 ",
};

export default function AdvancedSearch({ isOpen, setIsOpen, scrolled }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const navigate = useNavigate();

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");

  useEffect(() => {
    const stored = localStorage.getItem("searchHistory");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        navigate(results[activeIndex].path);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, activeIndex, setIsOpen, navigate]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const nq = normalize(query);
    const computed = searchData
      .map((item) => {
        const slug = item.path.split("/").pop() ?? "";
        const score =
          (normalize(item.title).includes(nq) ? 4 : 0) +
          (item.keywords?.some((k) => normalize(k).includes(nq)) ? 3 : 0) +
          (item.metaTitle && normalize(item.metaTitle).includes(nq) ? 2 : 0) +
          (normalize(slug).includes(nq) ? 1 : 0);
        return { item, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.item);

    setResults(computed);
    setActiveIndex(0);

    // nếu slug khớp chính xác thì chuyển hướng luôn
    const direct = searchData.find((i) => normalize(i.path.split("/").pop() ?? "").trim() === nq);
    if (direct) {
      navigate(direct.path);
      setIsOpen(false);
    }
  }, [query, navigate, setIsOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // nếu có kết quả gợi ý thì chuyển hướng
    if (results[activeIndex]) {
      navigate(results[activeIndex].path);
    }

    // lưu lịch sử
    const newHistory = [query, ...history.filter((h) => h !== query)].slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    setIsOpen(false);
    setQuery("");
  };

  const grouped = results.reduce<Record<SearchItem["type"], SearchItem[]>>((acc, r) => {
    acc[r.type] = acc[r.type] ? [...acc[r.type], r] : [r];
    return acc;
  }, {} as Record<SearchItem["type"], SearchItem[]>);

  return (
    <div
      className={`${styles.searchPanel} ${scrolled ? styles.searchPanelScrolled : ""}`}
      onClick={() => setIsOpen(false)}
    >
      <div className={styles["searchPanel__box"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["searchPanel__header"]}>
          <h4>Tìm kiếm</h4>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <form className={styles["searchPanel__form"]} onSubmit={handleSubmit}>
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nhập từ khóa..." />
        </form>

        {query && results.length > 0 && (
          <div className={styles["searchPanel__section"]}>
            {Object.entries(grouped).map(([type, items]) => (
              <div key={type} className={styles["searchPanel__group"]}>
                <h5>{type}</h5>
                <ul>
                  {items.map((item, index) => (
                    <li
                      key={item.path}
                      className={`${styles.resultItem} ${activeIndex === index ? styles.active : ""}`}
                    >
                      <Link to={item.path} onClick={() => setIsOpen(false)}>
                        <span className={styles.icon}>{typeIcons[item.type]}</span>
                        {item.title}
                        <span className={styles.resultPath}>{item.path}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {query && results.length === 0 && <div className={styles["searchPanel__section"]}>Không tìm thấy kết quả</div>}

        {!query && (
          <>
            <div className={styles["searchPanel__section"]}>
              <h5>Tìm phổ biến</h5>
              <ul>
                {popularSearches.map((p) => (
                  <li key={p}>
                    <button onClick={() => setQuery(p)}>{p}</button>
                  </li>
                ))}
              </ul>
            </div>
            {history.length > 0 && (
              <div className={styles["searchPanel__section"]}>
                <h5>Lịch sử tìm kiếm</h5>
                <ul>
                  {history.map((h) => (
                    <li key={h}>
                      <button onClick={() => setQuery(h)}>{h}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

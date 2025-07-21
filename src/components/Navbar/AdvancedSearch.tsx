import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/components/Navbar/SearchPanel.module.scss";
import { categories, popularSearches, searchSuggestions } from "../../constants/searchData";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  scrolled?: boolean;
}

export default function AdvancedSearch({ isOpen, setIsOpen, scrolled }: Props) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [history, setHistory] = useState<string[]>([]);
  const navigate = useNavigate();

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
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // nếu có kết quả gợi ý thì chuyển hướng
    if (filteredSuggestions.length > 0) {
      const firstResult = filteredSuggestions[0];
      navigate(firstResult.path);
    }

    // lưu lịch sử
    const newHistory = [query, ...history.filter((h) => h !== query)].slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));

    setIsOpen(false);
    setQuery("");
  };

  const filteredSuggestions = searchSuggestions.flatMap((s) =>
    s.items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
  );

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

        <div className={styles["searchPanel__categories"]}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={selectedCategory === c.id ? "active" : ""}
            >
              {c.label}
            </button>
          ))}
        </div>

        {query && filteredSuggestions.length > 0 && (
          <div className={styles["searchPanel__section"]}>
            <h5>Gợi ý</h5>
            <ul>
              {filteredSuggestions.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.title} - {item.type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

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

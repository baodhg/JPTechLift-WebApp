// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";         
import StandardPage from "./pages/StandardPage";
import PrinciplePage from "./pages/PrinciplePage";
import LeaderPage from "./pages/LeaderPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />               {/* Trang chủ */}
          <Route path="/quy-trinh-du-an" element={<StandardPage />} />   {/* Trang tiêu chuẩn */}
          <Route path="/nguyen-tac" element={<PrinciplePage />} />   {/* Trang nguyên tắc */}
          <Route path="/ban-lanh-dao" element={<LeaderPage />} />   {/* Trang nguyên tắc */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

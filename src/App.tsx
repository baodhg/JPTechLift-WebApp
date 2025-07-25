// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import StandardPage from "./pages/StandardPage";
import PrinciplePage from "./pages/PrinciplePage";
import LeaderPage from "./pages/LeaderPage";
import ScrollToTop from "./components/ScrollToTop";
import ProductTemplatePage from "./pages/Products/ProductTemplate";
import ServiceTemplatePage from "./pages/Services/ServiceTemplatePage";
import NewsPage from "./pages/News/NewsPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import ContactJPTechLiftFormPage from "./pages/ContactPage";
import TuVan from "./pages/Services/TuVan";
import HuongDan from "./pages/Services/HuongDan";
import LapDatThangMay from "./pages/Services/LapDatThangMay";
import BaoTriThangMay from "./pages/Services/BaoTriThangMay";
import CaiTaoSuaChuaThangMay from "./pages/Services/CaiTaoSuaChuaThangMayPage";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
          <Route path="/quy-trinh-du-an" element={<StandardPage />} />{" "}
          {/* Trang tiêu chuẩn */}
          <Route path="/nguyen-tac" element={<PrinciplePage />} />{" "}
          {/* Trang nguyên tắc */}
          <Route path="/ban-lanh-dao" element={<LeaderPage />} />{" "}
          {/* Trang nguyên tắc */}
          <Route path="/tin-tuc" element={<NewsPage />} /> {/* Trang tin tức */}
          <Route path="/ve-chung-toi" element={<AboutUsPage />} />{" "}
          {/* Trang về chúng tôi */}
          <Route path="/blog" element={<BlogPage />} /> {/* Trang blog */}
          <Route path="/lien-he" element={<ContactJPTechLiftFormPage />} />{" "}
          {/* Trang liên hệ */}
          <Route path="/dich-vu" element={<ServiceTemplatePage />} />{" "}
          <Route
            path="/dich-vu/lap-dat-thang-may"
            element={<LapDatThangMay/>}
          />
          <Route path="/dich-vu/tu-van-lap-dat" element={<TuVan/>} />
          <Route path="/dich-vu/huong-dan" element={<HuongDan />} />
          <Route path="/dich-vu/bao-tri" element={<BaoTriThangMay />} />
          <Route path="/dich-vu/cai-tao" element={<CaiTaoSuaChuaThangMay />} />
          {/* PRODUCT: chỉ còn 1 route động */}
          <Route
            path="/products/:productId"
            element={<ProductTemplatePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

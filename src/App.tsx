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
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
          <Route path="/gioi-thieu/quy-trinh-du-an" element={<StandardPage />} />
          {/* Trang tiêu chuẩn */}
          <Route path="/gioi-thieu/nguyen-tac" element={<PrinciplePage />} />
          {/* Trang nguyên tắc */}
          <Route path="/gioi-thieu/ban-lanh-dao" element={<LeaderPage />} />
          {/* Trang nguyên tắc */}
          <Route path="/tin-tuc-thang-may" element={<NewsPage />} /> {/* Trang tin tức */}
          <Route path="/gioi-thieu" element={<AboutUsPage />} />
          {/* Trang về chúng tôi */}
          <Route path="/blog-thang-may" element={<BlogPage />} /> {/* Trang blog */}
          <Route path="/lien-he" element={<ContactJPTechLiftFormPage />} />{" "}
          {/* Trang liên hệ */}
          <Route path="/dich-vu-thang-may" element={<ServiceTemplatePage />} />
          {/* Trang dịch vụ */}
          <Route
            path="/dich-vu-thang-may/lap-dat-thang-may"
            element={<LapDatThangMay />}
          />
          <Route
            path="/dich-vu-thang-may/tu-van-thiet-ke"
            element={<TuVan />}
          />
          <Route
            path="/dich-vu-thang-may/huong-dan-van-hanh"
            element={<HuongDan />}
          />
          <Route
            path="/dich-vu-thang-may/bao-tri-thang-may"
            element={<BaoTriThangMay />}
          />
          <Route
            path="/dich-vu-thang-may/cai-tao-sua-chua"
            element={<CaiTaoSuaChuaThangMay />}
          />
          {/* PRODUCT: chỉ còn 1 route động */}
          <Route
            path="/san-pham/:productId"
            element={<ProductTemplatePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";         
import StandardPage from "./pages/StandardPage";
import PrinciplePage from "./pages/PrinciplePage";
import LeaderPage from "./pages/LeaderPage";

import ProductTemplatePage from "./pages/Products/ProductTemplate";
import ServiceTemplatePage from "./pages/Services/ServiceTemplatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />               {/* Trang chủ */}
          <Route path="/quy-trinh-du-an" element={<StandardPage />} />   {/* Trang tiêu chuẩn */}
          <Route path="/nguyen-tac" element={<PrinciplePage />} />   {/* Trang nguyên tắc */}
          <Route path="/ban-lanh-dao" element={<LeaderPage />} />   {/* Trang nguyên tắc */}

            {/* PRODUCT: chỉ còn 1 route động */}
        <Route path="/products/:productId" element={<ProductTemplatePage />} />

        {/* SERVICE: cũng chỉ 1 route động */}
        <Route path="/service/:serviceId" element={<ServiceTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

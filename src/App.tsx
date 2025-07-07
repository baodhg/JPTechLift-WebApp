// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Thêm các page khác ở đây nếu có */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
//import Navbar from "./Navbar/Navbar";
//import Footer from "./Footer/Footer"; 

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Outlet /> {/* hiển thị các trang */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

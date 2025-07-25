import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderWithBanner from "../../components/HomePage/HeaderWithBanner";
import ElevatorServicesMobile from "../../components/ServicePage/ServicePageMobile";
import ElevatorServicesDesktop from "../../components/ServicePage/ServicePageDesktop";
import banner from "../../assets/images/Banner-img.png";
import Footer from "../../components/Footer/Footer";

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      id: 1,
      title: "Lắp Đặt Vận Hành",
    path: "/dich-vu-thang-may/lap-dat-thang-may",
      description: "Dịch vụ lắp đặt và vận hành thang máy chuyên nghiệp, an toàn, hiệu quả.",
    },
    {
      id: 2,
      title: "Tư Vấn Thiết Kế",
     path: "/dich-vu-thang-may/tu-van-thiet-ke",
      description: "Tư vấn thiết kế thang máy tối ưu, thẩm mỹ và tiết kiệm chi phí.",
    },
    {
      id: 3,
      title: "Bảo Trì Bảo Dưỡng",
     path: "/dich-vu-thang-may/bao-tri-thang-may",
      description: "Bảo trì định kỳ đảm bảo thang máy hoạt động ổn định và an toàn.",
    },
    {
      id: 4,
      title: "Cải Tạo Sửa Chữa",
      path: "/dich-vu/caitao",
      description: "Khắc phục sự cố, nâng cấp thang máy để đảm bảo hiệu suất và an toàn.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWithBanner banner={banner} title="DỊCH VỤ" />
      <main className="flex-grow py-8 px-4">
        {/* Hiển thị ElevatorServicesMobile hoặc ElevatorServicesDesktop nếu ở trang chính /dich-vu */}
        <div className="mb-8">
          {isMobile ? <ElevatorServicesMobile /> : <ElevatorServicesDesktop />}
        </div>

        {/* Danh sách dịch vụ */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Các Dịch Vụ Của Chúng Tôi
          </h2>
          <div className={isMobile ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"}>
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Outlet để render các trang con */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
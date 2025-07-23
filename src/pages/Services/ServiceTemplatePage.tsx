import { useEffect, useState } from "react";
import HeaderWithBanner from "../../components/HomePage/HeaderWithBanner";
import ElevatorServicesMobile from "../../components/ServicePage/ServicePageMobile";
import ElevatorServicesDestop from "../../components/ServicePage/ServicePageDesktop";
import banner from "../../assets/images/Banner-img.png";
import Footer from "../../components/Footer/Footer";

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <HeaderWithBanner banner={banner} title="DỊCH VỤ" />
      {isMobile ? <ElevatorServicesMobile /> : <ElevatorServicesDestop />}
      <Footer />
    </div>
  );
};

export default ServicesPage;

import HeaderWithBanner from "../../components/HomePage/HeaderWithBanner";
import ElevatorServices from "../../components/ServicePage/ServicePage";
import banner from "../../assets/images/Banner-img.jpg"
import Footer from "../../components/Footer/DesktopFooter/DesktopFooter";
const ServicesPage = () => {
  return (
    <div>
      <HeaderWithBanner banner={banner} title="DỊCH VỤ"/>
      <ElevatorServices />
      <Footer />
    </div>
  );
};

export default ServicesPage; 
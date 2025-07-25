import HeroFooter from "../../components/Footer/HeroFooter";
import HeroBanner from "../../components/HomePage/HeroBanner";
import Footer from "../../components/Footer/Footer";
import BaoTriThangMay from "../../components/ServicePage/BaoTriThangMay";

const BaoTriThangMayPage = () => {
  return (
    <div>
      <HeroBanner />
      <BaoTriThangMay/>
        <HeroFooter />
      <Footer />
    </div>
  );
};

export default BaoTriThangMayPage;

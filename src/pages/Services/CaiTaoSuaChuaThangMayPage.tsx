import HeroFooter from "../../components/Footer/HeroFooter";
import HeroBanner from "../../components/HomePage/HeroBanner";
import Footer from "../../components/Footer/Footer";
import CaiTaoSuaChuaThangMay from "../../components/ServicePage/CaiTaoSuaChuaThangMay";

const CaiTaoSuaChuaThangMayPage= () => {
  return (
    <div>
      <HeroBanner />
      <CaiTaoSuaChuaThangMay/>
        <HeroFooter />
      <Footer />
    </div>
  );
};

export default CaiTaoSuaChuaThangMayPage;
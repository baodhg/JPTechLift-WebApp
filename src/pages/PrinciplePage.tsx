import HeaderWithBanner from "../components/HomePage/HeaderWithBanner";
import PrincipleSection from "../components/PrinciplePage/PrincipleSection";
import HeroFooter from "../components/Footer/HeroFooter";
import bannerImg from "../assets/images/Banner-Principle.jpg";
import Footer from "../components/Footer/Footer";

const PrinciplePage = () => {
  return (
    <div>
      <HeaderWithBanner banner={bannerImg} title="NGUYÊN TẮC CỦA JPTECHLIFT" />
      <PrincipleSection />
      <HeroFooter />
      <Footer />
    </div>
  );
};

export default PrinciplePage;

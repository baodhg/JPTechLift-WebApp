import HeaderWithBanner from "../components/HeaderWithBanner";
import PrincipleSection from "../components/PrincipleSection";
import HeroFooter from "../components/HeroFooter";
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

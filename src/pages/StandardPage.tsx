import HeaderWithBanner from "../components/HomePage/HeaderWithBanner";
import InstallProcessSection from "../components/StandardPage/InstallProcessSection";
import ProductSection from "../components/HomePage/ProductSection";
import CommitSection from "../components/HomePage/CommitSection";
import HeroFooter from "../components/Footer/HeroFooter";
import bannerImg from "../assets/images/Banner-img.png";
import Footer from "../components/Footer/Footer";

const StandardPage = () => {
  return (
    <div>
      <HeaderWithBanner banner={bannerImg} title="QUY TRÌNH DỰ ÁN"/>
      <InstallProcessSection />
      <ProductSection />
      <CommitSection />
      <HeroFooter />
      <Footer />
    </div>
  );
};

export default StandardPage;

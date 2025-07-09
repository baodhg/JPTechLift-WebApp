import HeaderWithBanner from "../components/HeaderWithBanner";
import InstallProcessSection from "../components/InstallProcessSection";
import ProductSection from "../components/ProductSection";
import CommitSection from "../components/CommitSection";
import HeroFooter from "../components/HeroFooter";
import bannerImg from "../assets/images/Banner-img.jpg";
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

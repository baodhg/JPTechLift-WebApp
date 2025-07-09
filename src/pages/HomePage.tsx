import AboutSection from "../components/AboutSection";
import CommitSection from "../components/CommitSection";
import HeroFooter from "../components/HeroFooter";
import ProductSection from "../components/ProductSection";
import ServiceSection from "../components/ServiceSection";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <ProductSection />
      <ServiceSection />
      <CommitSection />
      <HeroFooter />
      <Footer />
    </div>
  );
};

export default HomePage;

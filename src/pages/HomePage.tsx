import AboutSection from "../components/HomePage/AboutSection";
import CommitSection from "../components/HomePage/CommitSection";
import HeroFooter from "../components/Footer/HeroFooter";
import ProductSection from "../components/HomePage/ProductSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import HeroBanner from "../components/HomePage/HeroBanner";
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

import AboutSection from "../components/AboutSection";
import CommitSection from "../components/CommitSection";
import HeroFooter from "../components/HeroFooter";
import ProductSection from "../components/ProductSection";
import ServiceSection from "../components/ServiceSection";
import Navbar from "../components/Navbar/Navbar"
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <ProductSection />
      <ServiceSection />
      <CommitSection />
      <HeroFooter />
      
    </div>
  );
};

export default HomePage;

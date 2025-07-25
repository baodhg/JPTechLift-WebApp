import HeroFooter from "../../components/Footer/HeroFooter";
import HeroBanner from "../../components/HomePage/HeroBanner";
import Footer from "../../components/Footer/Footer";
import ElevatorInstallationOperation from "../../components/ServicePage/ElevatorInstallationOperation";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <ElevatorInstallationOperation/>
        <HeroFooter />
      <Footer />
    </div>
  );
};

export default HomePage;

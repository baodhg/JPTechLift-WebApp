import HeroFooter from "../../components/Footer/HeroFooter";
import HeroBanner from "../../components/HomePage/HeroBanner";
import Footer from "../../components/Footer/Footer";
import ElevatorConsultation from "../../components/ServicePage/ElevatorDesignConsulting";
const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <ElevatorConsultation/>
        <HeroFooter />
      <Footer />
    </div>
  );
};

export default HomePage;

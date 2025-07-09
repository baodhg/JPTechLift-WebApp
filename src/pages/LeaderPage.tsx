import HeaderWithBanner from "../components/HeaderWithBanner";
import LeaderSection from "../components/LeaderSection";
import HeroFooter from "../components/HeroFooter";
import bannerImg from "../assets/images/Banner-Leadership.jpg"
import Footer from "../components/Footer/Footer";

const LeaderPage = () => {
  return (
    <div>
      <HeaderWithBanner banner={bannerImg} title="ĐỘI NGŨ LÃNH ĐẠO" />
      <LeaderSection />
      <HeroFooter />
      <Footer />
    </div>
  );
};

export default LeaderPage;

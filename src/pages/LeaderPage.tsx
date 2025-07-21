import HeaderWithBanner from "../components/HomePage/HeaderWithBanner";
import LeaderSection from "../components/LeaderPage/LeaderSection";
import HeroFooter from "../components/Footer/HeroFooter";
import bannerImg from "../assets/images/Banner-Leadership.png"
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

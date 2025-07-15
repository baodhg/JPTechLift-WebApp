import Header from "../components/HomePage/HeaderWithBanner";
import AboutUsIntro from "../components/AboutUsPage/AboutUsIntro";
import AboutUsBanner from "../components/AboutUsPage/AboutUsBanner";
import AboutUsReasons from "../components/AboutUsPage/AboutUsReasons";
import AboutUsNewsBlogs from "../components/AboutUsPage/AboutUsNewsBlogs";

import bannerImg from "../assets/images/Banner-img.jpg"
import Footer from "../components/Footer/DesktopFooter/DesktopFooter";

const AboutUsPage = () => {
  return (
    <div>
      <Header banner={bannerImg} title="VỀ CHÚNG TÔI" />
      <AboutUsIntro />
      <AboutUsBanner />
      <AboutUsReasons />
      <AboutUsNewsBlogs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;

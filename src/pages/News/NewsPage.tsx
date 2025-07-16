import Footer from "../../components/Footer/Footer";
import HeroFooter from "../../components/Footer/HeroFooter";
import HeroBanner from "../../components/HomePage/HeroBanner";
import ArticleGrid from "../../components/News/ArticleGrid";

const NewsPage = () => {
    return (
        <div>
            <HeroBanner />
            <ArticleGrid/>
            <HeroFooter />
            <Footer />
        </div>
    );
};
export default NewsPage;
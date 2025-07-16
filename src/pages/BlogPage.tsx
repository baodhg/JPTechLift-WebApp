import BlogPageComp from "../components/BlogPage/BlogPageSection";
import HeaderWithBanner from "../components/HomePage/HeaderWithBanner";

import BlogBanner from "../assets/images/banner-blog.jpg";
import Footer from "../components/Footer/DesktopFooter/DesktopFooter";

const BlogPage = () => {
  return (
    <div>
      <HeaderWithBanner banner={BlogBanner} title="BLOG CHÚNG TÔI" />
      <BlogPageComp />
      <Footer />
    </div>
  );
};

export default BlogPage;

import banner from "../assets/images/Banner-img.jpg"

import ContactJPTechLiftForm from "../components/ContactForm/ContactJPTechLiftForm";
import Footer from "../components/Footer/DesktopFooter/DesktopFooter";
import HeaderWithBanner from "../components/HomePage/HeaderWithBanner";

const ContactJPTechLiftFormPage = () => {
  return (
    <div>
    <HeaderWithBanner banner={banner} title="LIÊN HỆ NGAY" />
      <ContactJPTechLiftForm />
      <Footer />
    </div>
  );
};

export default ContactJPTechLiftFormPage; 
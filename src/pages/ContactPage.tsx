import ContactJPTechLiftForm from "../components/ContactForm/ContactForm";
import HeaderWithBanner from "../components/HomePage/HeaderWithBanner";
import banner from "../assets/images/Banner-img2.png";
import Footer from "../components/Footer/Footer";

const ContactJPTechLiftFormPage = () => {
  return (
    <div>
      <HeaderWithBanner banner={banner} title="LIÊN HỆ" />
      <ContactJPTechLiftForm />
      <Footer />
    </div>
  );
};

export default ContactJPTechLiftFormPage;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Zalo from "../../assets/images/zalo.png";
import WhatsApp from "../../assets/images/WhatsApp.png";
import arrowIcon from "../../assets/images/Arrow.png";

const FixedButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="fixed bottom-6 right-2 flex flex-col-reverse gap-4 z-30">
      {/* Nút Zalo */}
      <motion.button
        aria-label="Contact"
        onClick={() => window.open("https://zalo.me/3469899057771273254", "_blank")}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#0467f8] bg-white text-[#041E42] flex items-center justify-center shadow-md"
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 9, duration: 3 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={Zalo}
          alt="Chat Icon"
          className="w-10 h-10 md:w-10 md:h-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
        />
      </motion.button>

      {/* Nút WhatsApp */}
      <motion.button
        aria-label="Contact via WhatsApp"
        onClick={() => window.open("https://wa.me/84777275384", "_blank")}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#25D366] bg-white text-[#25D366] flex items-center justify-center shadow-md"
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 9, duration: 3 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={WhatsApp}
          alt="WhatsApp Icon"
          className="w-10 h-10 md:w-10 md:h-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
        />
      </motion.button>

      {/* Nút cuộn lên đầu - ẩn/hiện dựa vào vị trí cuộn */}
      {showScrollTop && (
        <motion.button
          aria-label="Scroll to top"
          onClick={handleScrollTop}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#041E42] bg-white text-[#041E42] flex items-center justify-center shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            src={arrowIcon}
            alt="Arrow Icon"
            className="w-10 h-10 md:w-8 md:h-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.button>
      )}
    </div>
  );
};

export default FixedButtons;

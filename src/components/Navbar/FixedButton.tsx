import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import chatIcon from "../../assets/images/Message.png";
import arrowIcon from "../../assets/images/Arrow.png";

const FixedButtons = () => {
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex-col-reverse md:flex-row flex gap-4 z-30">
      <motion.button
        aria-label="Contact"
        onClick={() => navigate("/lien-he")}
        className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#041E42] bg-white text-[#041E42] flex items-center justify-center shadow-md"
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={chatIcon}
          alt="Chat Icon"
          className="w-6 h-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
        />
      </motion.button>
      <motion.button
        aria-label="Scroll to top"
        onClick={handleScrollTop}
        className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#041E42] bg-white text-[#041E42] flex items-center justify-center shadow-md"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={arrowIcon}
          alt="Arrow Icon"
          className="w-6 h-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>
    </div>
  );
};

export default FixedButtons;

import type { Slide } from "../components/Carousel/Carousel";
import banner1 from "../assets/images/Banner-img.png";  
import banner2 from "../assets/images/Banner-img1.png";
import banner3 from "../assets/images/Banner-img2.png";
export const slides: Slide[] = [
  {
    src: banner1,
    title: "Công nghệ – Tầm nhìn không giới hạn",
    description: "Công nghệ không có ranh giới chỉ có sự hoàn thiện không ngừng.",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/nguyen-tac",
  },
  {
    src: banner2,
    title: "stylish - smart - simple",
    description: "Nền tảng để chúng tôi phát huy hết mình..",
    ctaText: "Khám phá thêm",
    ctaLink: "/ve-chung-toi",
  },
    {
    src: banner3,
    title: "không chỉ lắp đặt – chúng tôi đồng hành",
    description: "Thiết kế thanh lịch, vận hành thông minh, phù hợp mọi không gian sống.",
    ctaText: "Liên hệ tư vấn",
    ctaLink: "/lien-he",
  },
];

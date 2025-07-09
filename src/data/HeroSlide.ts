import type { Slide } from "../components/Carousel/Carousel";
import banner1 from "../assets/images/Banner-img.jpg";  
import banner2 from "../assets/images/BannerFooter.jpg"; 

export const slides: Slide[] = [
  {
    src: banner1,
    title: "Technology Is The Vision Of No Limits",
    description: "Công nghệ không có ranh giới - chỉ có sự hoàn thiện không ngừng",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/services",
  },
  {
    src: banner2,
    title: "Bảo trì định kỳ",
    description: "Giải pháp tiết kiệm – Tối ưu hiệu quả",
    ctaText: "Liên hệ tư vấn",
    ctaLink: "/contact",
  },
];

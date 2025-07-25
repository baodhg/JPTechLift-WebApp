import { productData } from "../data/ProductData";

export interface SearchItem {
  title: string;
  path: string;
  type: "Sản phẩm" | "Dịch vụ" | "Giới thiệu" | "Tin tức" | "Trang khác";
  keywords?: string[];
  metaTitle?: string;
}

export const searchData: SearchItem[] = [
  ...Object.entries(productData).map(([id, p]) => ({
    title: p.intro.title,
    path: `/san-pham/${id}`,
    type: "Sản phẩm" as const,
    keywords: p.seo?.keywords,
    metaTitle: p.seo?.metaTitle,
  })),
  { title: "TƯ VẤN - THIẾT KẾ", path: "/dich-vu-thang-may/tu-van-thiet-ke", type: "Dịch vụ" },
  { title: "LẮP ĐẶT - VẬN HÀNH", path: "/dich-vu-thang-may/lap-dat-thang-may", type: "Dịch vụ" },
  { title: "BẢO TRÌ", path: "/dich-vu-thang-may/bao-tri-thang-may", type: "Dịch vụ" },
  { title: "CẢI TẠO - SỬA CHỮA", path: "/dich-vu-thang-may/cai-tao-sua-chua", type: "Dịch vụ" },
  { title: "VẬT TƯ - PHỤ KIỆN THANG MÁY", path: "/dich-vu-thang-may/vat-tu-phu-kien", type: "Dịch vụ" },
  { title: "VỀ CHÚNG TÔI", path: "/gioi-thieu", type: "Giới thiệu" },
  { title: "BAN LÃNH ĐẠO", path: "/gioi-thieu/ban-lanh-dao", type: "Giới thiệu" },
  { title: "NGUYÊN TẮC", path: "/gioi-thieu/nguyen-tac", type: "Giới thiệu" },
  { title: "QUY TRÌNH DỰ ÁN", path: "/gioi-thieu/quy-trinh-du-an", type: "Giới thiệu" },
  { title: "Tin tức", path: "/tin-tuc-thang-may", type: "Tin tức" },
  { title: "Blog", path: "/blog-thang-may", type: "Tin tức" },
  { title: "Liên hệ", path: "/lien-he", type: "Trang khác" },
];

export const popularSearches = [
  "Thang máy dân dụng",
  "Thang máy chở hàng",
  "Thang cuốn",
  "Bảo trì thang máy",
  "Cải tạo thang máy cũ",
];
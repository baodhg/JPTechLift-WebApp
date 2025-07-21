export const NavigationData = {
  products: [
    { label: "THANG MÁY GIA ĐÌNH", path: "/products/thang-may-gia-dinh" },
    { label: "THANG MÁY DÂN DỤNG", path: "/products/thang-may-hanh-khach" },
    { label: "THANG MÁY CHỞ HÀNG", path: "/products/thang-tai-hang" },
    { label: "THANG MÁY QUAN SÁT", path: "/products/thang-may-quan-sat" },
    { label: "THANG MÁY BỆNH VIỆN", path: "/products/thang-may-benh-vien" },
    { label: "THANG MÁY THỰC PHẨM", path: "/products/thang-tai-thuc-pham" },
    { label: "THANG CUỐN", path: "/products/thang-truot-thang-cuon" },
  ],
  services: [
    { label: "TƯ VẤN – THIẾT KẾ", path: "/dich-vu#tu-van-thiet-ke" },
    { label: "BẢO TRÌ", path: "/dich-vu#bao-tri" },
    { label: "LẮP ĐẶT – VẬN HÀNH", path: "/dich-vu#lap-dat-van-hanh" },
    { label: "CẢI TẠO – SỬA CHỮA", path: "/dich-vu#cai-tao" },
    { label: "VẬT TƯ – PHỤ KIỆN THANG MÁY", path: "/dich-vu#vat-tu-phu-kien" },
  ],
  about: [
    { label: "VỀ CHÚNG TÔI", path: "/ve-chung-toi" },
    { label: "BAN LÃNH ĐẠO", path: "/ban-lanh-dao" },
    { label: "NGUYÊN TẮC", path: "/nguyen-tac" },
    { label: "QUY TRÌNH DỰ ÁN", path: "/quy-trinh-du-an" },
  ],
} as const;

export const categories = [
  { id: "all", label: "Tất cả", count: 150 },
  { id: "products", label: "Sản phẩm", count: NavigationData.products.length },
  { id: "services", label: "Dịch vụ", count: NavigationData.services.length },
  { id: "solutions", label: "Giải pháp", count: 40 },
];

export const popularSearches = [
  "Thang máy dân dụng",
  "Thang máy chở hàng",
  "Thang cuốn",
  "Bảo trì thang máy",
  "Cải tạo thang máy cũ",
];

export const searchSuggestions = [
  {
    category: "Sản phẩm",
    items: NavigationData.products.map((p) => ({
      title: p.label,
      type: "Sản phẩm",
      path: p.path,
    })),
  },
  {
    category: "Dịch vụ",
    items: NavigationData.services.map((s) => ({
      title: s.label,
      type: "Dịch vụ",
      path: s.path,
    })),
  },
];

export default NavigationData;
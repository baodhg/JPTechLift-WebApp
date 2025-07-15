// Danh sách ánh xạ rõ ràng giữa tên hiển thị và slug URL
export const productSlugMap = {
  "THANG MÁY GIA ĐÌNH": "home-lift",
  "THANG MÁY TẢI KHÁCH": "passenger-elevator",
  "THANG TRƯỢT & THANG CUỐN": "escalator",
  "THANG TẢI HÀNG": "freight-lift",
  "THANG TẢI THỰC PHẨM": "food-lift",
  "THANG MÁY BỆNH VIỆN": "hospital-lift",
  "THANG MÁY QUAN SÁT": "panorama-lift", // nếu chưa có thì ghi placeholder
} as const;

export type ProductTitle = keyof typeof productSlugMap;

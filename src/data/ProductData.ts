import heroImg from "../assets/images/productPage_img/home_lift/hero.jpg";
import gallery1 from "../assets/images/productPage_img/home_lift/gallery1.png";
import real1 from "../assets/images/productPage_img/home_lift/real1.png";
import real2 from "../assets/images/productPage_img/home_lift/real2.png";
import real3 from "../assets/images/productPage_img/home_lift/real3.png";
import real4 from "../assets/images/productPage_img/home_lift/real4.png";
import real5 from "../assets/images/productPage_img/home_lift/gallery_content_table.jpg";
import install from "../assets/images/productPage_img/home_lift/install_content_table.jpg";
import blueprint from "../assets/images/productPage_img/home_lift/blueprint1.png";

export interface Product {
  intro: {
    title: string;
    description: string;
    introduction: string;
    heroImage: string;
  };

  contentTable?: {
    contentImage?: string;
    title: string;
    quickLinks: { label: string; targetId: string }[];
  };
  detailInfo?: {
    title: string;
    introductionLine1: string;
    introductionLine2: string;
    productLine: string;
    config: string;
    brand: string;
    operation: string;
    load: string;
    speed: string;
    size: string;
    pitDepth: string;
  };
  galleryImages?: string[];
  realGalleryImages?: string[];
  dimensions?: {
    people: string;
    size: string;
    weight: string;
  }[];
  installationImage?: string;
  installationSteps?: {
    stage: string;
    description: string;
    steps: { stepTitle: string; stepContent: string }[];
  }[];
  blueprint?: {
    image: string;
    description: string[];
    specs: string[];
    stops: string;
    heightNote: string;
  };
  aestheticsOptions?: {
    roofStyles: string[];
    handrails: string[];
    materials: string[];
  };
}

export const productData: Record<string, Product> = {
  "home-lift": {
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: heroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy chất lượng cao cho không gian sống hiện đại",

      // ảnh,... của 4 ô giữ nguyên qua 6 trang khác nhau
      // Bảng thông tin - Kích thước và giá lắp đặt - Quy trình lắp đặt - Hình ảnh thực tế - Bản vẽ kỹ thuật - 4 ô content giúp thao tác nhanh đến các phần trong product
      quickLinks: [
        { label: "Kích thước và giá", targetId: "size-price" },
        { label: "Quy trình lắp đặt", targetId: "installation" },
        { label: "Hình ảnh thực tế", targetId: "real-gallery" },
        { label: "Bản vẽ kỹ thuật", targetId: "blueprint" },
      ],
    },

    // ✅ Thông tin chi tiết sản phẩm
    detailInfo: {
      title: "Thang Máy Gia Đình",
      introductionLine1: "Thang máy gia đình JPTechLift là lựa chọn lý tưởng cho cả công trình xây mới và cải tạo. ",
      introductionLine2:
        "Được thiết kế và lắp đặt tại Việt Nam, sản phẩm mang đến sự linh hoạt về tải trọng, phù hợp với đa dạng nhu cầu sử dụng trong gia đình hiện đại.",
      productLine: "Dòng sản phẩm: Thang máy gia đình JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng tiên tiến",
      load: "320–450kg",
      speed: "20–60 mét/phút",
      size: "1200x1000mm, 1200x900mm",
      pitDepth: "350–400mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [gallery1, gallery1, gallery1],
    realGalleryImages: [real1, real2, real3, real4, real5],
    // ✅ Hình ảnh thực tế - Phần này cố định không đổi xuyên suốt 6 trang
    //---
    // ✅ Kích thước thang máy - phần nãy cũng giữ nguyên ngoại trừ bảng chi tiết, dimensions đã làm - phần bên phải giữ nguyên qua 6 trang
    dimensions: [
      { people: "3–4 người", size: "800 – 830MM", weight: "250 – 300KG" },
      { people: "5–6 người", size: "1200 – 1000MM", weight: "350 – 450KG" },
      { people: "6–7 người", size: "1200 – 1597MM", weight: "500KG" },
    ],

    // ✅ Quy trình lắp đặt
    installationImage: install,
    installationSteps: [
      {
        stage: "Giai đoạn 01: Thiết kế và thi công hố thang máy",
        description:
          "Hố thang máy là một bộ phận quan trọng không thể thiếu trong hệ thống thang máy, cần được thiết kế và xây dựng đúng theo các tiêu chuẩn kỹ thuật nhằm đảm bảo an toàn cho người sử dụng. Thông thường, hố được cấu tạo từ bê tông cốt thép. Kích thước của hố thang máy sẽ thay đổi tùy theo loại thang được lắp đặt và số tầng của công trình.",
        steps: [], // không có bước nhỏ ở giai đoạn 01
      },
      {
        stage: "Giai đoạn 02: Lắp đặt thang máy gia đình",
        description:
          "Sau khi hoàn thiện thi công hố thang máy, các chuyên gia sẽ tiến hành lắp đặt thang máy theo các bước sau:",
        steps: [
          {
            stepTitle: "Bước 1: Lắp đặt cabin và đối trọng",
            stepContent:
              "Cabin và đối trọng là các thành phần chính yếu trong hệ thống thang. Cabin là nơi chứa người và hàng hóa...",
          },
          {
            stepTitle: "Bước 2: Lắp đặt hệ thống dẫn động",
            stepContent: "Hệ thống dẫn động gồm động cơ, dây cáp, thiết bị điều khiển, cáp tải và phanh...",
          },
          {
            stepTitle: "Bước 3: Lắp đặt hệ thống an toàn",
            stepContent:
              "Hệ thống an toàn đảm bảo thang máy vận hành an toàn, bao gồm bộ chống trượt, bộ giới hạn tốc độ...",
          },
          {
            stepTitle: "Bước 4: Lắp đặt cửa tầng",
            stepContent:
              "Cửa tầng là phần đóng mở để ra vào thang máy. Cửa tầng phải được lắp đặt đúng kích thước và tiêu chuẩn kỹ thuật.",
          },
          {
            stepTitle: "Bước 5: Lắp đặt trang trí",
            stepContent:
              "Sau khi lắp đặt xong các phần chính của thang máy, cần lắp đặt các trang trí như tay vịn, sàn cabin, đèn chiếu sáng...",
          },
        ],
      },
      {
        stage: "Giai đoạn 03: Kiểm tra và nghiệm thu thang máy",
        description:
          "Trước khi thang máy được đưa vào sử dụng, toàn bộ hệ thống cần được kiểm tra kỹ lưỡng nhằm đảm bảo hoạt động an toàn và hiệu quả. Khi quá trình kiểm tra đạt yêu cầu, thang máy sẽ được nghiệm thu chính thức và đưa vào vận hành. Việc thi công theo đúng quy trình và tiêu chuẩn kỹ thuật không chỉ giúp thang máy vận hành ổn định mà còn kéo dài tuổi thọ thiết bị. Đừng ngần ngại, hãy liên hệ ngay với JP TECHLIFT – chúng tôi sẵn sàng đồng hành và mang đến những giải pháp tối ưu nhất dành cho bạn.",
        steps: [], // không có bước nhỏ
      },
    ],

    // ✅ Bản vẽ chi tiết (thêm mô tả bên cạnh ảnh)
    blueprint: {
      image: blueprint,
      description: ["Mặt bên hố thang máy gia đình 4 điểm dừng", "Cấu hình hố thang tiêu chuẩn:"],
      specs: [
        "Trụ đứng: 120x120x4mm",
        "Đà đặt máy (4 mặt hố thang): 120x45x4mm",
        "Đà bắt rail – đà giằng trái phải – đà treo đỡ cửa: đồng bộ 120x45x4mm",
        "Cửa tầng: W800 x H1900mm",
        "Chiều cao cabin (H CAR): 1950mm",
        "Cửa cabin: Không có",
        "Cửa mở: Tự động, 1 cánh – dạng Auto Door (AD)",
        "Chiều cao tầng điển hình (OH): 3000mm",
        "Chiều sâu hố PIT: 1200mm",
        "Loại hố thang: Thép cắt laser, sơn tĩnh điện, ốp kính hoàn thiện",
      ],
      stops: "4 tầng (GF – 1F – 2F – 3F)",
      heightNote: "Chiều cao BH, AH: 1150mm",
    },

    // ✅ Thẩm mỹ nội thất cabin - phần này kiểu nó nên làm trang riêng hay cho hiện nổi lên(hiện tại chính trang productpage đó nhưng ô nhỏ hơn và có thể bấm thoát ra vẫn ở vị trí lúc bấm vào btn - lướt trang productpage bthg)??
    aestheticsOptions: {
      roofStyles: ["Trần kim loại", "Trần đèn LED", "Trần inox sọc", "Trần hoa văn"],
      handrails: ["Tay vịn inox tròn", "Tay gỗ", "Không tay vịn"],
      materials: ["Inox gương", "Inox sọc nhuyễn", "Gỗ công nghiệp", "Gỗ phủ laminate", "Tranh in UV", "Sơn tĩnh điện"],
    },

    // imagegallery - chức năng kho ảnh - phần này tớ định nối qua drive cho nhanh - khóa phần này lại để khách muốn thì mới làm
  },
  "freight-lift": {
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: heroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy chất lượng cao cho không gian sống hiện đại",

      // ảnh,... của 4 ô giữ nguyên qua 6 trang khác nhau
      // Bảng thông tin - Kích thước và giá lắp đặt - Quy trình lắp đặt - Hình ảnh thực tế - Bản vẽ kỹ thuật - 4 ô content giúp thao tác nhanh đến các phần trong product
      quickLinks: [
        { label: "Kích thước và giá", targetId: "size-price" },
        { label: "Quy trình lắp đặt", targetId: "installation" },
        { label: "Hình ảnh thực tế", targetId: "real-gallery" },
        { label: "Bản vẽ kỹ thuật", targetId: "blueprint" },
      ],
    },

    // ✅ Thông tin chi tiết sản phẩm
    detailInfo: {
      title: "Thang Máy Gia Đình",
      introductionLine1: "Thang máy gia đình JPTechLift là lựa chọn lý tưởng cho cả công trình xây mới và cải tạo. ",
      introductionLine2:
        "Được thiết kế và lắp đặt tại Việt Nam, sản phẩm mang đến sự linh hoạt về tải trọng, phù hợp với đa dạng nhu cầu sử dụng trong gia đình hiện đại.",
      productLine: "Dòng sản phẩm: Thang máy gia đình JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng tiên tiến",
      load: "320–450kg",
      speed: "20–60 mét/phút",
      size: "1200x1000mm, 1200x900mm",
      pitDepth: "350–400mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [gallery1, gallery1, gallery1],
    realGalleryImages: [real1, real2, real3, real4, real5],
    // ✅ Hình ảnh thực tế - Phần này cố định không đổi xuyên suốt 6 trang
    //---
    // ✅ Kích thước thang máy - phần nãy cũng giữ nguyên ngoại trừ bảng chi tiết, dimensions đã làm - phần bên phải giữ nguyên qua 6 trang
    dimensions: [
      { people: "3–4 người", size: "800 – 830MM", weight: "250 – 300KG" },
      { people: "5–6 người", size: "1200 – 1000MM", weight: "350 – 450KG" },
      { people: "6–7 người", size: "1200 – 1597MM", weight: "500KG" },
    ],

    // ✅ Quy trình lắp đặt
    installationImage: install,
    installationSteps: [
      {
        stage: "Giai đoạn 01: Thiết kế và thi công hố thang máy",
        description:
          "Hố thang máy là một bộ phận quan trọng không thể thiếu trong hệ thống thang máy, cần được thiết kế và xây dựng đúng theo các tiêu chuẩn kỹ thuật nhằm đảm bảo an toàn cho người sử dụng. Thông thường, hố được cấu tạo từ bê tông cốt thép. Kích thước của hố thang máy sẽ thay đổi tùy theo loại thang được lắp đặt và số tầng của công trình.",
        steps: [], // không có bước nhỏ ở giai đoạn 01
      },
      {
        stage: "Giai đoạn 02: Lắp đặt thang máy gia đình",
        description:
          "Sau khi hoàn thiện thi công hố thang máy, các chuyên gia sẽ tiến hành lắp đặt thang máy theo các bước sau:",
        steps: [
          {
            stepTitle: "Bước 1: Lắp đặt cabin và đối trọng",
            stepContent:
              "Cabin và đối trọng là các thành phần chính yếu trong hệ thống thang. Cabin là nơi chứa người và hàng hóa...",
          },
          {
            stepTitle: "Bước 2: Lắp đặt hệ thống dẫn động",
            stepContent: "Hệ thống dẫn động gồm động cơ, dây cáp, thiết bị điều khiển, cáp tải và phanh...",
          },
          {
            stepTitle: "Bước 3: Lắp đặt hệ thống an toàn",
            stepContent:
              "Hệ thống an toàn đảm bảo thang máy vận hành an toàn, bao gồm bộ chống trượt, bộ giới hạn tốc độ...",
          },
          {
            stepTitle: "Bước 4: Lắp đặt cửa tầng",
            stepContent:
              "Cửa tầng là phần đóng mở để ra vào thang máy. Cửa tầng phải được lắp đặt đúng kích thước và tiêu chuẩn kỹ thuật.",
          },
          {
            stepTitle: "Bước 5: Lắp đặt trang trí",
            stepContent:
              "Sau khi lắp đặt xong các phần chính của thang máy, cần lắp đặt các trang trí như tay vịn, sàn cabin, đèn chiếu sáng...",
          },
        ],
      },
      {
        stage: "Giai đoạn 03: Kiểm tra và nghiệm thu thang máy",
        description:
          "Trước khi thang máy được đưa vào sử dụng, toàn bộ hệ thống cần được kiểm tra kỹ lưỡng nhằm đảm bảo hoạt động an toàn và hiệu quả. Khi quá trình kiểm tra đạt yêu cầu, thang máy sẽ được nghiệm thu chính thức và đưa vào vận hành. Việc thi công theo đúng quy trình và tiêu chuẩn kỹ thuật không chỉ giúp thang máy vận hành ổn định mà còn kéo dài tuổi thọ thiết bị. Đừng ngần ngại, hãy liên hệ ngay với JP TECHLIFT – chúng tôi sẵn sàng đồng hành và mang đến những giải pháp tối ưu nhất dành cho bạn.",
        steps: [], // không có bước nhỏ
      },
    ],

    // ✅ Bản vẽ chi tiết (thêm mô tả bên cạnh ảnh)
    blueprint: {
      image: blueprint,
      description: ["Mặt bên hố thang máy gia đình 4 điểm dừng", "Cấu hình hố thang tiêu chuẩn:"],
      specs: [
        "Trụ đứng: 120x120x4mm",
        "Đà đặt máy (4 mặt hố thang): 120x45x4mm",
        "Đà bắt rail – đà giằng trái phải – đà treo đỡ cửa: đồng bộ 120x45x4mm",
        "Cửa tầng: W800 x H1900mm",
        "Chiều cao cabin (H CAR): 1950mm",
        "Cửa cabin: Không có",
        "Cửa mở: Tự động, 1 cánh – dạng Auto Door (AD)",
        "Chiều cao tầng điển hình (OH): 3000mm",
        "Chiều sâu hố PIT: 1200mm",
        "Loại hố thang: Thép cắt laser, sơn tĩnh điện, ốp kính hoàn thiện",
      ],
      stops: "4 tầng (GF – 1F – 2F – 3F)",
      heightNote: "Chiều cao BH, AH: 1150mm",
    },

    // ✅ Thẩm mỹ nội thất cabin - phần này kiểu nó nên làm trang riêng hay cho hiện nổi lên(hiện tại chính trang productpage đó nhưng ô nhỏ hơn và có thể bấm thoát ra vẫn ở vị trí lúc bấm vào btn - lướt trang productpage bthg)??
    aestheticsOptions: {
      roofStyles: ["Trần kim loại", "Trần đèn LED", "Trần inox sọc", "Trần hoa văn"],
      handrails: ["Tay vịn inox tròn", "Tay gỗ", "Không tay vịn"],
      materials: ["Inox gương", "Inox sọc nhuyễn", "Gỗ công nghiệp", "Gỗ phủ laminate", "Tranh in UV", "Sơn tĩnh điện"],
    },

    // imagegallery - chức năng kho ảnh - phần này tớ định nối qua drive cho nhanh - khóa phần này lại để khách muốn thì mới làm
  },
  "passenger-elevator": {
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: heroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy chất lượng cao cho không gian sống hiện đại",

      // ảnh,... của 4 ô giữ nguyên qua 6 trang khác nhau
      // Bảng thông tin - Kích thước và giá lắp đặt - Quy trình lắp đặt - Hình ảnh thực tế - Bản vẽ kỹ thuật - 4 ô content giúp thao tác nhanh đến các phần trong product
      quickLinks: [
        { label: "Kích thước và giá", targetId: "size-price" },
        { label: "Quy trình lắp đặt", targetId: "installation" },
        { label: "Hình ảnh thực tế", targetId: "real-gallery" },
        { label: "Bản vẽ kỹ thuật", targetId: "blueprint" },
      ],
    },

    // ✅ Thông tin chi tiết sản phẩm
    detailInfo: {
      title: "Thang Máy Gia Đình",
      introductionLine1: "Thang máy gia đình JPTechLift là lựa chọn lý tưởng cho cả công trình xây mới và cải tạo. ",
      introductionLine2:
        "Được thiết kế và lắp đặt tại Việt Nam, sản phẩm mang đến sự linh hoạt về tải trọng, phù hợp với đa dạng nhu cầu sử dụng trong gia đình hiện đại.",
      productLine: "Dòng sản phẩm: Thang máy gia đình JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng tiên tiến",
      load: "320–450kg",
      speed: "20–60 mét/phút",
      size: "1200x1000mm, 1200x900mm",
      pitDepth: "350–400mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [gallery1, gallery1, gallery1],
    realGalleryImages: [real1, real2, real3, real4, real5],
    // ✅ Hình ảnh thực tế - Phần này cố định không đổi xuyên suốt 6 trang
    //---
    // ✅ Kích thước thang máy - phần nãy cũng giữ nguyên ngoại trừ bảng chi tiết, dimensions đã làm - phần bên phải giữ nguyên qua 6 trang
    dimensions: [
      { people: "3–4 người", size: "800 – 830MM", weight: "250 – 300KG" },
      { people: "5–6 người", size: "1200 – 1000MM", weight: "350 – 450KG" },
      { people: "6–7 người", size: "1200 – 1597MM", weight: "500KG" },
    ],

    // ✅ Quy trình lắp đặt
    installationImage: install,
    installationSteps: [
      {
        stage: "Giai đoạn 01: Thiết kế và thi công hố thang máy",
        description:
          "Hố thang máy là một bộ phận quan trọng không thể thiếu trong hệ thống thang máy, cần được thiết kế và xây dựng đúng theo các tiêu chuẩn kỹ thuật nhằm đảm bảo an toàn cho người sử dụng. Thông thường, hố được cấu tạo từ bê tông cốt thép. Kích thước của hố thang máy sẽ thay đổi tùy theo loại thang được lắp đặt và số tầng của công trình.",
        steps: [], // không có bước nhỏ ở giai đoạn 01
      },
      {
        stage: "Giai đoạn 02: Lắp đặt thang máy gia đình",
        description:
          "Sau khi hoàn thiện thi công hố thang máy, các chuyên gia sẽ tiến hành lắp đặt thang máy theo các bước sau:",
        steps: [
          {
            stepTitle: "Bước 1: Lắp đặt cabin và đối trọng",
            stepContent:
              "Cabin và đối trọng là các thành phần chính yếu trong hệ thống thang. Cabin là nơi chứa người và hàng hóa...",
          },
          {
            stepTitle: "Bước 2: Lắp đặt hệ thống dẫn động",
            stepContent: "Hệ thống dẫn động gồm động cơ, dây cáp, thiết bị điều khiển, cáp tải và phanh...",
          },
          {
            stepTitle: "Bước 3: Lắp đặt hệ thống an toàn",
            stepContent:
              "Hệ thống an toàn đảm bảo thang máy vận hành an toàn, bao gồm bộ chống trượt, bộ giới hạn tốc độ...",
          },
          {
            stepTitle: "Bước 4: Lắp đặt cửa tầng",
            stepContent:
              "Cửa tầng là phần đóng mở để ra vào thang máy. Cửa tầng phải được lắp đặt đúng kích thước và tiêu chuẩn kỹ thuật.",
          },
          {
            stepTitle: "Bước 5: Lắp đặt trang trí",
            stepContent:
              "Sau khi lắp đặt xong các phần chính của thang máy, cần lắp đặt các trang trí như tay vịn, sàn cabin, đèn chiếu sáng...",
          },
        ],
      },
      {
        stage: "Giai đoạn 03: Kiểm tra và nghiệm thu thang máy",
        description:
          "Trước khi thang máy được đưa vào sử dụng, toàn bộ hệ thống cần được kiểm tra kỹ lưỡng nhằm đảm bảo hoạt động an toàn và hiệu quả. Khi quá trình kiểm tra đạt yêu cầu, thang máy sẽ được nghiệm thu chính thức và đưa vào vận hành. Việc thi công theo đúng quy trình và tiêu chuẩn kỹ thuật không chỉ giúp thang máy vận hành ổn định mà còn kéo dài tuổi thọ thiết bị. Đừng ngần ngại, hãy liên hệ ngay với JP TECHLIFT – chúng tôi sẵn sàng đồng hành và mang đến những giải pháp tối ưu nhất dành cho bạn.",
        steps: [], // không có bước nhỏ
      },
    ],

    // ✅ Bản vẽ chi tiết (thêm mô tả bên cạnh ảnh)
    blueprint: {
      image: blueprint,
      description: ["Mặt bên hố thang máy gia đình 4 điểm dừng", "Cấu hình hố thang tiêu chuẩn:"],
      specs: [
        "Trụ đứng: 120x120x4mm",
        "Đà đặt máy (4 mặt hố thang): 120x45x4mm",
        "Đà bắt rail – đà giằng trái phải – đà treo đỡ cửa: đồng bộ 120x45x4mm",
        "Cửa tầng: W800 x H1900mm",
        "Chiều cao cabin (H CAR): 1950mm",
        "Cửa cabin: Không có",
        "Cửa mở: Tự động, 1 cánh – dạng Auto Door (AD)",
        "Chiều cao tầng điển hình (OH): 3000mm",
        "Chiều sâu hố PIT: 1200mm",
        "Loại hố thang: Thép cắt laser, sơn tĩnh điện, ốp kính hoàn thiện",
      ],
      stops: "4 tầng (GF – 1F – 2F – 3F)",
      heightNote: "Chiều cao BH, AH: 1150mm",
    },

    // ✅ Thẩm mỹ nội thất cabin - phần này kiểu nó nên làm trang riêng hay cho hiện nổi lên(hiện tại chính trang productpage đó nhưng ô nhỏ hơn và có thể bấm thoát ra vẫn ở vị trí lúc bấm vào btn - lướt trang productpage bthg)??
    aestheticsOptions: {
      roofStyles: ["Trần kim loại", "Trần đèn LED", "Trần inox sọc", "Trần hoa văn"],
      handrails: ["Tay vịn inox tròn", "Tay gỗ", "Không tay vịn"],
      materials: ["Inox gương", "Inox sọc nhuyễn", "Gỗ công nghiệp", "Gỗ phủ laminate", "Tranh in UV", "Sơn tĩnh điện"],
    },

    // imagegallery - chức năng kho ảnh - phần này tớ định nối qua drive cho nhanh - khóa phần này lại để khách muốn thì mới làm
  },
  "food-lift": {
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: heroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy chất lượng cao cho không gian sống hiện đại",

      // ảnh,... của 4 ô giữ nguyên qua 6 trang khác nhau
      // Bảng thông tin - Kích thước và giá lắp đặt - Quy trình lắp đặt - Hình ảnh thực tế - Bản vẽ kỹ thuật - 4 ô content giúp thao tác nhanh đến các phần trong product
      quickLinks: [
        { label: "Kích thước và giá", targetId: "size-price" },
        { label: "Quy trình lắp đặt", targetId: "installation" },
        { label: "Hình ảnh thực tế", targetId: "real-gallery" },
        { label: "Bản vẽ kỹ thuật", targetId: "blueprint" },
      ],
    },

    // ✅ Thông tin chi tiết sản phẩm
    detailInfo: {
      title: "Thang Máy Gia Đình",
      introductionLine1: "Thang máy gia đình JPTechLift là lựa chọn lý tưởng cho cả công trình xây mới và cải tạo. ",
      introductionLine2:
        "Được thiết kế và lắp đặt tại Việt Nam, sản phẩm mang đến sự linh hoạt về tải trọng, phù hợp với đa dạng nhu cầu sử dụng trong gia đình hiện đại.",
      productLine: "Dòng sản phẩm: Thang máy gia đình JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng tiên tiến",
      load: "320–450kg",
      speed: "20–60 mét/phút",
      size: "1200x1000mm, 1200x900mm",
      pitDepth: "350–400mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [gallery1, gallery1, gallery1],
    realGalleryImages: [real1, real2, real3, real4, real5],
    // ✅ Hình ảnh thực tế - Phần này cố định không đổi xuyên suốt 6 trang
    //---
    // ✅ Kích thước thang máy - phần nãy cũng giữ nguyên ngoại trừ bảng chi tiết, dimensions đã làm - phần bên phải giữ nguyên qua 6 trang
    dimensions: [
      { people: "3–4 người", size: "800 – 830MM", weight: "250 – 300KG" },
      { people: "5–6 người", size: "1200 – 1000MM", weight: "350 – 450KG" },
      { people: "6–7 người", size: "1200 – 1597MM", weight: "500KG" },
    ],

    // ✅ Quy trình lắp đặt
    installationImage: install,
    installationSteps: [
      {
        stage: "Giai đoạn 01: Thiết kế và thi công hố thang máy",
        description:
          "Hố thang máy là một bộ phận quan trọng không thể thiếu trong hệ thống thang máy, cần được thiết kế và xây dựng đúng theo các tiêu chuẩn kỹ thuật nhằm đảm bảo an toàn cho người sử dụng. Thông thường, hố được cấu tạo từ bê tông cốt thép. Kích thước của hố thang máy sẽ thay đổi tùy theo loại thang được lắp đặt và số tầng của công trình.",
        steps: [], // không có bước nhỏ ở giai đoạn 01
      },
      {
        stage: "Giai đoạn 02: Lắp đặt thang máy gia đình",
        description:
          "Sau khi hoàn thiện thi công hố thang máy, các chuyên gia sẽ tiến hành lắp đặt thang máy theo các bước sau:",
        steps: [
          {
            stepTitle: "Bước 1: Lắp đặt cabin và đối trọng",
            stepContent:
              "Cabin và đối trọng là các thành phần chính yếu trong hệ thống thang. Cabin là nơi chứa người và hàng hóa...",
          },
          {
            stepTitle: "Bước 2: Lắp đặt hệ thống dẫn động",
            stepContent: "Hệ thống dẫn động gồm động cơ, dây cáp, thiết bị điều khiển, cáp tải và phanh...",
          },
          {
            stepTitle: "Bước 3: Lắp đặt hệ thống an toàn",
            stepContent:
              "Hệ thống an toàn đảm bảo thang máy vận hành an toàn, bao gồm bộ chống trượt, bộ giới hạn tốc độ...",
          },
          {
            stepTitle: "Bước 4: Lắp đặt cửa tầng",
            stepContent:
              "Cửa tầng là phần đóng mở để ra vào thang máy. Cửa tầng phải được lắp đặt đúng kích thước và tiêu chuẩn kỹ thuật.",
          },
          {
            stepTitle: "Bước 5: Lắp đặt trang trí",
            stepContent:
              "Sau khi lắp đặt xong các phần chính của thang máy, cần lắp đặt các trang trí như tay vịn, sàn cabin, đèn chiếu sáng...",
          },
        ],
      },
      {
        stage: "Giai đoạn 03: Kiểm tra và nghiệm thu thang máy",
        description:
          "Trước khi thang máy được đưa vào sử dụng, toàn bộ hệ thống cần được kiểm tra kỹ lưỡng nhằm đảm bảo hoạt động an toàn và hiệu quả. Khi quá trình kiểm tra đạt yêu cầu, thang máy sẽ được nghiệm thu chính thức và đưa vào vận hành. Việc thi công theo đúng quy trình và tiêu chuẩn kỹ thuật không chỉ giúp thang máy vận hành ổn định mà còn kéo dài tuổi thọ thiết bị. Đừng ngần ngại, hãy liên hệ ngay với JP TECHLIFT – chúng tôi sẵn sàng đồng hành và mang đến những giải pháp tối ưu nhất dành cho bạn.",
        steps: [], // không có bước nhỏ
      },
    ],

    // ✅ Bản vẽ chi tiết (thêm mô tả bên cạnh ảnh)
    blueprint: {
      image: blueprint,
      description: ["Mặt bên hố thang máy gia đình 4 điểm dừng", "Cấu hình hố thang tiêu chuẩn:"],
      specs: [
        "Trụ đứng: 120x120x4mm",
        "Đà đặt máy (4 mặt hố thang): 120x45x4mm",
        "Đà bắt rail – đà giằng trái phải – đà treo đỡ cửa: đồng bộ 120x45x4mm",
        "Cửa tầng: W800 x H1900mm",
        "Chiều cao cabin (H CAR): 1950mm",
        "Cửa cabin: Không có",
        "Cửa mở: Tự động, 1 cánh – dạng Auto Door (AD)",
        "Chiều cao tầng điển hình (OH): 3000mm",
        "Chiều sâu hố PIT: 1200mm",
        "Loại hố thang: Thép cắt laser, sơn tĩnh điện, ốp kính hoàn thiện",
      ],
      stops: "4 tầng (GF – 1F – 2F – 3F)",
      heightNote: "Chiều cao BH, AH: 1150mm",
    },

    // ✅ Thẩm mỹ nội thất cabin - phần này kiểu nó nên làm trang riêng hay cho hiện nổi lên(hiện tại chính trang productpage đó nhưng ô nhỏ hơn và có thể bấm thoát ra vẫn ở vị trí lúc bấm vào btn - lướt trang productpage bthg)??
    aestheticsOptions: {
      roofStyles: ["Trần kim loại", "Trần đèn LED", "Trần inox sọc", "Trần hoa văn"],
      handrails: ["Tay vịn inox tròn", "Tay gỗ", "Không tay vịn"],
      materials: ["Inox gương", "Inox sọc nhuyễn", "Gỗ công nghiệp", "Gỗ phủ laminate", "Tranh in UV", "Sơn tĩnh điện"],
    },

    // imagegallery - chức năng kho ảnh - phần này tớ định nối qua drive cho nhanh - khóa phần này lại để khách muốn thì mới làm
  },
  "hospital-lift": {
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: heroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy chất lượng cao cho không gian sống hiện đại",

      // ảnh,... của 4 ô giữ nguyên qua 6 trang khác nhau
      // Bảng thông tin - Kích thước và giá lắp đặt - Quy trình lắp đặt - Hình ảnh thực tế - Bản vẽ kỹ thuật - 4 ô content giúp thao tác nhanh đến các phần trong product
      quickLinks: [
        { label: "Kích thước và giá", targetId: "size-price" },
        { label: "Quy trình lắp đặt", targetId: "installation" },
        { label: "Hình ảnh thực tế", targetId: "real-gallery" },
        { label: "Bản vẽ kỹ thuật", targetId: "blueprint" },
      ],
    },

    // ✅ Thông tin chi tiết sản phẩm
    detailInfo: {
      title: "Thang Máy Gia Đình",
      introductionLine1: "Thang máy gia đình JPTechLift là lựa chọn lý tưởng cho cả công trình xây mới và cải tạo. ",
      introductionLine2:
        "Được thiết kế và lắp đặt tại Việt Nam, sản phẩm mang đến sự linh hoạt về tải trọng, phù hợp với đa dạng nhu cầu sử dụng trong gia đình hiện đại.",
      productLine: "Dòng sản phẩm: Thang máy gia đình JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng tiên tiến",
      load: "320–450kg",
      speed: "20–60 mét/phút",
      size: "1200x1000mm, 1200x900mm",
      pitDepth: "350–400mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [gallery1, gallery1, gallery1],
    realGalleryImages: [real1, real2, real3, real4, real5],
    // ✅ Hình ảnh thực tế - Phần này cố định không đổi xuyên suốt 6 trang
    //---
    // ✅ Kích thước thang máy - phần nãy cũng giữ nguyên ngoại trừ bảng chi tiết, dimensions đã làm - phần bên phải giữ nguyên qua 6 trang
    dimensions: [
      { people: "3–4 người", size: "800 – 830MM", weight: "250 – 300KG" },
      { people: "5–6 người", size: "1200 – 1000MM", weight: "350 – 450KG" },
      { people: "6–7 người", size: "1200 – 1597MM", weight: "500KG" },
    ],

    // ✅ Quy trình lắp đặt
    installationImage: install,
    installationSteps: [
      {
        stage: "Giai đoạn 01: Thiết kế và thi công hố thang máy",
        description:
          "Hố thang máy là một bộ phận quan trọng không thể thiếu trong hệ thống thang máy, cần được thiết kế và xây dựng đúng theo các tiêu chuẩn kỹ thuật nhằm đảm bảo an toàn cho người sử dụng. Thông thường, hố được cấu tạo từ bê tông cốt thép. Kích thước của hố thang máy sẽ thay đổi tùy theo loại thang được lắp đặt và số tầng của công trình.",
        steps: [], // không có bước nhỏ ở giai đoạn 01
      },
      {
        stage: "Giai đoạn 02: Lắp đặt thang máy gia đình",
        description:
          "Sau khi hoàn thiện thi công hố thang máy, các chuyên gia sẽ tiến hành lắp đặt thang máy theo các bước sau:",
        steps: [
          {
            stepTitle: "Bước 1: Lắp đặt cabin và đối trọng",
            stepContent:
              "Cabin và đối trọng là các thành phần chính yếu trong hệ thống thang. Cabin là nơi chứa người và hàng hóa...",
          },
          {
            stepTitle: "Bước 2: Lắp đặt hệ thống dẫn động",
            stepContent: "Hệ thống dẫn động gồm động cơ, dây cáp, thiết bị điều khiển, cáp tải và phanh...",
          },
          {
            stepTitle: "Bước 3: Lắp đặt hệ thống an toàn",
            stepContent:
              "Hệ thống an toàn đảm bảo thang máy vận hành an toàn, bao gồm bộ chống trượt, bộ giới hạn tốc độ...",
          },
          {
            stepTitle: "Bước 4: Lắp đặt cửa tầng",
            stepContent:
              "Cửa tầng là phần đóng mở để ra vào thang máy. Cửa tầng phải được lắp đặt đúng kích thước và tiêu chuẩn kỹ thuật.",
          },
          {
            stepTitle: "Bước 5: Lắp đặt trang trí",
            stepContent:
              "Sau khi lắp đặt xong các phần chính của thang máy, cần lắp đặt các trang trí như tay vịn, sàn cabin, đèn chiếu sáng...",
          },
        ],
      },
      {
        stage: "Giai đoạn 03: Kiểm tra và nghiệm thu thang máy",
        description:
          "Trước khi thang máy được đưa vào sử dụng, toàn bộ hệ thống cần được kiểm tra kỹ lưỡng nhằm đảm bảo hoạt động an toàn và hiệu quả. Khi quá trình kiểm tra đạt yêu cầu, thang máy sẽ được nghiệm thu chính thức và đưa vào vận hành. Việc thi công theo đúng quy trình và tiêu chuẩn kỹ thuật không chỉ giúp thang máy vận hành ổn định mà còn kéo dài tuổi thọ thiết bị. Đừng ngần ngại, hãy liên hệ ngay với JP TECHLIFT – chúng tôi sẵn sàng đồng hành và mang đến những giải pháp tối ưu nhất dành cho bạn.",
        steps: [], // không có bước nhỏ
      },
    ],

    // ✅ Bản vẽ chi tiết (thêm mô tả bên cạnh ảnh)
    blueprint: {
      image: blueprint,
      description: ["Mặt bên hố thang máy gia đình 4 điểm dừng", "Cấu hình hố thang tiêu chuẩn:"],
      specs: [
        "Trụ đứng: 120x120x4mm",
        "Đà đặt máy (4 mặt hố thang): 120x45x4mm",
        "Đà bắt rail – đà giằng trái phải – đà treo đỡ cửa: đồng bộ 120x45x4mm",
        "Cửa tầng: W800 x H1900mm",
        "Chiều cao cabin (H CAR): 1950mm",
        "Cửa cabin: Không có",
        "Cửa mở: Tự động, 1 cánh – dạng Auto Door (AD)",
        "Chiều cao tầng điển hình (OH): 3000mm",
        "Chiều sâu hố PIT: 1200mm",
        "Loại hố thang: Thép cắt laser, sơn tĩnh điện, ốp kính hoàn thiện",
      ],
      stops: "4 tầng (GF – 1F – 2F – 3F)",
      heightNote: "Chiều cao BH, AH: 1150mm",
    },

    // ✅ Thẩm mỹ nội thất cabin - phần này kiểu nó nên làm trang riêng hay cho hiện nổi lên(hiện tại chính trang productpage đó nhưng ô nhỏ hơn và có thể bấm thoát ra vẫn ở vị trí lúc bấm vào btn - lướt trang productpage bthg)??
    aestheticsOptions: {
      roofStyles: ["Trần kim loại", "Trần đèn LED", "Trần inox sọc", "Trần hoa văn"],
      handrails: ["Tay vịn inox tròn", "Tay gỗ", "Không tay vịn"],
      materials: ["Inox gương", "Inox sọc nhuyễn", "Gỗ công nghiệp", "Gỗ phủ laminate", "Tranh in UV", "Sơn tĩnh điện"],
    },

    // imagegallery - chức năng kho ảnh - phần này tớ định nối qua drive cho nhanh - khóa phần này lại để khách muốn thì mới làm
  },
  escalator: {
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: heroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy chất lượng cao cho không gian sống hiện đại",

      // ảnh,... của 4 ô giữ nguyên qua 6 trang khác nhau
      // Bảng thông tin - Kích thước và giá lắp đặt - Quy trình lắp đặt - Hình ảnh thực tế - Bản vẽ kỹ thuật - 4 ô content giúp thao tác nhanh đến các phần trong product
      quickLinks: [
        { label: "Kích thước và giá", targetId: "size-price" },
        { label: "Quy trình lắp đặt", targetId: "installation" },
        { label: "Hình ảnh thực tế", targetId: "real-gallery" },
        { label: "Bản vẽ kỹ thuật", targetId: "blueprint" },
      ],
    },

    // ✅ Thông tin chi tiết sản phẩm
    detailInfo: {
      title: "Thang Máy Gia Đình",
      introductionLine1: "Thang máy gia đình JPTechLift là lựa chọn lý tưởng cho cả công trình xây mới và cải tạo. ",
      introductionLine2:
        "Được thiết kế và lắp đặt tại Việt Nam, sản phẩm mang đến sự linh hoạt về tải trọng, phù hợp với đa dạng nhu cầu sử dụng trong gia đình hiện đại.",
      productLine: "Dòng sản phẩm: Thang máy gia đình JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng tiên tiến",
      load: "320–450kg",
      speed: "20–60 mét/phút",
      size: "1200x1000mm, 1200x900mm",
      pitDepth: "350–400mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [gallery1, gallery1, gallery1],
    realGalleryImages: [real1, real2, real3, real4, real5],
    // ✅ Hình ảnh thực tế - Phần này cố định không đổi xuyên suốt 6 trang
    //---
    // ✅ Kích thước thang máy - phần nãy cũng giữ nguyên ngoại trừ bảng chi tiết, dimensions đã làm - phần bên phải giữ nguyên qua 6 trang
    dimensions: [
      { people: "3–4 người", size: "800 – 830MM", weight: "250 – 300KG" },
      { people: "5–6 người", size: "1200 – 1000MM", weight: "350 – 450KG" },
      { people: "6–7 người", size: "1200 – 1597MM", weight: "500KG" },
    ],

    // ✅ Quy trình lắp đặt
    installationImage: install,
    installationSteps: [
      {
        stage: "Giai đoạn 01: Thiết kế và thi công hố thang máy",
        description:
          "Hố thang máy là một bộ phận quan trọng không thể thiếu trong hệ thống thang máy, cần được thiết kế và xây dựng đúng theo các tiêu chuẩn kỹ thuật nhằm đảm bảo an toàn cho người sử dụng. Thông thường, hố được cấu tạo từ bê tông cốt thép. Kích thước của hố thang máy sẽ thay đổi tùy theo loại thang được lắp đặt và số tầng của công trình.",
        steps: [], // không có bước nhỏ ở giai đoạn 01
      },
      {
        stage: "Giai đoạn 02: Lắp đặt thang máy gia đình",
        description:
          "Sau khi hoàn thiện thi công hố thang máy, các chuyên gia sẽ tiến hành lắp đặt thang máy theo các bước sau:",
        steps: [
          {
            stepTitle: "Bước 1: Lắp đặt cabin và đối trọng",
            stepContent:
              "Cabin và đối trọng là các thành phần chính yếu trong hệ thống thang. Cabin là nơi chứa người và hàng hóa...",
          },
          {
            stepTitle: "Bước 2: Lắp đặt hệ thống dẫn động",
            stepContent: "Hệ thống dẫn động gồm động cơ, dây cáp, thiết bị điều khiển, cáp tải và phanh...",
          },
          {
            stepTitle: "Bước 3: Lắp đặt hệ thống an toàn",
            stepContent:
              "Hệ thống an toàn đảm bảo thang máy vận hành an toàn, bao gồm bộ chống trượt, bộ giới hạn tốc độ...",
          },
          {
            stepTitle: "Bước 4: Lắp đặt cửa tầng",
            stepContent:
              "Cửa tầng là phần đóng mở để ra vào thang máy. Cửa tầng phải được lắp đặt đúng kích thước và tiêu chuẩn kỹ thuật.",
          },
          {
            stepTitle: "Bước 5: Lắp đặt trang trí",
            stepContent:
              "Sau khi lắp đặt xong các phần chính của thang máy, cần lắp đặt các trang trí như tay vịn, sàn cabin, đèn chiếu sáng...",
          },
        ],
      },
      {
        stage: "Giai đoạn 03: Kiểm tra và nghiệm thu thang máy",
        description:
          "Trước khi thang máy được đưa vào sử dụng, toàn bộ hệ thống cần được kiểm tra kỹ lưỡng nhằm đảm bảo hoạt động an toàn và hiệu quả. Khi quá trình kiểm tra đạt yêu cầu, thang máy sẽ được nghiệm thu chính thức và đưa vào vận hành. Việc thi công theo đúng quy trình và tiêu chuẩn kỹ thuật không chỉ giúp thang máy vận hành ổn định mà còn kéo dài tuổi thọ thiết bị. Đừng ngần ngại, hãy liên hệ ngay với JP TECHLIFT – chúng tôi sẵn sàng đồng hành và mang đến những giải pháp tối ưu nhất dành cho bạn.",
        steps: [], // không có bước nhỏ
      },
    ],

    // ✅ Bản vẽ chi tiết (thêm mô tả bên cạnh ảnh)
    blueprint: {
      image: blueprint,
      description: ["Mặt bên hố thang máy gia đình 4 điểm dừng", "Cấu hình hố thang tiêu chuẩn:"],
      specs: [
        "Trụ đứng: 120x120x4mm",
        "Đà đặt máy (4 mặt hố thang): 120x45x4mm",
        "Đà bắt rail – đà giằng trái phải – đà treo đỡ cửa: đồng bộ 120x45x4mm",
        "Cửa tầng: W800 x H1900mm",
        "Chiều cao cabin (H CAR): 1950mm",
        "Cửa cabin: Không có",
        "Cửa mở: Tự động, 1 cánh – dạng Auto Door (AD)",
        "Chiều cao tầng điển hình (OH): 3000mm",
        "Chiều sâu hố PIT: 1200mm",
        "Loại hố thang: Thép cắt laser, sơn tĩnh điện, ốp kính hoàn thiện",
      ],
      stops: "4 tầng (GF – 1F – 2F – 3F)",
      heightNote: "Chiều cao BH, AH: 1150mm",
    },

    // ✅ Thẩm mỹ nội thất cabin - phần này kiểu nó nên làm trang riêng hay cho hiện nổi lên(hiện tại chính trang productpage đó nhưng ô nhỏ hơn và có thể bấm thoát ra vẫn ở vị trí lúc bấm vào btn - lướt trang productpage bthg)??
    aestheticsOptions: {
      roofStyles: ["Trần kim loại", "Trần đèn LED", "Trần inox sọc", "Trần hoa văn"],
      handrails: ["Tay vịn inox tròn", "Tay gỗ", "Không tay vịn"],
      materials: ["Inox gương", "Inox sọc nhuyễn", "Gỗ công nghiệp", "Gỗ phủ laminate", "Tranh in UV", "Sơn tĩnh điện"],
    },

    // imagegallery - chức năng kho ảnh - phần này tớ định nối qua drive cho nhanh - khóa phần này lại để khách muốn thì mới làm
  },
} as const;

// ✅ Dòng này giúp TypeScript hiểu rõ key
export type ProductId = keyof typeof productData;

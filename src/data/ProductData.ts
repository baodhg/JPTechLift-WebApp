import homeLiftHeroImg from "../assets/images/productPage_img/home_lift/hero.png";
import passengerLiftHeroImg from "../assets/images/productPage_img/passenger_elevator/hero1.png";
import escalatorHeroImg from "../assets/images/productPage_img/escalator&moving_walkway/hero3.png";
import freightHeroImg from "../assets/images/productPage_img/freight_elevator/hero4.png";
import dHeroImg from "../assets/images/productPage_img/dumbwaiter/hero5.png";
import hospitalHeroImg from "../assets/images/productPage_img/hospital _elevator/hero6.png";
import panaramicHeroImg from "../assets/images/productPage_img/panoramic_elevator/hero7.png";
import real1 from "../assets/images/productPage_img/home_lift/real1.png";
import real2 from "../assets/images/productPage_img/home_lift/real2.png";
import real3 from "../assets/images/productPage_img/home_lift/real3.png";
import real4 from "../assets/images/productPage_img/home_lift/real4.png";
import homelift_carousel1 from "../assets/images/productPage_img/home_lift/homepage_carousel1.png";
import homelift_carousel2 from "../assets/images/productPage_img/home_lift/homepage_carousel2.png";
import homelift_carousel3 from "../assets/images/productPage_img/home_lift/homepage_carousel3.png";
import passenger_carousel1 from "../assets/images/productPage_img/passenger_elevator/passenger_carousel1.png";
import passenger_carousel2 from "../assets/images/productPage_img/passenger_elevator/passenger_carousel2.jpg";
import passenger_carousel3 from "../assets/images/productPage_img/passenger_elevator/passenger_carousel3.png";
import es_carousel1 from "../assets/images/productPage_img/escalator&moving_walkway/esc_carousel1.png";
import es_carousel2 from "../assets/images/productPage_img/escalator&moving_walkway/esc_carousel2.png";
import es_carousel3 from "../assets/images/productPage_img/escalator&moving_walkway/esc_carousel3.png";
import fr_carousel1 from "../assets/images/productPage_img/freight_elevator/freight_carousel1.png";
import fr_carousel2 from "../assets/images/productPage_img/freight_elevator/freight_carousel2.png";
import fr_carousel3 from "../assets/images/productPage_img/freight_elevator/freight_carousel3.png";
import d_carousel1 from "../assets/images/productPage_img/dumbwaiter/d_carousel1.png";
import d_carousel2 from "../assets/images/productPage_img/dumbwaiter/d_carousel2.png";
import d_carousel3 from "../assets/images/productPage_img/dumbwaiter/d_carousel3.png";
import h_carousel1 from "../assets/images/productPage_img/hospital _elevator/hospital_carousel1.png";
import h_carousel2 from "../assets/images/productPage_img/hospital _elevator/hospital_carousel2.png";
import h_carousel3 from "../assets/images/productPage_img/hospital _elevator/hospital_carousel3.png";
import p_carousel1 from "../assets/images/productPage_img/panoramic_elevator/panoramic_carousel1.png";
import p_carousel2 from "../assets/images/productPage_img/panoramic_elevator/panoramic_carousel2.png";
import p_carousel3 from "../assets/images/productPage_img/panoramic_elevator/panoramic_carousel3.png";
import real5 from "../assets/images/productPage_img/home_lift/gallery_content_table.jpg";
import install from "../assets/images/productPage_img/home_lift/install_content_table.jpg";
import blueprint from "../assets/images/productPage_img/home_lift/blueprint1.png";

export interface Product {
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
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
  "thang-may-gia-dinh": {
    seo: {
      metaTitle: "Thang máy gia đình JP TechLift tiện nghi",
      metaDescription:
        "Thang máy gia đình JP TechLift thiết kế nhỏ gọn, vận hành êm ái, phù hợp nhà phố và biệt thự. Sản phẩm nhập khẩu linh kiện, lắp ráp trong nước, an toàn và bền bỉ.",
      keywords: ["thang máy gia đình", "thang máy mini", "thang máy không hố pit", "home lift", "JP TechLift"],
    },
    intro: {
      title: "Thang Máy Gia Đình",
      description:
        "JP TECHLIFT cung cấp các dòng thang máy mini, dòng thang máy không hố pit, thang máy không buồng máy, thang kính đúc sẵn giúp quá trình lắp đặt thang máy gia đình nhanh chóng.",
      introduction:
        "Thang máy gia đình hay còn gọi là thang máy mini hoặc thang máy cá nhân. Đây là loại thang máy được thiết kế riêng cho các tòa nhà dân cư như biệt thự, nhà phố hoặc căn hộ cao cấp. Không giống như thang máy thương mại, thang máy gia đình thường có kích thước nhỏ gọn, tải trọng nhẹ và thiết kế thẩm mỹ, hài hòa với không gian nội thất gia đình.",
      heroImage: homeLiftHeroImg,
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
    galleryImages: [homelift_carousel1, homelift_carousel2, homelift_carousel3],
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
  "thang-tai-hang": {
    seo: {
      metaTitle: "Thang chở hàng JP TechLift – tải trọng cao",
      metaDescription:
        "Thang chở hàng JP TechLift mang đến giải pháp vận chuyển hàng hóa nhanh chóng trong kho xưởng và nhà máy. Sản phẩm chịu tải lớn, vận hành ổn định, an toàn.",
      keywords: [
        "thang chở hàng",
        "thang máy chở hàng",
        "thang tải hàng công nghiệp",
        "thang máy kho xưởng",
        "JP TechLift freight elevator",
      ],
    },
    intro: {
      title: "Thang Tải Hàng",
      description:
        "JP TECHLIFT chuyên cung cấp thang chở hàng tải trọng lớn, vận hành ổn định cho kho xưởng và trung tâm logistics.",
      introduction:
        "Thang chở hàng JP TechLift đáp ứng nhu cầu vận chuyển hàng hóa tại kho xưởng và trung tâm thương mại. Tải trọng cao cùng cấu tạo chắc chắn đảm bảo vận hành bền bỉ, an toàn cho doanh nghiệp.",
      heroImage: freightHeroImg,
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
      introductionLine1: "Thang chở hàng JP TechLift được thiết kế tối ưu cho vận chuyển khối lượng lớn.",
      introductionLine2: "Phù hợp cho nhà kho, xưởng sản xuất và trung tâm phân phối.",
      productLine: "Dòng sản phẩm: Thang tải hàng JP TechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo hoặc thủy lực",
      load: "500–5000kg",
      speed: "15–30 mét/phút",
      size: "Tùy chỉnh theo dự án",
      pitDepth: "700–1200mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [fr_carousel1, fr_carousel2, fr_carousel3],
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
  "thang-may-hanh-khach": {
    seo: {
      metaTitle: "Thang máy hành khách JP TechLift sang trọng",
      metaDescription:
        "Thang máy hành khách JP TechLift thiết kế hiện đại, vận hành êm ái và an toàn. Phù hợp tòa nhà văn phòng và chung cư, mang lại trải nghiệm di chuyển tiện nghi.",
      keywords: [
        "thang máy hành khách",
        "thang máy tòa nhà",
        "thang máy chung cư",
        "thang máy JP TechLift",
        "elevator passenger",
      ],
    },
    intro: {
      title: "Thang Máy Hành Khách",
      description:
        "JP TECHLIFT cung cấp giải pháp thang máy hành khách hiện đại, hiệu suất cao, phù hợp nhiều công trình dân dụng và thương mại.",
      introduction:
        "Thang máy hành khách JP TechLift mang đến trải nghiệm di chuyển an toàn, êm ái. Thiết kế đa dạng tải trọng, tích hợp nhiều công nghệ tối ưu cho người dùng.",
      heroImage: passengerLiftHeroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Giải pháp vận chuyển hành khách hiệu quả, êm ái",

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
      title: "Thang Máy Hành Khách",
      introductionLine1: "Thang máy hành khách JP TechLift đáp ứng tiêu chuẩn an toàn cao.",
      introductionLine2: "Thiết kế sang trọng, vận hành êm ái cho trải nghiệm thoải mái.",
      productLine: "Dòng sản phẩm: Thang máy hành khách JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng",
      load: "450–1000kg",
      speed: "60–90 mét/phút",
      size: "1100x1400mm, 1600x1600mm",
      pitDepth: "1200–1500mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [passenger_carousel1, passenger_carousel2, passenger_carousel3],
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
  "thang-tai-thuc-pham": {
    seo: {
      metaTitle: "Thang thực phẩm JP TechLift nhỏ gọn",
      metaDescription:
        "Thang thực phẩm JP TechLift chuyên dụng cho nhà bếp, nhà hàng, khách sạn. Thiết kế nhỏ gọn, vận hành êm, giúp di chuyển thức ăn nhanh chóng và an toàn.",
      keywords: [
        "thang thực phẩm",
        "thang tời thức ăn",
        "food lift JP TechLift",
        "thang nâng nhà hàng",
        "thang chở thức ăn",
      ],
    },
    intro: {
      title: "Thang Thực Phẩm",
      description:
        "JP TECHLIFT cung cấp dòng thang thực phẩm chuyên dụng, thiết kế nhỏ gọn, dễ vệ sinh, đáp ứng tiêu chuẩn an toàn thực phẩm.",
      introduction:
        "Thang thực phẩm JP TechLift vận chuyển thực phẩm giữa các tầng nhanh chóng và sạch sẽ. Vỏ inox dễ vệ sinh, đảm bảo tiêu chuẩn an toàn cho nhà hàng, khách sạn.",
      heroImage: dHeroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Giải pháp vận chuyển thực phẩm chuyên nghiệp",

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
      title: "Thang Thực Phẩm",
      introductionLine1: "Thang thực phẩm JP TechLift vận hành êm và sạch sẽ.",
      introductionLine2: "Phù hợp nhà hàng, khách sạn, bệnh viện cần di chuyển thức ăn.",
      productLine: "Dòng sản phẩm: Thang thực phẩm JP TechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo",
      load: "50–300kg",
      speed: "15–25 mét/phút",
      size: "600x600mm, 800x800mm",
      pitDepth: "400–600mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [d_carousel1, d_carousel2, d_carousel3],
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
  "thang-may-benh-vien": {
    seo: {
      metaTitle: "Thang máy bệnh viện JP TechLift an toàn",
      metaDescription:
        "Thang máy bệnh viện JP TechLift tối ưu vận chuyển bệnh nhân và thiết bị y tế. Cabin rộng, khởi động êm, đảm bảo an toàn và đáp ứng tiêu chuẩn vệ sinh.",
      keywords: [
        "thang máy bệnh viện",
        "thang nâng y tế",
        "elevator stretcher",
        "JP TechLift hospital lift",
        "thang máy chuyên dụng bệnh viện",
      ],
    },
    intro: {
      title: "Thang Máy Bệnh Viện",
      description:
        "JP TECHLIFT phát triển thang máy bệnh viện chuyên dụng, phục vụ di chuyển bệnh nhân và thiết bị y tế một cách an toàn, êm ái.",
      introduction:
        "Thang máy bệnh viện JP TechLift đáp ứng yêu cầu an toàn và vệ sinh. Cabin rộng kèm thanh vịn, điều khiển chuẩn xác, hỗ trợ vận chuyển bệnh nhân nhanh chóng.",
      heroImage: hospitalHeroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Giải pháp vận chuyển bệnh nhân chuyên nghiệp",

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
      title: "Thang Máy Bệnh Viện",
      introductionLine1: "Thang máy bệnh viện JP TechLift chuyên dụng cho cáng bệnh.",
      introductionLine2: "Cơ cấu vận hành êm, cabin rộng rãi, đảm bảo vệ sinh.",
      productLine: "Dòng sản phẩm: Thang máy bệnh viện JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Cáp kéo, điều khiển VVVF",
      load: "1000–1600kg",
      speed: "30–60 mét/phút",
      size: "1400x2400mm, 1600x2500mm",
      pitDepth: "1500mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [h_carousel1, h_carousel2, h_carousel3],
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
  "thang-truot-thang-cuon": {
    seo: {
      metaTitle: "Thang cuốn JP TechLift – vận hành êm",
      metaDescription:
        "Thang cuốn JP TechLift ứng dụng cho trung tâm thương mại, nhà ga, sân bay. Động cơ bền bỉ, vận hành êm, thiết kế an toàn giúp di chuyển liên tục và hiệu quả.",
      keywords: [
        "thang cuốn",
        "escalator JP TechLift",
        "thang cuốn trung tâm thương mại",
        "thang cuốn bền bỉ",
        "giải pháp di chuyển liên tục",
      ],
    },
    intro: {
      title: "Thang Cuốn",
      description:
        "JP TECHLIFT cung cấp thang cuốn chất lượng cao với nhiều lựa chọn chiều cao và độ rộng, phù hợp trung tâm thương mại, nhà ga, sân bay.",
      introduction:
        "Thang cuốn JP TechLift di chuyển lượng người lớn. Nhiều tùy chọn độ nghiêng, chiều rộng bậc, phù hợp cho trung tâm thương mại và nhà ga, đảm bảo an toàn.",
      heroImage: escalatorHeroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Giải pháp thang cuốn cho không gian công cộng",

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
      title: "Thang Cuốn",
      introductionLine1: "Thang cuốn JP TechLift phù hợp cho các khu vực công cộng.",
      introductionLine2: "Thiết kế hiện đại, vận hành êm và an toàn.",
      productLine: "Dòng sản phẩm: Thang cuốn JPTechLift.",
      config: "Nhập khẩu linh kiện, lắp ráp trong nước",
      brand: "JPTechLift",
      operation: "Động cơ dẫn động xích",
      load: "Tải trọng hành khách: 4500 người/giờ",
      speed: "0.5 m/s",
      size: "Độ nghiêng 30°/35°, chiều rộng bậc 600–1000mm",
      pitDepth: "Tùy thiết kế",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [es_carousel1, es_carousel2, es_carousel3],
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
  "thang-may-quan-sat": {
    seo: {
      metaTitle: "Thang Máy Quan Sát JPTechLift – Sang trọng, êm ái, toàn cảnh",
      metaDescription:
        "JPTechLift cung cấp thang máy quan sát cao cấp với thiết kế kính toàn phần, vận hành êm ái, tăng trải nghiệm sang trọng cho khách sạn, trung tâm thương mại.",
      keywords: [
        "thang máy quan sát",
        "thang máy kính",
        "thang máy toàn cảnh",
        "thang máy lồng kính",
        "thang máy khách sạn",
        "thang máy trung tâm thương mại",
        "thang máy cao cấp JPTechLift",
      ],
    },
    intro: {
      title: "Thang Máy Quan Sát",
      description:
        "JP TECHLIFT cung cấp thang máy quan sát kính toàn phần, thiết kế sang trọng, vận hành êm ái – giúp nâng tầm trải nghiệm tại trung tâm thương mại, khách sạn, cao ốc hiện đại.",
      introduction:
        "Thang máy quan sát (thang máy lồng kính) là dòng thang máy sử dụng vật liệu kính trong suốt ở một hoặc nhiều mặt cabin, cho phép người dùng nhìn thấy toàn cảnh không gian bên ngoài trong quá trình di chuyển. Loại thang này thường được lắp đặt tại các công trình công cộng có kiến trúc mở như trung tâm thương mại, khách sạn, resort hoặc tòa nhà cao tầng nhằm tăng tính thẩm mỹ, tạo điểm nhấn không gian và nâng cao trải nghiệm người dùng.",
      heroImage: panaramicHeroImg,
    },

    // ✅ Content_table
    contentTable: {
      title: "Thang máy quan sát kính toàn cảnh cho công trình hiện đại",

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
      title: "Thang Máy Quan Sát",
      introductionLine1:
        "Thang máy quan sát JPTechLift là lựa chọn lý tưởng cho các công trình cần tính thẩm mỹ cao và trải nghiệm người dùng độc đáo.",
      introductionLine2:
        "Với thiết kế kính toàn phần hoặc bán phần, sản phẩm mang lại tầm nhìn rộng, phù hợp lắp đặt tại trung tâm thương mại, khách sạn, showroom hoặc tòa nhà cao tầng.",
      productLine: "Dòng sản phẩm: Thang máy quan sát lồng kính JPTechLift.",
      config: "Cabin kính, khung thép sơn tĩnh điện, nhập khẩu linh kiện",
      brand: "JPTechLift",
      operation: "Cáp kéo đối trọng hoặc thủy lực (tuỳ công trình)",
      load: "450–1000kg",
      speed: "30–90 mét/phút",
      size: "1400x1400mm, 1600x1600mm",
      pitDepth: "500–1500mm",
    },

    // ✅ carousel của phần thông tin chi tiết sản phẩm - hình bên trái
    galleryImages: [p_carousel1, p_carousel2, p_carousel3],
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
          "Sau khi hoàn thiện phần hố thang, đội ngũ kỹ sư sẽ tiến hành lắp đặt hệ thống thang máy quan sát theo tiêu chuẩn an toàn cao. Các bước bao gồm lắp khung cabin kính, hệ thống dẫn động, cửa tầng, và trang trí hoàn thiện. Do sử dụng nhiều vật liệu kính, việc thi công cần độ chính xác và kỹ thuật cao nhằm đảm bảo thẩm mỹ và an toàn trong vận hành.",
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
      description: [
        "Bản vẽ mặt bên hố thang máy quan sát với cabin kính 4 điểm dừng",
        "Cấu hình điển hình cho thang máy lồng kính khung thép sơn tĩnh điện, cabin bán lộ thiên",
      ],
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

import React from 'react';

const CaiTaoSuaChuaThangMay = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white text-[#4a4a4a] font-inter">
      {/* Header với breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 hidden">
        Trang chủ {'>'} Dịch vụ {'>'} Cải Tạo Sửa Chữa Thang Máy
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#041e42] mb-6 relative">
        Cải Tạo - Sửa Chữa Thang Máy
        <div className="flex justify-center mt-3">
        </div>
        <div className="w-16 h-[3px] bg-[#cba052] mx-auto mt-4"></div>
      </h1>

      {/* Mở đầu */}
      <div className="mb-10">
        <p className="leading-relaxed text-justify">
          Tuổi thọ trung bình của một chiếc thang máy thường kéo dài từ 20 đến 25 năm. Tuy nhiên, chỉ sau 7–10 năm vận hành liên tục, các linh kiện có thể bắt đầu xuống cấp. Quý khách có thể nhận thấy các dấu hiệu như tiếng ồn lớn, thang rung giật khi khởi động, cửa đóng mở chậm hoặc sai lệch tầng dừng... Khi đó, việc cải tạo và sửa chữa là rất cần thiết. <strong>JP TechLift</strong> sẵn sàng đề xuất những giải pháp phù hợp, giúp khắc phục hiệu quả tình trạng hiện tại của thang máy.
        </p>
      </div>

      {/* Sự cần thiết của việc cải tạo và sửa chữa thang máy */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#041e42] mb-4">
          Vì sao cần cải tạo và sửa chữa thang máy?
        </h2>
        <p className="leading-relaxed text-justify mb-4">
          Đây là quá trình phục hồi chức năng hoạt động bằng cách thay thế, sửa chữa các thiết bị, linh kiện đã hao mòn. Việc cải tạo kịp thời không chỉ nâng cao sự an toàn và hiệu quả sử dụng, mà còn giúp tiết kiệm chi phí hơn nhiều so với thay mới hoàn toàn.
        </p>
        <p className="leading-relaxed text-justify">
          Dưới đây là những trường hợp phổ biến cần cải tạo hoặc sửa chữa:
        </p>
      </div>

      {/* Các trường hợp cần cải tạo */}
      <div className="mb-10 space-y-3">
        {[
          "Thang máy thường xuyên hư hỏng sau thời gian dài sử dụng.",
          "Thiết bị không còn đáp ứng được nhu cầu vận hành hiện tại.",
          "Xuất hiện tiếng ồn lớn, rung lắc gây khó chịu và mất an toàn.",
          "Thang vận hành chậm, thời gian chờ lâu gây bất tiện khi di chuyển."
        ].map((text, i) => (
          <div key={i} className="flex items-start">
            <span className="text-[#f79f1a] mr-2">–</span>
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Quy trình cải tạo tại JP TechLift */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#041e42] mb-4">
          Quy trình cải tạo & sửa chữa của JP TechLift
        </h2>
        <p className="leading-relaxed text-justify mb-4">
          Là đơn vị chuyên sâu trong lĩnh vực thang máy, <strong>JP TechLift</strong> cung cấp giải pháp cải tạo toàn diện cho nhiều loại công trình: nhà cao tầng, trung tâm thương mại, khách sạn, bệnh viện... Đội ngũ kỹ sư được đào tạo bài bản sẽ trực tiếp khảo sát thực tế, đánh giá hiện trạng để đưa ra phương án tối ưu.
        </p>

        <p className="leading-relaxed text-justify mb-4">
          Quá trình khảo sát giúp xác định những bộ phận còn có thể tái sử dụng (như vách cabin, cửa, điều khiển), và những thiết bị cần thay mới (động cơ, bộ điều khiển biến tần, cảm biến, relay...). Mọi thiết bị thay thế đều đảm bảo tiêu chuẩn chất lượng và được bảo hành rõ ràng.
        </p>

        <p className="leading-relaxed text-justify">
          Sau khi thống nhất phương án và chi phí, đội ngũ kỹ thuật của chúng tôi sẽ triển khai thi công theo lịch hẹn linh hoạt. JP TechLift cũng hỗ trợ dịch vụ ngoài giờ theo yêu cầu khách hàng, đảm bảo tiến độ mà không ảnh hưởng đến hoạt động của công trình.
        </p>
      </div>

      {/* Quote */}
      <div className="mb-10 p-4 bg-[#f9f9f9] border-l-4 border-[#cba052] italic text-gray-700">
        Thang máy cũng giống như mọi thiết bị khác – cần được chăm sóc, bảo trì và cải tạo sau một thời gian sử dụng. <strong>JP TechLift</strong> cam kết mang đến giải pháp tối ưu, giúp thang máy vận hành an toàn, êm ái và bền vững.
      </div>
    </div>
  );
};

export default CaiTaoSuaChuaThangMay;
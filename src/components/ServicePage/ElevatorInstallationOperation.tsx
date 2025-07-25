import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
const ElevatorInstallationOperation = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white text-[#4a4a4a] font-inter">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-2 ">
          Lắp Đặt - Vận Hành Thang Máy
        </h1>
        <div className="flex justify-center mt-3">
        </div>
        <div className="w-16 h-[3px] bg-[#cba052] mx-auto mt-4"></div>
      </div>

      {/* Giới thiệu */}
      <div className="mb-10">
        <p className="leading-relaxed text-justify">
          Khâu lắp đặt và vận hành quyết định trực tiếp đến độ bền và sự an
          toàn của thang máy. Dù sử dụng thiết bị hiện đại đến đâu, việc thi
          công thiếu chuẩn mực vẫn tiềm ẩn nhiều rủi ro. JP TechLift sở hữu đội
          ngũ kỹ thuật được đào tạo bài bản, luôn tuân thủ quy trình nghiêm
          ngặt, mang đến dịch vụ lắp đặt uy tín và chất lượng.
        </p>
      </div>

      {/* Hình ảnh minh họa */}
      <div className="text-center mb-6">
        <div className="inline-block border-4 border-[#cba052] p-4">
          <div className="gap-4 grid md:grid-cols-2">
            {" "}
            {/* flex để xếp hàng ngang, gap để tạo khoảng cách */}
            <div className="flex md:w-60 md:h-80 w-35 h-45">
              <img
                src={service1}
                alt="Đội ngũ lắp đặt thang máy JP TechLift"
                className=""
              />
            </div>
            <div className="flex md:w-60 md:h-80 w-35 h-45">
              <img
                src={service2}
                alt="Đội ngũ lắp đặt thang máy JP TechLift"
                className=""
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          Đội ngũ lắp đặt thang máy JP TechLift
        </p>
      </div>

      {/* Section 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#041e42] mb-4">
          Đội ngũ kỹ thuật giàu kinh nghiệm
        </h2>
        <p className="leading-relaxed text-justify">
          Đội ngũ kỹ sư và kỹ thuật viên của chúng tôi đã tham gia lắp đặt cho
          nhiều công trình quy mô. Tất cả đều trải qua chương trình đào tạo
          thường xuyên, nắm vững chuyên môn và sẵn sàng đáp ứng mọi yêu cầu của
          khách hàng.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#041e42] mb-4">
          Quy trình thi công chuẩn mực
        </h2>
        <p className="leading-relaxed text-justify">
          Mỗi dự án đều được khảo sát, lên kế hoạch chi tiết và thực hiện theo
          tiêu chuẩn quốc tế. Từng bước từ chuẩn bị đến chạy thử đều được giám
          sát chặt chẽ nhằm bảo đảm an toàn tuyệt đối.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#041e42] mb-4">
          Trang thiết bị hiện đại
        </h2>
        <p className="leading-relaxed text-justify">
          JP TechLift đầu tư hệ thống máy móc và dụng cụ chuyên dụng, hỗ trợ quá
          trình lắp đặt chính xác, giảm thiểu sai sót và tăng tuổi thọ cho thang
          máy.
        </p>
      </div>

      {/* Kết luận */}
      <div className="mb-10">
        <p className="leading-relaxed text-justify">
          Với kinh nghiệm và nguồn lực sẵn có, JP TechLift cam kết mang tới giải
          pháp lắp đặt tối ưu giúp thang máy vận hành êm ái, an toàn và bền bỉ
          theo thời gian.
        </p>
      </div>
    </div>
  );
};

export default ElevatorInstallationOperation;
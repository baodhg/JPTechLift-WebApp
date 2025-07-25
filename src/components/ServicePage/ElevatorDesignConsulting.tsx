import thangtaihang from "../../assets/images/thangtaihang.png"

const ElevatorConsultation = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Tư Vấn & Thiết Kế Thang Máy
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-12 h-1 bg-orange-500"></div>
          <div className="flex space-x-1">
            <span className="text-orange-500">★</span>
            <span className="text-orange-500">★</span>
            <span className="text-orange-500">★</span>
          </div>
          <div className="w-12 h-1 bg-orange-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          Dịch vụ tư vấn và thiết kế thang máy là bước khởi đầu quan trọng để
          tạo nên một hệ thống vận hành hiệu quả, thẩm mỹ và an toàn. JP
          TechLift, với đội ngũ chuyên gia nhiều kinh nghiệm, sẽ đồng hành cùng
          quý khách lựa chọn giải pháp thang máy tối ưu – phù hợp công năng, đảm
          bảo an toàn, tiết kiệm chi phí và mang tính thẩm mỹ cao.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Trước khi tiến hành thiết kế, JP TechLift sẽ:
          <li>Tìm hiểu nhu cầu và mong đợi từ phía khách hàng</li>
          <li>Khảo sát hiện trạng công trình thực tế</li>
          <li>Đề xuất phương án lắp đặt phù hợp nhất</li>
          <li>
            Thiết kế mô phỏng 3D hài hòa với kiến trúc tổng thể và tối ưu hoá sử
            dụng.
          </li>
        </p>

        <h2 className="text-gray-700 leading-relaxed mb-8">
          Các hạng mục chính trong thiết kế thang máy bao gồm:
        </h2>
      </div>

      {/* Section 1 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          1. Thiết kế giếng thang & Hệ thống thang máy
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Giếng thang là không gian di chuyển của cabin và hệ thống thang
              máy. Việc thiết kế giếng thang cần đảm bảo chiều sâu, chiều cao
              hợp lý, không ảnh hưởng đến kiến trúc và tuân thủ đúng tiêu chuẩn
              kỹ thuật.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Hệ thang máy bao gồm toàn bộ thiết bị cơ – điện đảm nhận vận hành.
              Việc thiết kế hệ thống này cần đảm bảo tính ổn định, an toàn, khả
              năng chịu lực tốt, chống ồn – cách nhiệt hiệu quả và dễ dàng bảo
              trì. Có thể kết nối với kết cấu công trình thông qua các liên kết
              kỹ thuật chuyên dụng.
            </p>
          </div>

          <div className="space-y-4">
            {/* Technical Drawing */}
            <div className="border border-gray-300 p-4 bg-gray-50">
              <div className="text-center text-sm text-gray-600 mb-2">
                SƠ ĐỒ PIT 200×200
              </div>
              <div className="border-2 border-dashed border-gray-400 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold">1F</div>
                  <div className="text-sm">PIT</div>
                  <div className="text-xs">R₀ R₁</div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 mt-2">
                ĐÁY PIT CẦN <br /> ĐẢM BẢO KẾT CẤU VỮNG CHẮC
              </div>
            </div>

            <div className="text-center">
              <div className="text-orange-500 text-lg">JP TECHLIFT</div>
              <div className="text-xs text-gray-500">
                Thiết kế giếng thang đảm bảo kỹ thuật và an toàn
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Drawing 2 */}
      <div className="mb-8 text-center">
        <div className="inline-block border border-gray-300 p-4">
          <div className="w-64 h-32 border border-gray-400 flex items-center justify-center">
            <div className="text-sm text-gray-600">
              Mặt cắt cấu tạo hố thang máy
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          2. Thiết kế hệ thống điều khiển
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Việc xây dựng hệ điều khiển cần căn cứ vào lưu lượng người dùng, tải
          trọng, và yêu cầu kỹ thuật cụ thể. JP TechLift sẽ tư vấn cấu hình điều
          khiển phù hợp với mục tiêu sử dụng của từng công trình, đảm bảo vận
          hành mượt mà và thông minh.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          3. Thiết kế phòng máy
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Phòng máy là nơi đặt máy kéo và thiết bị điều khiển trung tâm. Tùy
          theo loại thang, có thể bố trí phòng máy phía trên hoặc bên cạnh giếng
          thang để thuận tiện cho bảo trì và tiết kiệm không gian.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-8 text-center">
        <div className="inline-block">
          <img
            src={thangtaihang}
            alt="Phòng máy thang tải hàng"
            className="w-full h-60 object-cover border border-gray-300"
          />
          <div className="text-sm text-gray-600 mt-2">
            Hình ảnh minh họa phòng máy thang tải hàng
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          4. Tư vấn thiết kế nội thất thang máy
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Thang máy ngày nay không chỉ là phương tiện di chuyển mà còn là điểm
          nhấn thẩm mỹ trong không gian nội thất. Với các công trình không có
          phòng máy, JP TechLift cung cấp giải pháp thiết kế thang không phòng
          máy – linh hoạt, tiết kiệm diện tích và tối ưu hoá kiến trúc tổng thể.
        </p>
      </div>
    </div>
  );
};
export default ElevatorConsultation;

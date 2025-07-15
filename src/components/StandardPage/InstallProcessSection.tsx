import phase1 from "../../assets/images/phase1.jpg";

export default function InstallProcessSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-[#041E42] font-nunito">
      {/* Tiêu đề */}
      <h2 className="text-center text-[36px] md:text-[36px] font-bold font-inter mb-10">
        Thi công lắp đặt thang máy
      </h2>

      {/* Horizontal Border */}
      <div className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-20 rounded-[2px]" />

      {/* Đoạn giới thiệu */}
      <p className="max-w-[1200px] text-lg leading-relaxed md:mx-auto mx-10 mb-4 text-center">
        JP TECHLIFT khởi đầu hành trình với lựa chọn chiến lược: tập trung vào
        lĩnh vực thi công và lắp đặt thang máy. Thành tựu lớn nhất của chúng tôi
        là xây dựng được đội ngũ kỹ sư và kỹ thuật viên tay nghề cao, tận tâm,
        đủ năng lực thi công nhiều công trình, với đa dạng dòng thang máy.
      </p>
      <p className="max-w-[1200px] text-lg leading-relaxed md:mx-auto mx-10 mb-12 text-center">
        Chúng tôi hiểu rõng lắp đặt là khâu then chốt ảnh hưởng trực tiếp đến
        chất lượng và an toàn hành động thang máy, vì vậy JP TECHLIFT kiểm soát
        chặt chẽ từng chi tiết kỹ thuật, đảm bảo mỗi công trình bàn giao đều
        mang lại sự hài lòng trọn vẹn cho khách hàng.
      </p>

      {/* Các bước */}
      <div className="space-y-5 mx-20">
        {/* Bước 1 */}
        <h3 className="font-bold text-xl md:text-2xl">
          1. Tiếp nhận công trình:
        </h3>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={phase1}
            alt="Tiếp nhận công trình"
            className="w-full md:w-[200px] h-auto rounded-lg shadow-md"
          />
          <div className="mb-5">
            <p className="text-lg leading-relaxed">
              Khi ký kết hợp đồng thi công lắp đặt, các bộ phận của JP TechLift
              sẽ đảm nhận việc chuẩn bị đầy đủ các bước sau:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Tiến hành khảo sát công trình, tập kết vật tư và thiết bị cần
                  thiết cho quá trình thi công. Đánh giá chất lượng linh kiện và
                  vật tư kỹ lưỡng. Tùy theo yêu cầu thực tế, thiết bị thang máy
                  có thể là hàng liên doanh hoặc nhập khẩu chính hãng để đảm bảo
                  sự đồng bộ trong quá trình lắp đặt. Danh sách vật tư sẽ được
                  thống nhất giữa chủ đầu tư và đơn vị thi công.
                </li>
                <li>
                  Lựa chọn đội ngũ kỹ thuật viên phù hợp với từng công trình,
                  đảm bảo tay nghề vững, làm việc chỉnh chu và xử lý tốt các
                  phát sinh trong thi công. Đội ngũ này phải đáp ứng yêu cầu về
                  tiến độ và chất lượng hoàn thiện công trình.
                </li>
              </ul>
            </p>
          </div>
        </div>

        {/* Bước 2 */}
        <div>
          <h3 className="font-bold text-xl md:text-2xl mb-2">
            2. Tiến hành lắp đặt:
          </h3>
          <p className="text-lg leading-relaxed">
            Giai đoạn này được thực hiện nghiêm ngặt theo quy chuẩn kỹ thuật của
            JP TechLift:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="leading-relaxed">
                Đảm bảo an toàn tại các tầng, lắp đặt hệ gián giáo, vận chuyển
                các thiết bị vào bối rải như: rail cabin, rail đối trọng,
                channel, máy kéo, khung cabin, và tủ điều khiển.
              </li>
              <li className="leading-relaxed">Tiến hành lắp sản thao tác nhằm đám bảo an toàn thi công.</li>
              <li className="leading-relaxed">
                Lắp đặt bộ khung đỏ không có đốt vỏ tốc đừm bảo an toàn cho quá
                trình vận hành thang máy.
              </li>
              <li className="leading-relaxed">
                Lắp thanh làp rắp hỗ thông phòng máy bao gồm: máy kéo, điện đi
                và các tầm toàn bao che phòng.
              </li>
              <li className="leading-relaxed">
                Tiếp tục lắp bỏ đối trọng, cabin và hệ thống cáp tại điểm kết
                giữa khung đỏ và cabin mốt cách chuẩn xác.
              </li>
              <li className="leading-relaxed">
                Thực hiện đồng thời các thép chống cáp theo yêu cầu kỹ thuật.
              </li>
              <li className="leading-relaxed">
                Lắp cabin tạm, dẫn đi đồng dây để đối xây dựng đế thi công vách
                ngăn giữa tầng và thang.
              </li>
              <li className="leading-relaxed">
                Vệ sinh toàn bộ hố thang và lặp đặt cabin, nóc cabin và các vách
                xung quanh. Sau cùng, vận hành thang thử để kiểm tra độ chính
                xác.
              </li>
            </ul>
          </p>
        </div>

        {/* Bước 3 */}
        <div className="mt-10">
          <h3 className="font-bold text-xl md:text-2xl mb-2">
            3. Kiểm tra chất lượng và bàn giao công trình:
          </h3>
          <p className="text-lg leading-relaxed">
            Sau khi hoàn tất quá trình lắp đặt, đội ngũ kỹ thuật của JP TechLift
            sẽ thực hiện bước cuối cùng là kiểm tra chất lượng tổng thể công
            trình. Thang máy sẽ được vận hành thử và tinh chỉnh nếu cần thiết.
            Trong suốt giai đoạn này, thang vẫn chưa được đưa vào sử dụng. Quá
            trình chạy thử thường kéo dài khoảng 10 ngày. Khi mọi tiêu chí kỹ
            thuật được đảm bảo, JP TechLift sẽ hoàn thiện hồ sơ lý lịch thiết bị
            và tiến hành bàn giao thang máy cho khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
}

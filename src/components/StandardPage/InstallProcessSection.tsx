import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import phase1 from "../../assets/images/phase1.jpg";

export default function InstallProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-16 px-4 md:px-20 text-[#041E42] font-nunito bg-texture-bg bg-texture-pattern bg-[length:8px_8px]">
      {/* Tiêu đề */}
      <h2 className="text-center text-[36px] md:text-[36px] font-bold font-inter mb-10" data-aos="fade-up">
        Thi công lắp đặt thang máy
      </h2>

      {/* Horizontal Border */}
      <div className="w-[60px] h-1 bg-[#CBA052] mx-auto mb-20 rounded-[2px]" data-aos="zoom-in" />

      {/* Đoạn giới thiệu */}
      <p className="max-w-[1200px] text-lg leading-relaxed md:mx-auto mx-10 mb-4 text-center" data-aos="fade-up" data-aos-delay="100">
        JP TECHLIFT khởi đầu hành trình với lựa chọn chiến lược: tập trung vào
        lĩnh vực thi công và lắp đặt thang máy. Thành tựu lớn nhất của chúng tôi
        là xây dựng được đội ngũ kỹ sư và kỹ thuật viên tay nghề cao, tận tâm,
        đủ năng lực thi công nhiều công trình, với đa dạng dòng thang máy.
      </p>
      <p className="max-w-[1200px] text-lg leading-relaxed md:mx-auto mx-10 mb-12 text-center" data-aos="fade-up" data-aos-delay="200">
        Chúng tôi hiểu rõng lắp đặt là khâu then chốt ảnh hưởng trực tiếp đến
        chất lượng và an toàn hành động thang máy, vì vậy JP TECHLIFT kiểm soát
        chặt chẽ từng chi tiết kỹ thuật, đảm bảo mỗi công trình bàn giao đều
        mang lại sự hài lòng trọn vẹn cho khách hàng.
      </p>

      {/* Các bước */}
      <div className="space-y-5 mx-20">
        {/* Bước 1 */}
        <h3 className="font-bold text-xl md:text-2xl" data-aos="fade-right">1. Tiếp nhận công trình:</h3>
        <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-up">
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
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-bold text-xl md:text-2xl mb-2">2. Tiến hành lắp đặt:</h3>
          <p className="text-lg leading-relaxed">
            Giai đoạn này được thực hiện nghiêm ngặt theo quy chuẩn kỹ thuật của
            JP TechLift:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Đảm bảo an toàn tại các tầng, lắp đặt hệ gián giáo...</li>
              <li>Tiến hành lắp sản thao tác nhằm đảm bảo an toàn thi công.</li>
              <li>Lắp đặt bộ khung đỏ không có đốt vỏ tốc độ...</li>
              <li>Lắp thanh lắp ráp hệ thống phòng máy...</li>
              <li>Tiếp tục lắp bộ đối trọng, cabin và hệ thống cáp...</li>
              <li>Thực hiện đồng thời các thép chống cáp theo yêu cầu kỹ thuật.</li>
              <li>Lắp cabin tạm, dẫn dây để hỗ trợ xây dựng...</li>
              <li>Vệ sinh toàn bộ hố thang và lắp đặt cabin, nóc cabin...</li>
            </ul>
          </p>
        </div>

        {/* Bước 3 */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
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

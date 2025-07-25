import serviceImg from "../../assets/images/product4.png";
const BaoTriThangMay = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header với breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Trang chủ {">"} Dịch vụ {">"} Bảo Trì Bảo Dường Thang Máy
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Bảo Trì - Bảo Dưỡng Thang Máy
        <div className="flex justify-center mt-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </h1>

      {/* Tận tình - Tận tâm - Chuyên nghiệp */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-orange-500 mb-4">
          Tận tình – Tận tâm – Chuyên nghiệp
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Để đảm bảo việc sử dụng thang máy luôn an toàn và ổn định, JP TechLift
          áp dụng chính sách bảo trì – bảo dưỡng định kỳ nghiêm ngặt. Đây là
          bước then chốt giúp nâng cao tuổi thọ thiết bị và duy trì hiệu suất
          vận hành liên tục 24/7 theo thời gian, với các hạng mục được kiểm tra
          định kỳ thường xuyên.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Dịch vụ bảo trì – bảo dưỡng thang máy tại JP TechLift được thực hiện
          bởi đội ngũ kỹ thuật viên giàu kinh nghiệm và tay nghề cao, luôn tận
          tâm và chuyên nghiệp. Chúng tôi cam kết mang đến cho khách hàng trải
          nghiệm dịch vụ chu đáo, an toàn và hiệu quả, góp phần tối ưu hóa quá
          trình sử dụng thang máy một cách bền vững và đáng tin cậy.
        </p>
      </div>

      {/* Các dịch vụ bảo trì bảo dưỡng */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Các dịch vụ bảo trì bảo dưỡng của JP TechLift
        </h2>
        <p className="text-gray-700 mb-6">
          Dựa vào thời gian sử dụng và tình trạng của quý khách hàng, JP
          TechLift có 2 dịch vụ bảo trì bảo dưỡng thang máy:
        </p>

        {/* Bảo trì bảo dưỡng thông thường */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            1. Bảo trì bảo dưỡng thông thường:
          </h3>
          <div className="text-gray-700">
            <p className="mb-2">Điều kiện thực hiện:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Thực hiện bảo dưỡng định kỳ theo chu kỳ hàng tháng hoặc hai
                tháng/lần, tùy theo nhu cầu và điều kiện vận hành thực tế.
              </li>
              <li>
                Dịch vụ sửa chữa và thay thế các linh kiện khi phát sinh sự cố
                bất thường trong quá trình sử dụng.
              </li>
              <li>
                Hỗ trợ kiểm tra và đánh giá tình trạng thiết bị; đối với các vật
                tư không bắt buộc thay thế, kỹ thuật viên sẽ chủ động thông báo
                và đề xuất phương án phù hợp nếu phát hiện dấu hiệu hao mòn.
              </li>
              <li>
                Tư vấn tận tình cách sử dụng thang máy an toàn, hiệu quả và
                hướng dẫn vận hành hệ thống một cách bài bản.
              </li>
              <li>
                Đường dây hỗ trợ kỹ thuật hoạt động 24/7, sẵn sàng tiếp nhận và
                xử lý mọi yêu cầu từ khách hàng.
              </li>
              <li>
                Cung cấp báo cáo chi tiết tình trạng thiết bị theo yêu cầu để
                đảm bảo tính minh bạch và theo dõi dễ dàng.
              </li>
            </ul>
            <p className="mt-4">
              Với hình thức dịch vụ này, khách hàng được hưởng mức chi phí bảo
              trì hợp lý cùng tỷ lệ giá ưu đãi. Tuy nhiên, trong một số trường
              hợp, có thể phát sinh những bất tiện như phải chủ động cung cấp
              vật tư, thiết bị thay thế nhiều lần hoặc gián đoạn hoạt động thang
              máy do không được dự đoán và xử lý kịp thời. Điều này có thể ảnh
              hưởng đến hiệu quả vận hành chung và tiến độ thực hiện các hoạt
              động liên quan như lập danh mục hạng mục bảo trì, báo giá, hoặc
              triển khai các nội dung theo hợp đồng đã ký kết.
            </p>
          </div>
        </div>

        {/* Bảo trì bảo dưỡng toàn diện */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            2. Bảo trì bảo dưỡng toàn diện:
          </h3>
          <p className="text-gray-700 mb-3">
            JP TechLift cam kết chịu trách nhiệm trực tiếp trong việc kiểm tra
            toàn diện hệ thống, đảm bảo thang máy luôn vận hành ổn định và an
            toàn. Trường hợp cần thay thế thiết bị hoặc linh kiện, chúng tôi sẽ
            thông báo rõ ràng đến khách hàng trước khi thực hiện, đồng thời chỉ
            đề xuất thay mới khi thực sự cần thiết – tránh mọi sự lãng phí không
            đáng có. Mục tiêu của chúng tôi là giúp khách hàng sử dụng thang máy
            hiệu quả, hạn chế tối đa nguy cơ hỏng hóc không mong muốn nhờ chẩn
            đoán sớm và bảo trì chủ động.
          </p>
          <div className="text-gray-700">
            <p className="mb-2">Điều kiện thực hiện:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bảo dưỡng định kỳ hàng tháng</li>
              <li>Sửa chữa khi phát sinh hư hỏng</li>
              <li>Thay thế linh kiện, vật tư bị hỏng</li>
              <li>Ngăn ngừa sự cố, đảm bảo vận hành an toàn</li>
              <li>Báo giá vật tư thay thế rõ ràng, minh bạch</li>
              <li>Tư vấn sử dụng và hướng dẫn hệ thống</li>
              <li>Hỗ trợ kỹ thuật 24/7</li>
              <li>Cung cấp báo cáo theo yêu cầu</li>
            </ul>
            <p className="mt-4">
              Với gói dịch vụ này, khách hàng có thể yên tâm sử dụng thang máy
              trong mức chi phí phù hợp với ngân sách. Thang máy được vận hành
              ổn định, đúng quy trình, trong khi JP TechLift chịu trách nhiệm
              toàn diện về vật tư, linh kiện thay thế cũng như công tác kỹ thuật
              – giúp khách hàng tối ưu nguồn lực mà vẫn đảm bảo hiệu quả vận
              hành.
            </p>
          </div>
        </div>
      </div>

      {/* Bảo trì bảo dưỡng thang máy theo quy trình chuyên nghiệp */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Bảo trì bảo dưỡng thang máy theo quy trình chuyên nghiệp
        </h2>
        <p className="text-gray-700 mb-4">
          Để đảm bảo quá trình vận hành thang máy an toàn, bền bỉ và đúng tiêu
          chuẩn bảo hành, đội ngũ kỹ thuật viên của JP TechLift sẽ thực hiện
          kiểm tra – bảo trì theo đúng quy trình kỹ thuật đã được công ty ban
          hành và áp dụng thống nhất.
        </p>

        <div className="space-y-3">
          <div>
            <span className="font-semibold">1. Đánh giá sơ bộ:</span> Thông qua
            trao đổi với đơn vị sử dụng, kỹ thuật viên sẽ nắm bắt tình hình
            chung của thang máy, tiến hành đánh giá sơ bộ và phát hiện kịp thời
            những bất thường trong quá trình vận hành hệ thống.
          </div>

          <div>
            <span className="font-semibold">2. Kiểm tra phòng máy:</span> Kỹ
            thuật viên tiến hành kiểm tra các bộ phận quan trọng như: cửa tầng,
            máy kéo, quạt gió, phanh, cảm biến, phòng máy, tủ điện và hệ thống
            an toàn. Đồng thời vệ sinh, chẩn đoán lỗi, sửa chữa và thay thế linh
            kiện hư hỏng theo đúng quy trình kỹ thuật của JP TechLift.
          </div>

          <div>
            <span className="font-semibold">3. Kiểm tra Cabin:</span> Đồng thời
            kiểm tra tình trạng cabin, bao gồm đèn, quạt và các chi tiết bên
            trong để đảm bảo cabin hoạt động ổn định và an toàn.
          </div>

          <div>
            <span className="font-semibold">4. Kiểm tra hỗ thống:</span> Kiểm
            tra toàn diện hệ thống vận hành như: điều khiển cabin, thiết bị
            trong cabin, phanh an toàn, cửa tầng, hệ truyền động, hệ thống đối
            trọng và các liên kết cơ khí quan trọng khác.
          </div>

          <div>
            <span className="font-semibold">5. Kiểm tra đày kỗ (Pít):</span>{" "}
            Đánh giá toàn diện các chi tiết như cửa tầng, ray dẫn hướng, đối
            trọng, giảm chấn và cabin; vệ sinh khu vực liên quan, sửa chữa các
            hư hỏng nếu có.
          </div>

          <div>
            <span className="font-semibold">6. Kiểm tra rút bằm tảng:</span> Bổ
            sung, hiệu chỉnh các vị trí thiếu sót, lỏng lẻo và kiểm tra toàn bộ
            hệ truyền động theo tiêu chuẩn kỹ thuật.
          </div>

          <div>
            <span className="font-semibold">
              7. Chạy thử thang máy để kiểm tra các thiết bị an toàn
            </span>
          </div>

          <div>
            <span className="font-semibold">
              8. Thông báo kết quả kiểm tra với khách hàng
            </span>
          </div>
        </div>
      </div>

      {/* Lợi ích của khách hàng */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Lợi ích của khách hàng – Trách nhiệm của Công ty
        </h2>
        <p className="text-gray-700 mb-4">
          JJP TechLift cung cấp hệ thống hỗ trợ chẩn đoán và bảo trì chất lượng
          cao cho các công trình như tòa nhà văn phòng, chung cư, trung tâm
          thương mại, nhà hàng, khách sạn, khu du lịch,... Đảm bảo thang máy
          luôn vận hành an toàn và ổn định 24/7. Với chính sách bảo trì đúng quy
          định và đội ngũ kỹ thuật viên tay nghề cao, chúng tôi giúp khách hàng
          tiết kiệm chi phí và yên tâm tuyệt đối về hiệu suất vận hành của thang
          máy.
        </p>
        <p className="text-gray-700">
          Với JP TechLift, quý khách luôn được hỗ trợ tận tâm – tận tình, mọi
          lúc, mọi nơi trong suốt quá trình sử dụng thang máy. Hệ thống kho vật
          tư, phụ kiện và thiết bị luôn đảm bảo chất lượng cao và hiện đại.
          Không chỉ đơn thuần thực hiện bảo trì – bảo dưỡng, JP TechLift còn
          đồng hành cùng khách hàng trong mọi vấn đề liên quan đến thang máy,
          nhằm mang đến trải nghiệm vận hành an toàn, bền bỉ và chuyên nghiệp.
          Chúng tôi không chỉ cam kết bằng chất lượng sản phẩm, mà còn khẳng
          định sự khác biệt bằng chất lượng dịch vụ.
        </p>
      </div>

      {/* Customer service illustration placeholder */}
      <div className="flex justify-center mb-8">
        <div className="w-64 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">
            {" "}
            <img
              src={serviceImg}
              alt="[Hình minh họa dịch vụ khách hàng 24/7 - Customer service illustration]"
            />{" "}
          </span>
        </div>
      </div>

      {/* Footer contact info */}
      <div className="text-center text-s text-gray-600 border-t pt-4">
        <p>
          Nếu quý khách cần tư vấn chi tiết về quy trình bảo trì – bảo dưỡng
          thang máy, hoặc gặp sự cố trong quá trình sử dụng, vui lòng liên hệ
          với Thang máy JP TechLift qua Hotline để được hỗ trợ nhanh chóng và
          kịp thời.
        </p>
        <p className="font-semibold">
          LIÊN HỆ 24/7: (+84) 777 275 384 đế được hỗ trợ nhanh nhất.
        </p>
      </div>
    </div>
  );
};

export default BaoTriThangMay;

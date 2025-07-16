import React, { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./ContactForm.module.css";
import { provinces } from "../../constants/VietnamProvinces";

export default function ContactJPTechLiftForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const inputs = form.querySelectorAll("input[required], select[required]");

    for (const input of inputs) {
      const el = input as HTMLInputElement | HTMLSelectElement;
      if (!el.value.trim()) {
        setErrorMessage("Vui lòng điền đầy đủ các trường bắt buộc.");
        setSuccessMessage(null);
        return;
      }
    }

    setErrorMessage(null);
    setSuccessMessage("Gửi dữ liệu thành công!");
    console.log("Dữ liệu hợp lệ. Có thể gửi đi API ở đây.");
    form.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Kết nối với JP TechLift</h2>
        <p className={styles.desc}>
          Cảm ơn bạn đã quan tâm đến việc tìm hiểu thêm về thang máy JP TechLift.<br />
          Vui lòng điền vào biểu mẫu bên dưới để tìm hiểu thêm về các sản phẩm hoặc dịch vụ, cung cấp phản hồi hoặc các câu hỏi khác.
        </p>

        {errorMessage && <Alert type="error" message={errorMessage} />}
        {successMessage && <Alert type="success" message={successMessage} />}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Tiêu*</label>
              <input type="text" required />
            </div>
            <div className={styles.field}>
              <label>Họ*</label>
              <input type="text" required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Email*</label>
              <input type="email" required />
            </div>
            <div className={styles.field}>
              <label>Số điện thoại*</label>
              <input type="tel" pattern="[0-9]{10,11}" required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Công ty</label>
              <input type="text" />
            </div>
            <div className={styles.field}>
              <label>Bạn có vị trí nào?</label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Quốc gia</label>
              <input type="text" value="Việt Nam" readOnly />
            </div>
            <div className={styles.field}>
              <label>Tỉnh/Thành phố*</label>
              <select required>
                <option value="">-- Chọn Tỉnh/Thành phố --</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Địa chỉ*</label>
              <input type="text" required />
            </div>
            <div className={styles.field}>
              <label>Zip code*</label>
              <input type="text" pattern="[0-9]{5,6}" required />
            </div>
          </div>

          <div className={styles.fieldFull}>
            <label>Tên thang máy dự án</label>
            <input type="text" />
          </div>
          <div className={styles.fieldFull}>
            <label>Công suất thang máy dự kiến?</label>
            <input type="text" />
          </div>
          <div className={styles.fieldFull}>
            <label>Có nhu cầu thêm?</label>
            <input type="text" />
          </div>
          <div className={styles.fieldFull}>
            <label>
              <input type="checkbox" />
              Tôi đồng ý nhận thông báo và thông tin về sản phẩm JP TechLift trong tương lai.
            </label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoBox}>
          <h3>JP TechLift Vietnam</h3>
          <p>
            106/10/17 Đường D6 Nâng Tầm
            <br />
            Phường An Lạc A
            <br />
            Quận Bình Tân
            <br />
            Thành Phố Hồ Chí Minh
          </p>
        </div>
        <div className={styles.localOffice}>
          <h4>Tìm văn phòng địa phương</h4>
          <p>
            Tìm thông tin liên hệ cho Hoa Kỳ, Bahamas và Canada.
            <br />
            <span className={styles.link}>Xem tại đây</span>
          </p>
        </div>
      </div>
    </div>
  );
}

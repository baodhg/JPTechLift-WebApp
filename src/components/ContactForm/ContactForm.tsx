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
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    for (const input of inputs) {
      const el = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (!el.value.trim()) {
        setErrorMessage("Vui lòng điền đầy đủ các trường bắt buộc.");
        setSuccessMessage(null);
        return;
      }
    }
    setErrorMessage(null);
    setSuccessMessage("Gửi dữ liệu thành công!");
    form.reset();
  };

  return (
    <>
      <div className={styles.headingWrap}>
        <h2 className={styles.title}>Kết nối với JP TechLift</h2>
        <p className={styles.desc}>
          Cảm ơn bạn đã quan tâm đến việc tìm hiểu thêm về thang máy JP TechLift.<br />
          Vui lòng điền vào biểu mẫu bên dưới để tìm hiểu thêm về các sản phẩm hoặc dịch vụ, cung cấp phản hồi hoặc các câu hỏi khác.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.formSection}>
          {errorMessage && <Alert type="error" message={errorMessage} />}
          {successMessage && <Alert type="success" message={successMessage} />}

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Họ<span className={styles.required}>*</span></label>
                <input type="text" required />
              </div>
              <div className={styles.field}>
                <label>Tên<span className={styles.required}>*</span></label>
                <input type="text" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email<span className={styles.required}>*</span></label>
                <input type="email" required />
              </div>
              <div className={styles.field}>
                <label>Số điện thoại<span className={styles.required}>*</span></label>
                <input type="tel" pattern="[0-9]{10,11}" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Công ty</label>
                <input type="text" />
              </div>
              <div className={styles.field}>
                <label>Bạn ở vị trí nào?<span className={styles.required}>*</span></label>
                <input type="text" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Quốc gia<span className={styles.required}>*</span></label>
                <input type="text" value="Việt Nam" readOnly />
              </div>
              </div>
              <div className={styles.row}>
              <div className={styles.field}>
                <label>Tỉnh<span className={styles.required}>*</span></label>
                <select required>
                  <option value="">Chọn tỉnh</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.fieldFull}>
              <label>Tên tòa nhà / Dự án</label>
              <span className={styles.subLabel}>Nếu có, vui lòng nhập địa chỉ tòa nhà nơi thiết bị của bạn được lắp đặt</span>
              <input type="text" />
            </div>

            <div className={styles.fieldFull}>
              <label>Chúng tôi có thể giúp gì cho bạn?</label>
              <select>
                <option value="">Chọn nội dung</option>
                <option value="Tư vấn sản phẩm">Tư vấn sản phẩm</option>
                <option value="Báo giá">Báo giá</option>
                <option value="Hỗ trợ kỹ thuật">Hỗ trợ kỹ thuật</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div className={styles.fieldFull}>
              <label>Ghi chú thêm</label>
              <textarea rows={3} className={styles.textarea}></textarea>
            </div>

            <div className={styles.fieldFull}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                Tôi đồng ý nhận các thông báo và thông tin qua email từ JP TechLift trong tương lai.
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoBox}>
            <h3 className={styles.infoHeading}>JP TechLift Vietnam</h3>
            <p className={styles.infoText}>
              106/10/17 Đường Đỗ Năng Tế<br />
              Phường An Lạc A<br />
              Quận Bình Tân<br />
              Thành Phố Hồ Chí Minh
            </p>
          </div>
          <div className={styles.infoDivider}></div>
        </div>
      </div>
    </>
  );
}

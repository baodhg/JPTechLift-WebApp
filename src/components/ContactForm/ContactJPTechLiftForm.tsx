import styles from './ContactJPTechLiftForm.module.css';

export default function ContactJPTechLiftForm() {
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Kết nối với JP TechLift</h2>
        <p className={styles.desc}>
          Cảm ơn bạn đã quan tâm đến việc tìm hiểu thêm về thang máy JP TechLift.<br />
          Vui lòng điền vào biểu mẫu bên dưới để tìm hiểu thêm về các sản phẩm hoặc dịch vụ, cung cấp phản hồi hoặc các câu hỏi khác.
        </p>
        <form className={styles.form}>
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
              <input type="tel" required />
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
              <label>Tỉnh/Thành phố</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Địa chỉ*</label>
              <input type="text" required />
            </div>
            <div className={styles.field}>
              <label>Zip code*</label>
              <input type="text" required />
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
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoBox}>
          <h3>JP TechLift Vietnam</h3>
          <p>
            106/10/17 Đường D6 Nâng Tầm<br />
            Phường An Lạc A<br />
            Quận Bình Tân<br />
            Thành Phố Hồ Chí Minh
          </p>
        </div>
        <div className={styles.localOffice}>
          <h4>Tìm văn phòng địa phương</h4>
          <p>
            Tìm thông tin liên hệ cho Hoa Kỳ, Bahamas và Canada.<br />
            <span className={styles.link}>Xem tại đây</span>
          </p>
        </div>
      </div>
    </div>
  );
}
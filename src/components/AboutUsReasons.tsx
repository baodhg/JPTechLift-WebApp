import styles from './AboutUsReasons.module.css';

const reasons = [
  {
    title: 'Sản phẩm chất lượng',
    desc: 'Với sự hợp tác đối tác hàng đầu quốc tế, JPTechLift luôn mang đến những sản phẩm thang máy hiện đại, chất lượng cao và đáp ứng sinh hoạt của khách hàng hàng đầu.',
  },
  {
    title: 'Lắp đặt an toàn',
    desc: 'Với quy trình lắp đặt tiêu chuẩn và sự kiểm soát chất lượng hóa, JPTechLift cam kết thi công an toàn, không ảnh hưởng đến sinh hoạt của tòa nhà.',
  },
  {
    title: 'Giá thành tốt nhất',
    desc: 'Với quy trình liên kết trực tiếp với các nhà sản xuất đầu ngành, JPTechLift tối ưu hóa chi phí cho khách hàng và cam kết mức giá cạnh tranh vượt trội.',
  },
  {
    title: 'Dịch vụ tận tâm',
    desc: 'Bên cạnh chất lượng sản phẩm, JPTechLift luôn chú trọng đến dịch vụ hậu mãi, đảm bảo khách hàng nhận được sự hỗ trợ và tư vấn tận tâm.',
  },
];

export default function AboutUsReasons() {
  return (
    <section className={styles.reasonsSection}>
      <h3 className={styles.heading}>Lý do chúng tôi là đối tác phù hợp với nhu cầu của bạn.</h3>
      <div className={styles.cardsGrid}>
        {reasons.map((r, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.stars}>★★★★★</div>
            <h5>{r.title}</h5>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

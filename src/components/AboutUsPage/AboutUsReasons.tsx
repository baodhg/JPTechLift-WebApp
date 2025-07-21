import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './AboutUsReasons.module.css';

const reasons = [
  {
    title: 'Sản phẩm chất lượng',
    desc: 'Với tinh thần đổi mới không ngừng, JPTechLift mang đến những giải pháp thang máy hiện đại, chất lượng cao và giàu tính thẩm mỹ, luôn đặt sự hài lòng của khách hàng lên hàng đầu.',
  },
  {
    title: 'Lắp đặt an toàn',
    desc: 'Với đội ngũ kỹ thuật viên lành nghề và quy trình lắp đặt chuẩn hóa, JPTechLift cam kết thi công những hệ thống thang máy an toàn, hiệu quả và đáng tin cậy.',
  },
  {
    title: 'Giá thành tốt nhất',
    desc: 'Với quy trình khép kín từ sản xuất đến lắp đặt, JPTechLift tối ưu thiết kế theo từng nhu cầu khách hàng và cam kết mức chi phí cạnh tranh vượt trội.',
  },
  {
    title: 'Dịch vụ tận tâm',
    desc: 'Bên cạnh chất lượng sản phẩm, JP TechLift luôn nâng cao dịch vụ chăm sóc và tư vấn, mang đến cho khách hàng sự hài lòng với tinh thần phục vụ tận tâm.',
  },
];

export default function AboutUsReasons() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.reasonsSection}>
      <h3 className={styles.heading} data-aos="fade-up">
        Lý do chúng tôi là đối tác phù hợp với nhu cầu của bạn.
      </h3>

      <div className={styles.cardsGrid}>
        {reasons.map((r, idx) => (
          <div
            className={styles.card}
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <div className={styles.stars}>★★★★★</div>
            <h5>{r.title}</h5>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

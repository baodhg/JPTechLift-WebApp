import styles from "../../styles/pages/ProductsPage/ProductProcess.module.scss";

interface Step {
  stepTitle: string;
  stepContent: string;
}

interface Stage {
  stage: string;
  description: string;
  steps: Step[];
}

interface Props {
  steps: Stage[];
  image: string; // thêm prop ảnh minh họa duy nhất
}

export default function InstallationSection({ steps, image }: Props) {
  // ✅ chỉ dùng ảnh minh họa duy nhất từ giai đoạn đầu tiên
  return (
    <section id="installation" className={styles.installationSection}>
      <h2 className={styles.title}>Quy trình lắp đặt</h2>

      <div className={styles.container}>
        <div className={styles.contentArea}>
          <div className={styles.contentBox}>
            {steps.map((stage, index) => (
              <div key={index} className={styles.stage}>
                <div className={styles.textContent}>
                  <h3 className={styles.stageTitle}>{stage.stage}</h3>
                  <p className={styles.description}>{stage.description}</p>
                  {stage.steps.length > 0 && (
                    <ul className={styles.stepList}>
                      {stage.steps.map((s, i) => (
                        <li key={i}>
                          <strong>{s.stepTitle}</strong>: {s.stepContent}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={image} alt="Ảnh minh họa quy trình lắp đặt" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

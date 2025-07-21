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
    <section id="installation" className={styles["product-process"]}>
      <h2 className={styles["product-process__title"]}>Quy trình lắp đặt</h2>
      <div className={styles["product-process__container"]}>
        <div className={styles["product-process__content-area"]}>
          <div className={styles["product-process__content-box"]}>
            {steps.map((stage, index) => (
              <div key={index} className={styles["product-process__stage"]}>
                <div className={styles["product-process__text"]}>
                  <h3 className={styles["product-process__stage-title"]}>{stage.stage}</h3>
                  <p className={styles["product-process__description"]}>{stage.description}</p>
                  {stage.steps.length > 0 && (
                    <ul className={styles["product-process__step-list"]}>
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

        <div className={styles["product-process__image-wrapper"]}>
          <img src={image} alt="Ảnh minh họa quy trình lắp đặt" className={styles["product-process__image"]} />
        </div>
      </div>
    </section>
  );
}

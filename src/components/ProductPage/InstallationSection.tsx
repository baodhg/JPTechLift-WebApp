import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  image: string;
}

export default function InstallationSection({ steps, image }: Props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="installation" className={styles.installationSection}>
      <h2 className={styles.title} data-aos="fade-up">Quy trình lắp đặt</h2>
      <div className={styles.container}>
        <div className={styles.contentArea} data-aos="fade-left">
          <div className={styles.contentBox}>
            {steps.map((stage, index) => (
              <div
                key={index}
                className={styles.stage}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
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

        <div className={styles.imageWrapper} data-aos="fade-right">
          <img
            src={image}
            alt="Ảnh minh họa quy trình lắp đặt"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";
import styles from "../../../styles/utils/fadeInUp.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInSection({ children, className }: Props) {
  const { ref, visible } = useFadeInOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} className={`${styles.fadeInUp} ${visible ? styles.visible : ""} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
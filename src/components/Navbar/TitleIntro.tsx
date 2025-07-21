import { splitTitle } from '../../utils/splitTitle';
import styles from '../../styles/pages/ProductsPage/ProductIntro.module.scss';

interface TitleIntroProps {
  title: string;
  className?: string;
}

export default function TitleIntro({ title, className }: TitleIntroProps) {
  const { main, highlight } = splitTitle(title);

  return (
    <h1 className={className}>
      <span>{main}</span>
      <br />
      <span className={styles.highlight}>{highlight}</span>
    </h1>
  );
}
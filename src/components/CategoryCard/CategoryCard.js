import { ShopButton } from '../ShopButton/ShopButton';
import styles from './CategoryCard.module.scss';

export function CategoryCard({ title, imgSrc }) {
  let imageSrc = `url(${imgSrc})`;
  return (
    <div className={styles.category_card} style={{ backgroundImage: imageSrc }}>
      <h3>{title}</h3>
      <ShopButton />
    </div>
  );
}

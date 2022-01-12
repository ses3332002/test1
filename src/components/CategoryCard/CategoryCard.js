import { ShopButton } from '../ShopButton/ShopButton';
import styles from './CategoryCard.module.scss';

export function CategoryCard({ title, width, height, imgSrc }) {
  let imageSrc = `url(${imgSrc})`;
  return (
    <div
      className={styles.category_card}
      style={{ width, height, backgroundImage: imageSrc }}
    >
      <h3>{title}</h3>
      <ShopButton />
    </div>
  );
}

import { ShopButton } from '../ShopButton/ShopButton';
import styles from './DontMissCard.module.scss';

export function DontMissCard({ title, imgSrc }) {
  let imageSrc = `url(${imgSrc})`;
  return (
    <div className={styles.dont_miss_card} style={{ backgroundImage: imageSrc }}>
      <h3>{title}</h3>
      <ShopButton />
    </div>
  );
}

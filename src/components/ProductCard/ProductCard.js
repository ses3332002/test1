import { DiscountLabel } from '../DiscountLabel/DiscountLabel';
import { NewLabel } from '../NewLabel/NewLabel';
import styles from './ProductCard.module.scss';

export function ProductCard({
  title,
  category,
  price,
  oldPrice,
  label,
  imgSrc,
}) {
  let image = `url(${imgSrc})`;
  return (
    <div
      className={styles.category_card}
      style={{ width, height, backgroundImage: image }}
    >
      <h3>{title}</h3>
    </div>
  );
}

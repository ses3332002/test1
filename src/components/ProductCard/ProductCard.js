import { Bullets } from '../Bullets/Bullets';
import styles from './ProductCard.module.scss';

export function ProductCard({
  title,
  category,
  price,
  oldPrice = '',
  label,
  bullets,
  imgSrc,
}) {
  let imageSrc = `url(${imgSrc})`;
  return (
    <div className={styles.product_card}>
      <div
        className={`${styles.product_view} ${
          label === 'new'
            ? styles.new_label
            : label === 'discount'
            ? styles.discount_label
            : ''
        }`}
        style={{ backgroundImage: imageSrc }}
      >
        <div className={styles.like_button_container}>
          <button className={styles.like_button}></button>
        </div>
        {bullets && <Bullets />}
      </div>
      <div className={styles.product_info}>
        <div className={styles.main_info}>
          <h3>{title}</h3>
          <div>{price}</div>
        </div>
        <div className={styles.secondary_info}>
          <div>{category}</div>
          <div className={styles.old_price}>{oldPrice}</div>
        </div>
      </div>
    </div>
  );
}

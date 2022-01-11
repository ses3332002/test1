import styles from './DiscountLabel.module.scss';

export function DiscountLabel({ text = '-50%' }) {
  return <button className={styles.discount_label}>{text}</button>;
}

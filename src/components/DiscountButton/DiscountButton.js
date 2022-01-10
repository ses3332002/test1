import styles from './DiscountButton.module.scss';

export function DiscountButton({ text = '-50%' }) {
  return <button className={styles.discount_button}>{text}</button>;
}

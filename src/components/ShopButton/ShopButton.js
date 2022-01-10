import styles from './ShopButton.module.scss';

export function ShopButton({ text = 'Shop' }) {
  return <button className={styles.shop_button}>{text}</button>;
}

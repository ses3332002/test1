import styles from './Button.module.scss';

export function Button({ text = 'Shop' }) {
  return <button className={styles.shop_button}>{text}</button>;
}

import styles from './UserBar.module.scss';

export function UserBar() {
  return (
    <div className={styles.user_bar}>
      <button className={styles.search_icon}></button>
      <button className={styles.heart_icon}></button>
      <button className={styles.basket_icon}></button>
      <button className={styles.user_icon}></button>
      <button className={styles.kebab_icon}></button>
    </div>
  );
}

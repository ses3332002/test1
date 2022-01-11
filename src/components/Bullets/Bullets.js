import styles from './Bullets.module.scss';

export function Bullets() {
  return (
    <div className={styles.bullets}>
      <button className={styles.bullet}></button>
      <button className={styles.bullet}></button>
      <button className={styles.bullet}></button>
      <button className={styles.bullet}></button>
    </div>
  );
}

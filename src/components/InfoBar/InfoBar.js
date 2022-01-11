import styles from './InfoBar.module.scss';

export function InfoBar() {
  return (
    <div className={styles.info_bar}>
      <a href="#">Cookie Setting</a>
      <a href="#">Terms of use</a>
    </div>
  );
}

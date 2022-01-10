import styles from './SchemeToggler.module.scss';

export function SchemeToggler() {
  return (
    <div className={styles.scheme_toggler}>
      <button className={styles.dark_scheme_button}></button>
      <button className={styles.light_scheme_button}></button>
    </div>
  );
}

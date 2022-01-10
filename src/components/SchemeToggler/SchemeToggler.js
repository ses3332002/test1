import styles from './SchemeToggler.module.scss';
// import toggler from './toggler.svg';

export function SchemeToggler() {
  return (
    <div className={styles.scheme_toggler}>
      <button className={styles.dark_scheme_button}></button>
      <button className={styles.light_scheme_button}></button>
    </div>
    // <object className={styles.scheme_toggler} type="image/svg+xml" data={toggler}>
    //   scheme toggler
    // </object>
  );
}

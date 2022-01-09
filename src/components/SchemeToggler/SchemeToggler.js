import styles from './SchemeToggler.module.scss';
import toggler from './toggler.svg';

export function SchemeToggler() {
  return (
    <object className={styles.scheme_toggler} type="image/svg+xml" data={toggler}>
      scheme toggler
    </object>
  );
}

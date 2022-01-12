import styles from './BarLink.module.scss';

export function BarLink({ link }) {
  return (
    <div className={styles.link}>
      <a href="#">{link}</a>
    </div>
  );
}

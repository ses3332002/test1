import { Button } from '../Button/Button';
import styles from './NewInTown.module.scss';

export function NewinTown() {
  return (
    <section className={styles.new_in_town}>
      <h2 className={styles.section_header}>New in Town</h2>
      <div className={styles.slogan}>Made to move. Built for tomorrow</div>
      <Button>Shop</Button>
    </section>
  );
}

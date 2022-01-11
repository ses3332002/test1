import { ShopButton } from '../ShopButton/ShopButton';
import styles from './NewInTown.module.scss';

export function NewInTown() {
  return (
    <section className={styles.new_in_town}>
      <h2 className={styles.section_header}>New in Town</h2>
      <div className={styles.slogan}>Made to move. Built for tomorrow</div>
      <ShopButton />
    </section>
  );
}

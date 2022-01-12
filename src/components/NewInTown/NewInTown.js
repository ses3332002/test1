import { ShopButton } from '../ShopButton/ShopButton';
import styles from './NewInTown.module.scss';

export function NewInTown() {
  return (
    <section className={styles.new_in_town}>
      <h2 className={styles.section_header}>
        New <span class={styles.no_wrap}>in Town</span>
      </h2>
      <div className={styles.slogan}>
        <span class={styles.no_wrap}>Made to move. </span>
        <span> </span>
        <span class={styles.no_wrap}>Built for tomorrow</span>
      </div>
      <ShopButton />
    </section>
  );
}

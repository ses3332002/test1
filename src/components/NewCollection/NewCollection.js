import { ShopButton } from '../ShopButton/ShopButton';
import styles from './NewCollection.module.scss';

export function NewCollection() {
  return (
    <section className={styles.new_collection}>
      <h2 className={styles.section_header}>New Collection</h2>
      <div className={styles.slogan}>
        <span class={styles.no_wrap}>Inspired by city explorers. </span>
        <span> </span>
        <span class={styles.no_wrap}>Made to move. </span>
        <span> </span>
        <span class={styles.no_wrap}>Built for tomorrow</span>
      </div>
      <ShopButton />
      <div className={styles.video_buttons_container}>
        <div className={styles.video_buttons}>
          <button className={styles.size_button}></button>
          <button className={styles.mute_button}></button>
        </div>
      </div>
    </section>
  );
}

import { ShopButton } from '../ShopButton/ShopButton';
import styles from './NewCollection.module.scss';

export function NewCollection() {
  return (
    <section className={styles.new_collection}>
      <h2 className={styles.section_header}>New Collection</h2>
      <div className={styles.slogan}>
        Inspired by city explorers. Made to move. Built for tomorrow
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

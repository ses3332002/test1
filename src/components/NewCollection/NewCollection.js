import { Button } from '../Button/Button';
import styles from './NewCollection.module.scss';
import video_buttons from './video_buttons.svg';

export function NewCollection() {
  return (
    <section className={styles.new_collection}>
      <h2 className={styles.section_header}>New Collection</h2>
      <div className={styles.slogan}>
        Inspired by city explorers. Made to move. Built for tomorrow
      </div>
      <Button />
      <div className={styles.video_buttons}>
        <object type="image/svg+xml" data={video_buttons}>
          video_buttons
        </object>
      </div>
    </section>
  );
}

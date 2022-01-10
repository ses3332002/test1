import styles from './SectionHeader.module.scss';

export function SectionHeader({ text }) {
  return (
    <div className={styles.section_header}>
      <h2>{text}</h2>
      <div className={styles.scroll_buttons}>
        <button className={styles.scroll_bw}></button>
        <button className={styles.scroll_fw}></button>
      </div>
    </div>
  );
}

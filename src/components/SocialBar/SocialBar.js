import styles from './SocialBar.module.scss';

export function SocialBar() {
  return (
    <div className={styles.social_bar}>
      <button className={styles.in_icon}></button>
      <button className={styles.fb_icon}></button>
      <button className={styles.insta_icon}></button>
    </div>
  );
}

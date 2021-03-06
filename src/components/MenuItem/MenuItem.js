import styles from './MenuItem.module.scss';

export function MenuItem({ text, moreItem }) {
  return (
    <a href="#" className={`${styles.menu_item} ${text === moreItem ? styles.more_item : ''}`}>
      {text}
    </a>
  );
}

import styles from './NewLabel.module.scss';

export function NewLabel({ text = 'New' }) {
  return <div className={styles.new_label}>{text}</div>;
}

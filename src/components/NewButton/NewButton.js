import styles from './NewButton.module.scss';

export function NewButton({ text = 'New' }) {
  return <button className={styles.new_button}>{text}</button>;
}

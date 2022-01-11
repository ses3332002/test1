import styles from './Tape.module.scss';

export function Tape(props) {
  return <div className={styles.tape}>{props.children}</div>;
}

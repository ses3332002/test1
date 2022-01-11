import styles from './GridTape.module.scss';

export function GridTape(props) {
  return <div className={styles.grid_tape}>{props.children}</div>;
}

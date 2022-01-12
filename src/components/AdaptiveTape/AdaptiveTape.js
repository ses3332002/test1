import styles from './AdaptiveTape.module.scss';

export function AdaptiveTape(props) {
  return <div className={styles.tape}>{props.children}</div>;
}

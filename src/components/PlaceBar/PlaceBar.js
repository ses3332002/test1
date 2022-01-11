import styles from './PlaceBar.module.scss';

export function PlaceBar({ city = 'Moscow' }) {
  return (
    <div className={styles.place_bar}>
      <h4>{city}</h4>
    </div>
  );
}

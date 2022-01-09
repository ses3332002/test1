import { MenuItem } from '../MenuItem/MenuItem';
import styles from './NavBar.module.scss';

export function NavBar({ menuItems, moreItem }) {
  return (
    <nav className={styles.nav_bar}>
      {menuItems.map(item => {
        return <MenuItem moreItem={moreItem} text={item} key={item} />;
      })}
    </nav>
  );
}

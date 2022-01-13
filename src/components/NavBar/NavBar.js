import { MenuItem } from '../MenuItem/MenuItem';
import styles from './NavBar.module.scss';

export function NavBar({ menuItems, moreItem }) {
  return (
    <nav className={styles.nav_bar}>
      <ul className={styles.links_list}>
        {menuItems.map((item) => {
          return (
            <li key={item}>
              <MenuItem moreItem={moreItem} text={item} />
            </li>
          );
        })}
      </ul>
      <button className={styles.hamburger_menu}></button>
    </nav>
  );
}

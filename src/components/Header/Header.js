import { SchemeToggler } from '../SchemeToggler/SchemeToggler';
import { NavBar } from '../NavBar/NavBar';
import { UserBar } from '../UserBar/UserBar';
import styles from './Header.module.scss';

export function Header() {
  let moreItem = 'More';
  let menuItems = ['Home', 'New', 'Men', 'Women', 'Kids', 'Sale', moreItem];
  return (
    <header className={styles.header}>
      <SchemeToggler />
      <NavBar menuItems={menuItems} moreItem={moreItem} />
      <UserBar />
    </header>
  );
}

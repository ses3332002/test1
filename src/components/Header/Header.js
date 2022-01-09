import styles from './Header.module.scss';
import { SchemeToggler } from '../SchemeToggler/SchemeToggler';
import { NavBar } from '../NavBar/NavBar';
import { UserBar } from '../UserBar/UserBar';

export function Header({ menuItems, moreItem }) {
  return (
    <header className={styles.header}>
      <SchemeToggler />
      <NavBar menuItems={menuItems} moreItem={moreItem} />
      <UserBar />
    </header>
  );
}

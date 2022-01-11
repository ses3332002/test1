import { PlaceBar } from '../PlaceBar/PlaceBar';
import { InfoBar } from '../InfoBar/InfoBar';
import { SocialBar } from '../SocialBar/SocialBar';
import { ShopButton } from '../ShopButton/ShopButton';
import { SchemeToggler } from '../SchemeToggler/SchemeToggler';

import styles from './Footer.module.scss';

export function Footer(params) {
  return (
    <footer>
      <div className={styles.footer_nav}>
        <div className={styles.config}>
          <a href="#" className={styles.stone_tyle}>
            Stone<span>Tile</span>
          </a>
          <SchemeToggler />
        </div>
        <nav className={styles.categories}></nav>
        <nav className={styles.about}></nav>
        <div className={styles.social}>
          <SocialBar />
          <ShopButton />
        </div>
      </div>
      <div className={styles.footer_info}>
        <PlaceBar />
        <InfoBar />
      </div>
    </footer>
  );
}

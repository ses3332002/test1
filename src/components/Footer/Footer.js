import { PlaceBar } from '../PlaceBar/PlaceBar';
import { InfoBar } from '../InfoBar/InfoBar';
import { SocialBar } from '../SocialBar/SocialBar';
import { ShopButton } from '../ShopButton/ShopButton';
import { SchemeToggler } from '../SchemeToggler/SchemeToggler';
import { LinksBar } from '../LinksBar/LinksBar';

import styles from './Footer.module.scss';

export function Footer() {
  let categoriesLinks = ['Popular', 'Kids', 'Sale', 'New', 'Men', 'Women'];
  let aboutLinks = ['Contacts', 'Support'];
  return (
    <footer>
      <div className={styles.footer_nav}>
        <div className={styles.config}>
          <a href="#" className={styles.stone_tyle}>
            Stone<span>Tile</span>
          </a>
          <SchemeToggler />
        </div>
        <LinksBar title="Categories" links={categoriesLinks} />
        <LinksBar title="About Us" links={aboutLinks} />
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

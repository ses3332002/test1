import { BarLink } from '../BarLink/BarLink';
import styles from './LinksBar.module.scss';

export function LinksBar({ title, links }) {
  let multiplier = Math.ceil(links.length / 2);
  return (
    <div className={styles.links_bar} style={{ width: multiplier * 110 }}>
      <h3 className={styles.title}>{title}</h3>
      <nav className={styles.links}>
        {links.map(link => {
          return <BarLink link={link} key={link} />;
        })}
      </nav>
    </div>
  );
}

import styles from './UserBar.module.scss';
import search from './search.svg';
import heart from './heart.svg';
import basket from './basket.svg';
import user from './user.svg';
import kebab from './kebab.svg';

export function UserBar() {
  return (
    <div className={styles.user_bar}>
      <object className={styles.user_bar_icon} type="image/svg+xml" data={search}>
        search
      </object>
      <object className={styles.user_bar_icon} type="image/svg+xml" data={heart}>
        heart
      </object>
      <object className={styles.user_bar_icon} type="image/svg+xml" data={basket}>
        basket
      </object>
      <object className={styles.user_bar_icon} type="image/svg+xml" data={user}>
        user
      </object>
      <object className={styles.user_bar_icon} type="image/svg+xml" data={kebab}>
        kebab
      </object>
    </div>
  );
}

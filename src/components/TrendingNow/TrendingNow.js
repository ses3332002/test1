import { SectionHeader } from '../SectionHeader/SectionHeader';
import styles from './TrendingNow.module.scss';

export function TrendingNow(params) {
  return (
    <section className={styles.tranding_now}>
      <SectionHeader text="Trendind Now" />
    </section>
  );
}

import { CategoryCard } from '../CategoryCard/CategoryCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Tape } from '../Tape/Tape';
import styles from './TrendingNow.module.scss';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export function TrendingNow(params) {
  return (
    <section className={styles.tranding_now}>
      <SectionHeader text="Trendind Now" />
      <Tape>
        <CategoryCard title="Test" width={427} height={475} imgSrc={img1} />
        <CategoryCard title="Test" width={427} height={475} imgSrc={img2} />
        <CategoryCard title="Test" width={427} height={475} imgSrc={img3} />
        <CategoryCard title="Test" width={427} height={475} imgSrc={img2} />
      </Tape>
    </section>
  );
}

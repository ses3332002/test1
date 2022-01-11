import { CategoryCard } from '../CategoryCard/CategoryCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Tape } from '../Tape/Tape';
import styles from './DontMiss.module.scss';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export function DontMiss(params) {
  return (
    <section className={styles.dont_miss}>
      <SectionHeader text="Don't miss" />
      <Tape>
        <CategoryCard
          title="Special Offer"
          width={650}
          height={515}
          imgSrc={img1}
        />
        <CategoryCard title="Unisex" width={650} height={515} imgSrc={img2} />
        <CategoryCard title="Test" width={650} height={515} imgSrc={img3} />
      </Tape>
    </section>
  );
}

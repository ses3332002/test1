import { DontMissCard } from '../DontMissCard/DontMissCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { AdaptiveTape } from '../AdaptiveTape/AdaptiveTape';
import styles from './DontMiss.module.scss';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export function DontMiss() {
  return (
    <section className={styles.dont_miss}>
      <SectionHeader text="Don't miss" />
      <AdaptiveTape>
        <DontMissCard title="Special Offer" imgSrc={img1} />
        <DontMissCard title="Unisex" imgSrc={img2} />
        <DontMissCard title="Dance Collection" imgSrc={img3} />
      </AdaptiveTape>
    </section>
  );
}

import { ProductCard } from '../ProductCard/ProductCard';
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
        <ProductCard
          title="Overhit with belt"
          category="Women's outerwear"
          price="€23.99"
          oldPrice="€55"
          label="discount"
          bullets={true}
          imgSrc={img1}
        />
        <ProductCard
          title="Dress"
          category="Women's dresses"
          price="€9.99"
          label="new"
          bullets={true}
          imgSrc={img2}
        />
        <ProductCard
          title="Top"
          category="Women's underwear"
          price="€16"
          label="new"
          bullets={false}
          imgSrc={img3}
        />
        <ProductCard
          title="Dress"
          category="Women's dresses"
          price="€9.99"
          label="new"
          bullets={true}
          imgSrc={img2}
        />
      </Tape>
    </section>
  );
}

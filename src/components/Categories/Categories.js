import { CategoryCard } from '../CategoryCard/CategoryCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { GridTape } from '../GridTape/GridTape';
import styles from './Categories.module.scss';
import img1 from './img1_.gif';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

export function Categories() {
  return (
    <section className={styles.categories}>
      <SectionHeader text="Categories" />
      <GridTape>
        <CategoryCard title="Women" imgSrc={img1} />
        <CategoryCard title="Kids" imgSrc={img2} />
        <CategoryCard title="Men" imgSrc={img3} />
        <CategoryCard title="Shoes" imgSrc={img4} />
      </GridTape>
    </section>
  );
}

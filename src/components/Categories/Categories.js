import { CategoryCard } from '../CategoryCard/CategoryCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { GridTape } from '../GridTape/GridTape';
import styles from './Categories.module.scss';
import img1 from './img1.gif';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

export function Categories() {
  return (
    <section className={styles.categories}>
      <SectionHeader text="Categories" />
      <GridTape>
        <CategoryCard title="Women" width={873} height={970} imgSrc={img1} />
        <CategoryCard title="Kids" width={427} height={475} imgSrc={img2} />
        <CategoryCard title="Men" width={427} height={475} imgSrc={img3} />
        <CategoryCard title="Shoes" width={873} height={970} imgSrc={img4} />
      </GridTape>
    </section>
  );
}

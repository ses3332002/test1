import { CategoryCard } from '../CategoryCard/CategoryCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Tape } from '../Tape/Tape';
import styles from './Categories.module.scss';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

export function Categories(params) {
  return (
    <section className={styles.categories}>
      <SectionHeader text="Categories" />
      <Tape>
        <CategoryCard title="Women" width={873} height={970} imgSrc={img1} />
        <CategoryCard title="Kids" width={427} height={475} imgSrc={img2} />
        <CategoryCard title="Men" width={427} height={475} imgSrc={img3} />
        <CategoryCard title="Test" width={873} height={970} imgSrc={img4} />
      </Tape>
    </section>
  );
}

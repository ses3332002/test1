import { Header } from '../Header/Header';
import { NewCollection } from '../NewCollection/NewCollection';
import { Announcement } from '../Announcement/Announcement';
import { TrendingNow } from '../TrendingNow/TrendingNow';
import { Categories } from '../Categories/Categories';
import { DontMiss } from '../DontMiss/DontMiss';
import { NewInTown } from '../NewInTown/NewInTown';
import { Footer } from '../Footer/Footer';

export function App() {
  return (
    <div className="App">
      <Header />
      <NewCollection />
      <Announcement />
      <TrendingNow />
      <Categories />
      <DontMiss />
      <NewInTown />
      <Footer />
    </div>
  );
}

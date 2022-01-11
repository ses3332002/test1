import { Header } from '../Header/Header';
import { NewCollection } from '../NewCollection/NewCollection';
import { NewInTown } from '../NewInTown/NewInTown';
import { Announcement } from '../Announcement/Announcement';
import { TrendingNow } from '../TrendingNow/TrendingNow';
import { DontMiss } from '../DontMiss/DontMiss';
import { Categories } from '../Categories/Categories';

export function App() {
  let moreItem = 'More';
  let menuItems = ['Home', 'New', 'Men', 'Women', 'Kids', 'Sale', moreItem];
  return (
    <div className="App">
      <Header menuItems={menuItems} moreItem={moreItem} />
      <NewCollection />
      <Announcement />
      <TrendingNow />
      <Categories />
      <DontMiss />
      <NewInTown />

      {/* <Footer /> */}
    </div>
  );
}

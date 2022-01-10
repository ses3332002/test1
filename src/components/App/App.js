import { Header } from '../Header/Header';
import { NewCollection } from '../NewCollection/NewCollection';
import { NewinTown } from '../NewInTown/NewInTown';
import { Announcement } from '../Announcement/Announcement';
import { TrendingNow } from '../TrendingNow/TrendingNow';

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
      <NewinTown />

      {/* <Footer /> */}
    </div>
  );
}

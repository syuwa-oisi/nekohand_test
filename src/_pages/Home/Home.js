import TopPageIllustration from '../../_components/TopPageIllustration/TopPageIllustration'
import DailyData from '../../_data/DailyData.js';
import WeeklyData from '../../_data/WeeklyData.js';
import SubData from '../../_data/SubData.js';
import RankingCol from '../../_components/RankingCol/RankingCol.js'
import NewItems from '../../_components/NewItems/NewItems.js'
import History from '../../_components/History/History.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function Home() {
  return (
    <div className="App">
      <TopPageIllustration/>
      <div className='TopPageIllustrator'>
        illust：+風(<a href="https://twitter.com/aida_bito" target="_blank">@aida_bito</a>)
      </div>
      <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='VIEW RANKING' RankingSubTitle='閲覧数ランキング' link="/CardView"/>
      <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='HOT RANKING' RankingSubTitle='価格変動ランキング' link="/CardPrice"/>
      <RankingCol DailyData = {DailyData}  WeeklyData = {WeeklyData} RankingTitle='RECCOMEND' RankingSubTitle='支援者オススメカード' link="/CardReccomend"/>
      <div className='flex'>
        <NewItems RankingData = {SubData} RankingTitle='ITEMS' RankingSubTitle='新着商品' link="/CardPrice"/>
        <NewItems RankingData = {SubData} RankingTitle='NEWS' RankingSubTitle='新着情報' link="/CardPrice"/>
      </div>
      <History RankingTitle='History' RankingSubTitle='更新情報'/>
    </div>
  );
}

export default Home;
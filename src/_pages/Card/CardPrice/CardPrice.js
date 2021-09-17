import WidePlate from "../../../_components/WidePlate/WidePlate.js";
import RankingPage from "../../../_components/RankingPage/RankingPage.js";
import DailyData from '../../../_data/DailyData.js';

function CardPrice() {
    return (
      <div className="App">
          <h1>CardPrice</h1>
          <RankingPage RankingData = {DailyData} RankingTitle='' RankingSubTitle='' link="/CardPrice"/>
      </div>
      
    );
  }
  
  export default CardPrice;
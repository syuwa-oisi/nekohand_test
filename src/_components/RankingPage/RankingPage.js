import React from 'react';
import WidePlate from '../WidePlate/WidePlate.js';
import './RankingPage.css';

class RankingPage extends React.Component {
    render() {
        const RankingData =this.props.RankingData;
        return(
            <div>
                <div  className = 'NewItemsHeader'>
                    <div className='NewItemsTitle'>
                        <p>{this.props.RankingTitle}</p>
                        <div className='NewItemsSubTitle'>
                            <p>{this.props.RankingSubTitle}</p>
                        </div>
                    </div>
                </div>
                <div className='NewItemsMain'>
                    <div className='NewItemsPlates'>
                        {RankingData.map((RankingItem) => {
                            return(
                                <div className='RankingItems'>
                                <WidePlate PlateInformation = {RankingItem}/>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='Continue'>
                        <a href={this.props.link}>
                        <p>＞＞続きを見る</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
  export default RankingPage;
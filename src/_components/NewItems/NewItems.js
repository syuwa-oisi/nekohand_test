import React from 'react';
import BasicPlate from '../BasicPlate/BasicPlate.js';
import './NewItems.css';

class NewItems extends React.Component {
    render() {
        const RankingData =this.props.RankingData;
        return(
            <div>
                <div  className = 'NewItemsHeader'>
                    <div className='NewItemsHead'>
                        <div className='NewItemsTitle'>
                            <p>{this.props.RankingTitle}</p>
                        </div>
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
                                <BasicPlate PlateInformation = {RankingItem}/>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='Continue'>
                        <a href={this.props.link}>
                        ＞＞続きを見る
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
  export default NewItems;
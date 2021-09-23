import React from 'react';
import BasicPlate from '../BasicPlate/BasicPlate.js';
import './NewItems.css';

class NewItems extends React.Component {
    render() {
        const RankingData =this.props.RankingData;
        return(
            <div>
                <div  className = 'NewItemsHeader'>
                    <div className='NewItemsTitle'>
                        <div className='Title'>
                            <p>{this.props.RankingTitle}</p>
                        </div>
                        <div className='SubTitle'>
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
                        <p>＞＞続きを見る</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
  export default NewItems;
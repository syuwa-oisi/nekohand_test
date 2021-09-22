import React from 'react';
import BasicPlate from '../BasicPlate/BasicPlate.js';
import './RankingCol.css';

class RankingCol extends React.Component {
    constructor(props){
        super(props);
        this.state = {Daily:'Active',Weekly:'Passive',RankingData:this.props.DailyData}
    }
    DailyClick(){
        if(this.state.Daily ==='Passive'){
        this.setState({Daily:'Active',Weekly:'Passive',RankingData:this.props.DailyData});
        
        }
    }
    WeeklyClick(){
        if(this.state.Weekly ==='Passive'){
        this.setState({Daily:'Passive',Weekly:'Active',RankingData:this.props.WeeklyData});
        }
    }
    render() {
        return(
            <div>
                <div  className = 'RankingColHeader'>
                    <div className='RankingTitle'>
                        <p>{this.props.RankingTitle}</p>
                        <div className='RankingSubTitle'>
                            <p>{this.props.RankingSubTitle}</p>
                        </div>
                    </div>
                    <div className='SwichButtons'>
                        <button  onClick={() => {this.DailyClick()}} className={'Daily'+' '+(this.state.Daily) } >Daily</button>
                        <button onClick={() => {this.WeeklyClick()}} className={'Weekly'+' '+(this.state.Weekly) }>Weekly</button>
                    </div>
                </div>
                <div className='RankingPlates'>
                    {this.state.RankingData.map((RankingItem) => {
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
        );
    }
}
  export default RankingCol;
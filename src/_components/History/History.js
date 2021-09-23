import React from 'react';
import './History.css';

class History extends React.Component {
    render() {
        return(
            <div>
                <div  className = 'HistryColHeader'>
                    <div className='HistryTitle'>
                        <div className='Title'>
                            <p>{this.props.RankingTitle}</p>
                        </div>
                        <div className='SubTitle'>
                            <p>{this.props.RankingSubTitle}</p>
                        </div>
                    </div>
                </div>
                <div className='HistoryItems'>
                    更新1件目<br/>
                    更新2件目<br/>
                    更新3件目<br/>
                    更新4件目<br/>
                    更新5件目<br/>
                </div>
                <div className='Continue'>
                    <p>＞＞続きを見る</p>
                </div>
            </div>
        );
    }
}
  export default History;
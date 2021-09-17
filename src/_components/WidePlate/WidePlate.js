import React from 'react';
import './WidePlate.css';

class WidePlate extends React.Component {
    render() {
        const Price =  '\xA5'+ this.props.PlateInformation.Price
        return(
            <div>
                <div className='OutlineWideBox'>
                    <div className='RankingNum'>
                        <p className='RankLetter'>{this.props.PlateInformation.RankOrCategory}</p>
                    </div>
                    <div className='WideImageBox'>
                     <img src={this.props.PlateInformation.ImageURL} alt="CardImage"/>
                    </div>
                    <div className='PackNameWide'>
                        <p>{this.props.PlateInformation.PackName}</p>
                    </div>
                    <div className='CardNumWide'>
                        <p>{this.props.PlateInformation.CardNum}</p>
                    </div>
                    <div className='RarityWide'>
                        <p>{this.props.PlateInformation.Rarity}</p>
                    </div>
                    <div className='CardNameWide'>
                        <p>{this.props.PlateInformation.CardName}</p>
                    </div>
                    <div className='PriceWide'>
                        <p>{Price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
  export default WidePlate;

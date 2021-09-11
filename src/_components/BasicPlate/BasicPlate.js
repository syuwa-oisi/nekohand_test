import React from 'react';
import './BasicPlate.css';

class BasicPlate extends React.Component {
    render() {
        const Price =  '\xA5'+ this.props.PlateInformation.Price
        return(
            <div>
                <div className='OutlineBox'>
                    <div className='RankingPlate'>
                        <p className='RankLetter'>{this.props.PlateInformation.RankOrCategory}</p>
                    </div>
                    <div className='ImageBox'>
                     <img src={this.props.PlateInformation.ImageURL} alt="CardImage"/>
                    </div>
                    <div className='PackName'>
                        <p>{this.props.PlateInformation.PackName}</p>
                    </div>
                    <div className='CardNum'>
                        <p>{this.props.PlateInformation.CardNum}</p>
                    </div>
                    <div className='Rarity'>
                        <p>{this.props.PlateInformation.Rarity}</p>
                    </div>
                    <div className='CardName'>
                        <p>{this.props.PlateInformation.CardName}</p>
                    </div>
                    <div className='Price'>
                        <p>{Price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
  export default BasicPlate;

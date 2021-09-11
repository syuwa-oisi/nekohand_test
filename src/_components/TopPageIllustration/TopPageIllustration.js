import React from 'react';
import Illustlation from'../../_assets/images/jpg/test_illust_1.jpg';
import TitleLogo from '../../_assets/images/png/logo_black.png';
import './TopPageIllustration.css';

class TopPageIllustration extends React.Component {
    render() {    
          return (
            <div className='illustlation'>
                <div className='top-illust'>
                    <img src= {Illustlation} alt="illust"/>
                </div> 
                <div className="title-logo">                   
                    <img src= {TitleLogo} alt="Logo"/>
                </div>
            </div>
          );
        }
    }
  export default TopPageIllustration;
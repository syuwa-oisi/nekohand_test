import React from 'react';
import Select from 'react-select';
import HeaderLogo from '../../_assets/images/png/Header_logo.png';
import './Header_pc.css';
import 'react-select-css/dist/react-select-css.min.css';

const options = [
  { value: 'america', label: 'america' },
  { value: 'canada', label: 'canada' },
  { value: 'china', label: 'china' },
  { value: 'japan', label: 'japan' },
  { value: 'korea', label: 'korea' },
  { value: 'france', label: 'france' },
  { value: 'spain', label: 'spain' },
]

class Header extends React.Component {
  render() {
    return (
      <div className='header-pc'>
        <div className='header-logo' href="/">
          <a href="/">
          <img src= {HeaderLogo} alt="Logo" href="/"/>
          </a>
        </div> 
        <div className="check">                   
          <Select options={options} />
        </div>
        <div className='searchbox'>
          <Select isMulti name="pokemon" options={options}/>
        </div>  
      </div>
    );
  }
}

export default Header;
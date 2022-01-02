import footerimg from '../../assets/logoFooter.png';
import { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render(){
   
      return ( 
        <footer className='Footer'>
            <div className='FooterContainer'>
                <img className='FooterImg' src={footerimg} alt="logo Kasa"/>
                <p className='FooterText'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
  }

}

export default Footer;
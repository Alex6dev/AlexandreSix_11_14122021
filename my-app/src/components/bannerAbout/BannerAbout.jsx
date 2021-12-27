import banneraboutimg from '../../assets/BannerAbout.png';
import { Component } from 'react';
import './BannerAbout.css'

class BannerAbout extends Component {
  constructor(){
    super() 
  }
  render(){
     
      
      return ( 
    
      <div className='BannerAboutDiv'>  
        <img className='BannerAboutImg' src={banneraboutimg} alt="Photo de la bannière"/> 
          <span className='BannerAboutBackground'/>
      </div>
    );
  }

}

export default BannerAbout;
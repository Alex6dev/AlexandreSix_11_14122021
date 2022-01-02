import bannerimg from '../../assets/Banner.png';
import { Component } from 'react';
import './Banner.css'

class Banner extends Component {
  render(){
      
      return ( 
    
      <div className='BannerDiv'>  
        <img className='BannerImg' src={bannerimg} alt="Photo de la bannière"/> 
          <span className='BannerBackground'>
            <p className='BannerText'>Chez vous, partout et ailleurs</p>
          </span>
      </div>
    );
  }

}

export default Banner;
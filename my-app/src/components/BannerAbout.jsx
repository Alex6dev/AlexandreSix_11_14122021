import banneraboutimg from '../assets/BannerAbout.png';
import { Component } from 'react';
import styled from 'styled-components'

class BannerAbout extends Component {
  constructor(){
    super() 
  }
  render(){
      const BannerAboutDiv= styled.div` 
        width: 90%;
        height: 13rem;
        margin: 0 5% 0 5%; 
        position: relative; 
        overflow: hidden;
        border-radius: 25px;
      `
      const BannerAboutImg= styled.img`
        width: 100%;
        height: 100%;
      `
      const BannerAboutBackground= styled.span`
        position: absolute; 
        width: 100%;
        height: 100%;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
      `
      
      return ( 
    
      <BannerAboutDiv>  
        <BannerAboutImg src={banneraboutimg} alt="Photo de la bannière"/> 
          <BannerAboutBackground/>
      </BannerAboutDiv>
    );
  }

}

export default BannerAbout;
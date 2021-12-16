import bannerimg from '../assets/Banner.png';
import { Component } from 'react';
import styled from 'styled-components'

class Banner extends Component {
  constructor(){
    super() 
  }
  render(){
      const BannerDiv= styled.div` 
        width: 90%;
        height: 13rem;
        margin: 0 5% 0 5%; 
        position: relative; 
        overflow: hidden;
        border-radius: 25px;
      `
      const BannerImg= styled.img`
        width: 100%;
        height: 100%;
      `
      const BannerBackground= styled.span`
        position: absolute; 
        width: 100%;
        height: 100%;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
      `
      const BannerText=styled.p`
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 4% 0 0 0 ;
        font-size: 48px;
        font-weight: 500;
      `
      return ( 
    
      <BannerDiv>  
        <BannerImg src={bannerimg} alt="Photo de la bannière"/> 
          <BannerBackground>
            <BannerText>Chez vous, partout et ailleurs</BannerText>
          </BannerBackground>
      </BannerDiv>
    );
  }

}

export default Banner;
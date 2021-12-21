import footerimg from '../assets/logoFooter.png';
import { Component } from 'react';
import styled from 'styled-components'

class Footer extends Component {
  constructor(){
    super() 
  }

  render(){
    const Footer=styled.footer`
        width:100%;
        height:210px;
        background-color: rgba(0, 0, 0);
        display:flex;
        flex-direction:row;
        justify-content:space-around;
    `
    const FooterContainer=styled.div`
       text-align:center;
    `
    const FooterImg=styled.img`
        margin-top:3rem;
    `
    const FooterText=styled.p`
        font-size:24px;    
        font-weight:500;
        color:rgb(250,250,250);
    `
      return ( 
        <Footer>
            <FooterContainer>
                <FooterImg src={footerimg} alt="logo Kasa"/>
                <FooterText>© 2020 Kasa. All rights reserved</FooterText>
            </FooterContainer>
        </Footer>
    );
  }

}

export default Footer;
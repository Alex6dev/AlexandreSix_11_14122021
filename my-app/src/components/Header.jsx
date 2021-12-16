import logo from '../assets/logo.png';
import { Component } from 'react';
import styled from 'styled-components';
import{Link} from 'react-router-dom'


class Header extends Component {
  constructor(props){
    super(props)
    this.state={} 
  }
  render(){
    
    const Header= styled.header`
      display: flex;
      flex-direction: row;
    ` 
    const HeaderImg= styled.img`
      margin: 3rem 0 2rem 5%;
      width: 211px;
      height: 68px;
    `     
    const HeaderNav= styled.nav`
      display: flex;
      flex-direction: row;
      margin: 3.5rem 0 0 65%  ;
    `

    const HeaderText=styled.p`
      color:#FF6060;
      
    `
    const HeaderLien= styled(Link)`
      text-decoration: none;
      margin-right: 4rem;
    `
    const HeaderTextSoul= styled.p`
      text-decoration: underline;
      color: #FF6060;
    
    `
    const {lienSoul } = this.props
   
      return (
    
      <Header>
        <HeaderImg src={logo} alt="Logo Kasa" />
        <HeaderNav>
        {lienSoul? (lienSoul==="Home"?(
          <><HeaderLien to="/">
            <HeaderTextSoul>Accueil</HeaderTextSoul>
          </HeaderLien>
          <HeaderLien to="/about">
            <HeaderText>A Propos</HeaderText>
          </HeaderLien></>
        ):(
          <><HeaderLien>
            <HeaderText>Accueil</HeaderText>
          </HeaderLien>
          <HeaderLien>
            <HeaderTextSoul>A Propos</HeaderTextSoul>
          </HeaderLien></>
        )
        ):(
        <><HeaderLien>
          <HeaderText>Accueil</HeaderText>
        </HeaderLien>
        <HeaderLien>
          <HeaderText>A Propos</HeaderText>
        </HeaderLien></>
        )}
        </HeaderNav>
      </Header>
  );
  }

}

export default Header;

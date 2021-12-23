import { Component } from 'react';
import styled from 'styled-components';
import{Link} from 'react-router-dom'


class Error extends Component {
  constructor(){
    super() 
    
  }


  render(){
    const Error=styled.div`
        width: 100%;
        height: 100%;
        
    `
    const ErrorTextG=styled.p`
        color: #ff6060;
        font-weight:700;
        font-size:288px;
        margin:0;
        text-align:center;
    `
    const ErrorText=styled.p`
    color: #ff6060;
    font-weight:500;
    font-size:36px;
    text-align:center;
    `

    const ErrorLien= styled(Link)`
      text-align:center;
      
    `
    const ErrorTextLien= styled.p`
      text-decoration: underline;
      color: #FF6060;
      margin:7rem 0 7rem 0 ;
    `

    return ( 
        
        <Error>
            <ErrorTextG>404</ErrorTextG>
            <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
            <ErrorLien to="/">
                <ErrorTextLien>Retourner sur la page d’accueil</ErrorTextLien>
            </ErrorLien>
        </Error>
    );
  }

}

export default Error;
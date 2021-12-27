import { Component } from 'react';
import Header from '../components/header/Header';
import ErrorComponent from '../components/errorComponent/ErrorComponent';
import Footer from '../components/footer/Footer';

class Error extends Component {
  constructor(props){
    super(props) 
  }

  render(){
      
      return ( 
        <>
        <Header lienSoul={"Home"}/>
        <ErrorComponent/>
        <Footer/></>          
    );
  }

}

export default Error;
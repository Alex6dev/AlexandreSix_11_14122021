import { Component } from 'react';
import Header from '../components/Header';
import ErrorComponent from '../components/ErrorComponent';
import Footer from '../components/Footer';

class Error extends Component {
  constructor(props){
    super(props) 
  }

  render(){
      
      return ( 
        <>
        <Header lienSoul={""}/>
        <ErrorComponent/>
        <Footer/></>          
    );
  }

}

export default Error;
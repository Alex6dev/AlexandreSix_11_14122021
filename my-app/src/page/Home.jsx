import { Component } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

class Home extends Component {
  constructor(){
    super() 
  }

  render(){
      
      return ( 
      <>
      <Header lienSoul={"Home"} /> 
      <Banner /> 
      <Gallery />
      <Footer/>
      </>                 
    );
  }

}

export default Home;
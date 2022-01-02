import { Component } from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Gallery from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';

class Home extends Component {
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
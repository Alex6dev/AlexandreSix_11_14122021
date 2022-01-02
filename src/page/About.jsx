import { Component } from 'react';
import Header from '../components/header/Header';
import BannerAbout from '../components/bannerAbout/BannerAbout';
import AboutComponent from '../components/aboutComponents/AboutComponent';
import Footer from '../components/footer/Footer';

class About extends Component {
  render(){
      
      return ( 
        <>
            <Header lienSoul={"About"}/>
            <BannerAbout/>
            <AboutComponent/>
            <Footer/>
        </>             
    );
  }

}

export default About;
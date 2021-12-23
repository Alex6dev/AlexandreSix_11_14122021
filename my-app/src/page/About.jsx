import { Component } from 'react';
import Header from '../components/Header';
import BannerAbout from '../components/BannerAbout';
import AboutComponent from '../components/AboutComponent';
import Footer from '../components/Footer';

class About extends Component {
  constructor(props){
    super(props) 
  }

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
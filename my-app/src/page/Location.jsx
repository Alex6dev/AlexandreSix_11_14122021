import { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Lodging from '../components/lodging/Lodging';

class Location extends Component {
  constructor(props){
    super(props) 
  }

  render(){
      //const{id}= this.props.match.params

      return ( 
      <>
      <Header lienSoul={""}/>
      <Lodging props={this.props}/>
      <Footer/>
      </>                 
    );
  }

}

export default Location;
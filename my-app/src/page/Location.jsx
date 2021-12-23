import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Lodging from '../components/lodging/Lodging';

class Location extends Component {
  constructor(props){
    super(props) 
  }

  render(){
      console.log("slt")
      const{id}= this.props.match.params

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
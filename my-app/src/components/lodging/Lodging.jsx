import { Component } from 'react';
import styled from 'styled-components'

class Lodging extends Component {
  constructor(){
    super() 
  }
  render(){
      const{id} = this.props.match.params
    
      return ( 
    <p> salut : {id}</p>
    );
  }

}

export default Lodging;
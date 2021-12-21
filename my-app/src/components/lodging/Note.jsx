import { Component } from 'react';
import styled from 'styled-components';
import starOff from '../../assets/starOff.png';
import starOn from '../../assets/starOn.png';


class Note extends Component {
  constructor(props){
    super(props) 
  }


  render(){
    
    const counter=[1,2,3,4,5]
    

    return ( 
        <div>
            
        {counter.map((elt)=>this.props.rating>=elt ?(< img key={`${this.props.rating}-${elt}`} src={starOn}/>  ):(<img key={`${this.props.rating}-${elt}`} src={starOff}/>))}
        </div>
    );
  }

}

export default Note;
/*

*/
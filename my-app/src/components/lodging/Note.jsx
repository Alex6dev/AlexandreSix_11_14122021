import { Component } from 'react';
import starOff from '../../assets/starOff.png';
import starOn from '../../assets/starOn.png';
import './Note.css';


class Note extends Component {
  constructor(props){
    super(props) 
  }


  render(){
    
    const counter=[1,2,3,4,5]
    

    return ( 
        <div>
            
        {counter.map((elt)=>this.props.rating>=elt ?(< img key={`${this.props.rating}-${elt}`}className='note' src={starOn} />  ):(<img className='note' key={`${this.props.rating}-${elt}`} src={starOff}/>))}
        </div>
    );
  }

}

export default Note;
/*

*/
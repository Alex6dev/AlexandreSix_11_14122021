import { Component } from 'react';
import './Tag.css'


class Tag extends Component {

  render(){
      
      
      return ( 
        <div className='Tag'>
            <p className='TagText'>
                {this.props.tag}
            </p>
        </div>
    );
  }

}

export default Tag;
import { Component } from 'react';
import{Link} from 'react-router-dom';
import './Gallery.css'


class CardAppartment extends Component {
  
    
    render(){
        return ( 
                        <li className='GalleryCard'>
                            <Link to={`/location/${this.props.data.id}`} >
                                <img className='GalleryCardImg' src={this.props.data.cover}  />
                                <p className='GalleryCardText'>{this.props.data.title}</p>
                            </Link>
                        </li>
                
               
        );
    }

}

export default CardAppartment;
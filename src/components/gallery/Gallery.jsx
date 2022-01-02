import { Component } from 'react';
import{Link} from 'react-router-dom';
import './Gallery.css'


class Gallery extends Component {
  constructor(){
    super() 
    this.state = {
        error: null,
        isLoaded: false,
        data: []
    }
    
  }
    componentDidMount() {
        fetch(process.env.PUBLIC_URL + "/data.json")
            .then((res) => res.json())
            .then( (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                })}, 
                    
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render(){
        return ( 
            <section className='GalleryContainer'>
                <ul className='GalleryListe'>  
                    {this.state.data.map((loca)=>(
                        <li className='GalleryCard' key={`${loca.id}`}>
                            <Link to={`/location/${loca.id}`} >
                                <img className='GalleryCardImg' src={loca.cover}/>
                                <p className='GalleryCardText'>{loca.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

        );
    }

}

export default Gallery;
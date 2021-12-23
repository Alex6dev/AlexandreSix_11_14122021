import { Component } from 'react';
import styled from 'styled-components';
import{Link, Outlet} from 'react-router-dom';



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
        fetch("./data.json")
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
        const GalleryContainer= styled.section`
            width:90%;
            margin:2% 5% 2% 5%;
            background-color: #f6f6f6;
            border-radius:25px
        `
        const GalleryListe= styled.ul`
            list-style-type:none;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content: space-around;
        `
        const GalleryCard= styled.li`
            width: 340px;
            height: 340px;
            margin: 2%
            
        `
    
        const GalleryCardImg=styled.img`
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:10px;
        `
        const GalleryCardText=styled.p`
            color: rgb(255, 255, 255);
            width:340px;
            text-align: center;
            margin: -4rem 0 0 0 ;
            font-size: 24px;
            font-weight: 500;
            position:absolute;
            
        `
        return ( 
            <GalleryContainer>
                <GalleryListe>  
                    {this.state.data.map((loca)=>(
                        <GalleryCard key={`${loca.id}`}>
                            <Link to={`/location/${loca.id}`}>
                                <GalleryCardImg src={loca.cover}/>
                                <GalleryCardText>{loca.title}</GalleryCardText>
                            </Link>
                        </GalleryCard>
                    ))}
                </GalleryListe>
                <Outlet/>
            </GalleryContainer>

        );
    }

}

export default Gallery;
import { Component } from 'react';
import styled from 'styled-components';
import fleche from '../../assets/fleche.png'


class GalleryLodging extends Component {
  constructor(props){
    super(props) 
    this.state={
      images:[this.props.images],
      currentImage: 0
    }
  }


  render(){
    
    console.log(this.state)
    
    const Container=styled.div`
    
    `
    const ArrowRight=styled.button`
    
    `
    const ArrowLeft=styled.button`
    
    `
    const Image=styled.img`
    
    `
    
    return ( 
        <Container>
          <ArrowRight><img src={fleche}/></ArrowRight>
          <ArrowLeft><img src={fleche}/></ArrowLeft>
          <Image />
        </Container>
    );
  }

}

export default GalleryLodging;
/*

*/
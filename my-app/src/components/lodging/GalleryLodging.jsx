import { Component } from 'react';
import styled from 'styled-components';
import fleche from '../../assets/fleche.png'

class GalleryLodging extends Component {
  constructor(props){
    super(props) 
    this.state={
      images:this.props.images,
      currentImage: 0
    }
  }

  funcPicturePrevious(){
    
    const changeStat={...this.state}
      if(this.state.currentImage==0){
        changeStat.currentImage= this.state.images.length-1;
        this.setState(
          changeStat
        )
      }else{
        changeStat.currentImage= this.state.currentImage-1;
        this.setState(
          changeStat
        )
      }
  }

  funcPictureNext(){
    const changeStat={...this.state}
    if(this.state.currentImage==this.state.images.length-1){
      changeStat.currentImage= 0;
      this.setState(
        changeStat
      )
    }else{
      changeStat.currentImage= this.state.currentImage+1;
      this.setState(
        changeStat
      )
    }
  }
  
  render(){
    
    
    const Container=styled.div`
      width:100%;
      
    `
    const ArrowNext=styled.button`
      transform:rotate(-90deg);
      position:absolute;
      top:23rem;
      right:10%;
      background-color:#ff6060;
      border:none;
      border-radius:5px;
    `
    const ArrowPrevious=styled.button`
      transform:rotate(90deg);
      position:absolute;
      top:23rem;
      left:10%;
      background-color:#ff6060;
      border:none;
      border-radius:5px;
    `
    const Image=styled.img`
      width:100%;
      height:400px;
      object-fit:cover;
      color:#ff6060;
    `
    
    return ( 
        <Container>
          <ArrowPrevious onClick={()=>this.funcPicturePrevious()}><img src={fleche} alt="bouton photo précédente"/></ArrowPrevious>
          <ArrowNext onClick={()=>this.funcPictureNext()}><img src={fleche} alt="bouton photo suivante"/></ArrowNext>
          <Image src={this.state.images[this.state.currentImage]} />
        </Container>
    );
  }

}

export default GalleryLodging;

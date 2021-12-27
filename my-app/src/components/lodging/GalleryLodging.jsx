import { Component } from 'react';
import fleche from '../../assets/fleche.png';
import './GalleryLodging.css'

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
    
    
    
    
    return ( 
        <div className='Container'>
          <button className='Arrow ArrowPrevious' onClick={()=>this.funcPicturePrevious()}><img src={fleche} alt="bouton photo précédente"/></button>
          <button className='Arrow ArrowNext' onClick={()=>this.funcPictureNext()}><img src={fleche} alt="bouton photo suivante"/></button>
          <img className='Image' src={this.state.images[this.state.currentImage]} />
        </div>
    );
  }

}

export default GalleryLodging;

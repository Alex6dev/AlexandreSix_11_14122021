import { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import GalleryLodging from './GalleryLodging';
import Note from './Note';
import Tag from './Tag';
import './Lodging.css'


class Lodging extends Component {

  render(){
    const {
      id,
      description,
      equipments,
      host,
      location,
      pictures,
      rating,
      tags,
      title
    }=this.props.data;
    let tabDesEqui=[
      { id:"a1",intitulé:"Description ",text:description},
      { id:"n3",intitulé:"Équipements", tags:equipments}
    ]
      return ( 
        <section className='LodgingContainer'>
        <div className='LodgingContainGallery'>
          <GalleryLodging images={pictures}/>
        </div>
       
        <div className='LodgingContainerDiv'>
          <div className="LodgingContainerTitle">
            <h1 className='LodgingContainerTitleText'>
              {title}
            </h1>
            <p className='LodgingContainerTitleTextLocat'>
              {location}
            </p>
            <ul className='LodgingContainerTitleListTags'>
              {tags.map((elt)=>(<Tag tag={elt} id={id} key={`${id}-${elt}`}/>))}
            </ul>
          </div>
          <div className='LodgingContainerNameNote'>
            <div className='LodgingContainerName'>
              <p className='LodgingContainerNameText'>
                {host.name}
              </p>
              <img className='LodgingContainerNameImg' src={host.picture}/>
            </div>
            <div className='LodgingContainerNote'>
              <Note rating={rating} id={id}/>
            </div>
          </div>
        </div>
        <div className='LodgingContainerDescripEquipe'>
          {tabDesEqui.map((elt)=>(<div className='DropdownContainer' key={`${elt.id}-${elt.intitulé}`} ><Dropdown  data={elt}/></div>))}
        </div>  
      </section>        
    );
  }

}

export default Lodging;
import { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import GalleryLodging from './GalleryLodging';
import Note from './Note';
import Tag from './Tag';
import './Lodging.css'
var tab=[
  {
      "id": "c67ab8a7",
      "title": "Appartement cosy",
      "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "pictures": [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
      ],
      "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
      "host": {
          "name": "Nathalie Jean",
          "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
      },
      "rating": "5",
      "location": "Ile de France - Paris 17e",
      "equipments": [
          "Équipements de base",
          "Micro-Ondes",
          "Douche italienne",
          "Frigo",
          "WIFI"
      ],
      "tags": [
          "Batignolle",
          "Montmartre"
      ]
  }
]
let tabDesEqui= [
  { id:"a1",intitulé:"Description ",text:tab[0].description},
  { id:"n3",intitulé:"Équipements", tags:tab[0].equipments}

]

class Lodging extends Component {
  constructor(props){
    super(props) 
    this.state = {
      error: null,
      isLoaded: false,
      dataId: []
    }
  }

  componentDidMount() {
    fetch("./data.json")
        .then((res) => res.json())
        .then( (result) => {
            this.setState({
                isLoaded: true,
                dataId: result
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
    //const{id}= this.props.match.params
    //console.log(id)
    console.log("slt")
     
      return ( 
      <section className='LodgingContainer'>
        <div className='LodgingContainGallery'>
          <GalleryLodging images={tab[0].pictures}/>
        </div>

        <div className='LodgingContainerDiv'>
          <div className="LodgingContainerTitle">
            <h1 className='LodgingContainerTitleText'>
              {tab[0].title}
            </h1>
            <p className='LodgingContainerTitleTextLocat'>
              {tab[0].location}
            </p>
            <ul className='LodgingContainerTitleListTags'>
              {tab[0].tags.map((elt)=>(<Tag tag={elt} id={tab[0].id} key={`${tab[0].id}-${elt}`}/>))}
            </ul>
          </div>
          <div className='LodgingContainerNameNote'>
            <div className='LodgingContainerName'>
              <p className='LodgingContainerNameText'>
                {tab[0].host.name}
              </p>
              <img className='LodgingContainerNameImg' src={tab[0].host.picture}/>
            </div>
            <div className='LodgingContainerNote'>
              <Note rating={tab[0].rating} id={tab[0].id}/>
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
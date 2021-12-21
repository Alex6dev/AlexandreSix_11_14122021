import { Component } from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import GalleryLodging from './GalleryLodging';
import Note from './Note';
import Tag from './Tag';
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
  { id:"a",intitulé:"Description ",text:tab[0].description},
  { id:"n",intitulé:"Équipements", tags:tab[0].equipments}

]

class Lodging extends Component {
  constructor(props){
    super(props) 
  }

  render(){
      const LodgingContainer= styled.section`
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        margin-top:2rem;
        padding:0 6rem;
      `   
      const LodgingContainGallery=styled.div`
        width:100%;
        height:500px;
        display:flex;
        justify-content:center;
      `
      const LodgingGallery=styled.img`
        width:100%;
        object-fit:cover;
      `
      const LodgingContainerDiv=styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-between;

      `
      const LodgingContainerTitle=styled.div` 

      ` 
      const LodgingContainerTitleText=styled.h1`
        color:#ff6060;
        font-weight:500;
        font-size:36px;
      `

      const LodgingContainerTitleTextLocat=styled.p`
        color:#ff6060;
        font-weight:500;
        font-size:18px;
      `
      const LodgingContainerTitleListTags=styled.ul`
        display:flex;
        padding:0;
      `
      const LodgingContainerNameNote=styled.div`
        display:flex;
        flex-direction:column;
        margin-top:3rem;
      `
      const LodgingContainerName=styled.div`
        display:flex;
        flex-direction:row;
      `
      const LodgingContainerNameText=styled.p`
        width:95px;
        font-size:18px;
        font-weight:500;
        text-align:right;
        color:#ff6060;
        font-weight:500;
        font-size:18px;
        margin-right:2rem;

      `
      const LodgingContainerNameImg=styled.img`
        border-radius: 4rem ;
        width:64px;
        height:64px;
      ` 
      const LodgingContainerNote=styled.div`
      
      ` 
      const LodgingContainerDescripEquipe=styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:99%;
        margin-bottom:5rem;
      `
      const DropdownContainer=styled.div`
        width:47%;
      
      `
      
      return ( 
      <LodgingContainer>
        <LodgingContainGallery>
          <GalleryLodging images={tab[0].pictures}/>

        </LodgingContainGallery>
        <LodgingContainerDiv>
          <LodgingContainerTitle>
            <LodgingContainerTitleText>
              {tab[0].title}
            </LodgingContainerTitleText>
            <LodgingContainerTitleTextLocat>
              {tab[0].location}
            </LodgingContainerTitleTextLocat>
            <LodgingContainerTitleListTags>
              {tab[0].tags.map((elt)=>(<Tag tag={elt} id={tab[0].id} key={`${tab[0].id}-${elt}`}/>))}
            </LodgingContainerTitleListTags>
          </LodgingContainerTitle>
          <LodgingContainerNameNote>
            <LodgingContainerName>
              <LodgingContainerNameText>
                {tab[0].host.name}
              </LodgingContainerNameText>
              <LodgingContainerNameImg src={tab[0].host.picture}/>
            </LodgingContainerName>
            <LodgingContainerNote>
              <Note rating={tab[0].rating} id={tab[0].id}/>
            </LodgingContainerNote>
          </LodgingContainerNameNote>
        </LodgingContainerDiv>
        <LodgingContainerDescripEquipe>
          {tabDesEqui.map((elt)=>(<DropdownContainer key={elt.id} ><Dropdown  data={elt}/></DropdownContainer>))}
        </LodgingContainerDescripEquipe>
      </LodgingContainer>                   
    );
  }

}

export default Lodging;
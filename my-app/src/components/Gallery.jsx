import { Component } from 'react';
import styled from 'styled-components';
import{Link, Outlet} from 'react-router-dom';


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
        },
        {
            "id": "b9123946",
            "title": "Magnifique appartement proche Canal Saint Martin",
            "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
            "pictures": [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
            ],
            "description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
            "host": {
                "name": "Della Case",
                "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
            },
            "rating": "4",
            "location": "Ile de France - Paris 10e",
            "equipments": [
                "Parking",
                "Sèche Cheveux",
                "Machine à laver",
                "Wi-fi",
                "Cuisine équipée",
                "Télévision"
            ],
            "tags": [
                "Canal Saint Martin",
                "République",
                "Appartement"
            ]
        },
        {
            "id": "46d188c5",
            "title": "Studio de charme - Buttes Chaumont",
            "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
            "pictures": [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg"
            ],
            "description": "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
            "host": {
                "name": "Franck Maher",
                "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
            },
            "rating": "3",
            "location": "Ile de France - Paris 20e",
            "equipments": [
                "Wi-fi",
                "Cuisine équipée",
                "Télévision",
                "Sèche Cheveux"
            ],
            "tags": [
                "Buttes Chaumont",
                "Laumière",
                "Studio"
            ]
        },
        {
            "id": "7af00cd6",
            "title": "Nid douillet au coeur du 11ème",
            "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
            "pictures": [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg"
            ],
            "description": "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
            "host": {
                "name": "Della Case",
                "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
            },
            "rating": "3",
            "location": "Ile de France - Paris 11e",
            "equipments": [
                "Micro-Ondes",
                "Wi-fi",
                "Chambre Séparée",
                "Climatisation",
                "Télévision"
            ],
            "tags": [
                "Parmentier",
                "Marais",
                "Parc",
                "Night Life"
            ]
        }
    ]

class Gallery extends Component {
  constructor(){
    super() 
    this.state={
        profileData: {},
    }
    
  }
/*componentDidMount(){
    let getData= ()=>{
        let url= './data.json'
        let response= fetch(url)
        let data= response.json()
    console.log(data)
    }
    getData()

    }*/


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
    console.log(tab)
    return ( 
        <GalleryContainer>
            <GalleryListe>  
                {tab.map((loca)=>(
                    <GalleryCard key={`${loca.id}`}>
                        <Link to={`location/:${loca.id}`}>
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
import { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import './AboutComponent.css'

let details= [
    {id:0, intitulé:"Fiabilité", text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
             dropdown:false},

            {id:1, intitulé:"Respect", text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
            dropdown:false},
            
            {id:2, intitulé:"Service", text:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
            dropdown:false},
            
            {id:3, intitulé:"Sécurité", text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            dropdown:false}
]

class About extends Component {
  constructor(){
    super() 
  }


  render(){
   
    return ( 

        <section className='About'>
            
            {details.map(elt=>
                <div className='AboutContainer' key={elt.intitulé}>
                    <Dropdown data={elt}/>
                </div>
            )}
        </section>
        
    );
  }

}

export default About;
/*

*/
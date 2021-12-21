import { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

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
    const About=styled.section`
        width: 100%;
        display:flex;
        margin:1rem 0 3rem 0;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        
    `
    const AboutContainer=styled.div`
        width:70%;
    `
    
    
    return ( 

        <About>
            
            {details.map(elt=>
                <AboutContainer key={elt.intitulé}>
                    <Dropdown data={elt}/>
                </AboutContainer>
            )}
        </About>
        
    );
  }

}

export default About;
/*

*/
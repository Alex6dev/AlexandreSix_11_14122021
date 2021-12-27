import { Component } from 'react';
import{Link} from 'react-router-dom';
import './ErrorComponent.css'


class Error extends Component {
  constructor(){
    super() 
    
  }


  render(){


    return ( 
        
        <section className='Error'>
            <p className='ErrorTextG'>404</p>
            <p className='ErrorText'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='ErrorLien' to="/">
                <p className='ErrorTextLien'>Retourner sur la page d’accueil</p>
            </Link>
        </section>
    );
  }

}

export default Error;
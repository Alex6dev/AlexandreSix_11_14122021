import logo from '../../assets/logo.png';
import { Component } from 'react';
import{Link} from 'react-router-dom';
import './Header.css'


class Header extends Component {
  render(){
    const {lienSoul} = this.props
      return (
    
      <header className='Header'>
        <img className="HeaderImg" src={logo} alt="Logo Kasa" />
        <nav className="HeaderNav">
        {lienSoul? (lienSoul==="Home"?(
          <><Link className='HeaderLien' to="/">
            <p className='HeaderTextSoul'>Accueil</p>
          </Link>
          <Link className="HeaderLien" to="/about">
            <p className='HeaderText'>A Propos</p>
          </Link></>
        ):(
          <><Link className='HeaderLien' to="/">
            <p className='HeaderText'>Accueil</p>
          </Link>
          <Link className='HeaderLien' to="/about">
            <p className='HeaderTextSoul'>A Propos</p>
          </Link></>
        )
        ):(
          <><Link className='HeaderLien' to="/">
            <p className="HeaderText">Accueil</p>  
          </Link>
          <Link className="HeaderLien" to="/about">
            <p className="HeaderText">A Propos</p>
          </Link></>
        )}
        </nav>
      </header>
  );
  }

}

export default Header;

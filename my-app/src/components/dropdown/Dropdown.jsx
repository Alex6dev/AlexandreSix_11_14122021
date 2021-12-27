import { Component } from 'react';
import fleche from '../../assets/fleche.png';
import './Dropdown.css'



class Dropdown extends Component {
  constructor(props){
    super(props) 
    this.state={
        details:{dropdown: false}
    }
    this.displayDropDown = this.displayDropDown.bind(this);
  }

displayDropDown(){
    const changeStat= {...this.state.details}
    if(this.state.details.dropdown){
        changeStat.dropdown= false;
        this.setState({
            details: changeStat
        })
    }else{
        changeStat.dropdown= true;
        this.setState({
            details: changeStat
        })
    }
    
   
    
}

  render(){
    
    return ( 
        <>
        {this.state.details.dropdown?
            (
                <><div className='Dropdownintitule' onClick={()=>this.displayDropDown()} >
                    <p className='DropdownintituleText' >{this.props.data.intitulé}</p>
                    <img className='DropdownArrowTop DropdownArrow' src={fleche}/>
                </div>        
                <div className='DropdowncontainerText'>
                    {this.props.data.tags?
                        (this.props.data.tags.map((elt)=>(<p className='DropdownText' key={elt.replace(" ","")}>{elt}</p>))
                        ):(
                        <p className='DropdownText'>{this.props.data.text}</p>)

                    }  
                </div></>
            ): (
                <div className='Dropdownintitule' onClick={()=>this.displayDropDown()} >
                    <p className='DropdownintituleText' >{this.props.data.intitulé}</p>
                    <img className='DropdownArrow' src={fleche}/>
                </div>
            )
        }
        </>
        
    );
  }

}

export default Dropdown;
/*

*/
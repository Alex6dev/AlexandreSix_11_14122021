import { Component } from 'react';
import fleche from '../assets/fleche.png';
import styled from 'styled-components';



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
      

    
    const Dropdownintitule=styled.div`
        width:100%;
        margin-top:2rem;
        padding:0.5rem;
        background-color:#ff6060;
        color:rgb(250,250,250);
        border-radius:5px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    `
    const DropdownintituleText=styled.p`
        color:rgb(250,250,250);
        font-size:24px;
        padding:0 1rem 0 1rem;
    `
    const DropdownArrowTop=styled.img`
        margin:1rem 2rem 0 0;
        width:30px;
        height:40px;
        transform:rotate(180deg);
    `
    const DropdownArrowBottom=styled.img`
        margin:1rem 2rem 0 0;
        width:30px;
        height:40px;
        
    `
    const DropdowncontainerText=styled.div`
        width:100%;
        background-color:#f6f6f6;
        padding:0.5rem;
    `
    const DropdownText=styled.p`
        width:100%;
        color:#ff6060;
        padding: 0 1rem 0 1rem;
        font-size:24px;

    `
    return ( 
        <>
        {this.state.details.dropdown?
            (
                <><Dropdownintitule onClick={()=>this.displayDropDown()} >
                    <DropdownintituleText >{this.props.data.intitulé}</DropdownintituleText>
                    <DropdownArrowTop src={fleche}/>
                </Dropdownintitule>        
                <DropdowncontainerText>
                    {this.props.data.tags?
                        (this.props.data.tags.map((elt)=>(<DropdownText>{elt}</DropdownText>))
                        ):(
                        <DropdownText>{this.props.data.text}</DropdownText>)

                    }  
                </DropdowncontainerText></>
            ): (
                <Dropdownintitule onClick={()=>this.displayDropDown()} >
                    <DropdownintituleText >{this.props.data.intitulé}</DropdownintituleText>
                    <DropdownArrowBottom src={fleche}/>
                </Dropdownintitule>
            )
        }
        </>
        
    );
  }

}

export default Dropdown;
/*

*/
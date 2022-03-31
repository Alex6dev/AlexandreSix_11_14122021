import { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Lodging from '../components/lodging/Lodging';
import Error from './Error';

class Location extends Component {
  constructor(props){
    super(props) 
    this.state = {
      error: null,
      isLoaded: false,
      dataId: []
    }
  }
  componentDidMount() {
    const {id}= this.props.match.params
    fetch(process.env.PUBLIC_URL + "/data.json")
        .then((res) => res.json())
        .then( (result) => {
            this.setState({
                isLoaded: true,
                dataId: result.filter(elt=> elt.id===id)
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
    const {isLoaded,dataId}=this.state
    if(!isLoaded){
      return(<div><p>Chargement !</p></div>)
     
    }else if(dataId.length==1){
      return ( 
        <>
        <Header lienSoul={""}/>
        <Lodging data={dataId[0]}/>
        <Footer/>
        </>                 
      )}else{
       return<Error/>
    }
    
  }

}

export default Location;
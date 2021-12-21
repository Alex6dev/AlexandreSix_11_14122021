import { Component } from 'react';
import styled from 'styled-components'


class Tag extends Component {
  constructor(props){
    super(props) 
  }

  render(){
      const Tag=styled.div`
      width: 115px;
      height:25px;
      text-align:center;
      background-color:#FF6060;
      border-radius:10px;
      margin:1rem 1rem 0 0 ; 
        `
      const TagText=styled.p`
       font-size: 14px;
       font-weight:500;
       color: rgb(250,250,250);
       margin:0;
      `
      
      
      return ( 
        <Tag>
            <TagText>
                {this.props.tag}
            </TagText>
        </Tag>
    );
  }

}

export default Tag;
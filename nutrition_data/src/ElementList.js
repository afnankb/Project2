import React from 'react';
import PrintFirstElement from './printFirstElement';

class ElementList extends React.Component{



render(){

  
   
  return (
<div>
    <h3> Element list work </h3>
  <h4>{this.props.ListOfElement.text}</h4>
 <PrintFirstElement firstElement={this.props.ListOfElement.parsed} />

</div>
  )
  }

}

export default ElementList;

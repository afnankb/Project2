import React from 'react';
import PrintFirstElement from './printFirstElement';

class ElementList extends React.Component{



render(){

  
   
  return (
<div>
    
  <h4>{this.props.ListOfElement.text}</h4>
 <PrintFirstElement  firstElement={this.props.ListOfElement.hints} />

</div>
  )
  }

}

export default ElementList;

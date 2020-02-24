import React from 'react';
import PrintFirstElement from './printFirstElement';

class ElementList extends React.Component{



render(){

  
   
  return (
<div>
    
  
 <PrintFirstElement  firstElement={this.props.ListOfElement.hints} />

</div>
  )
  }

}

export default ElementList;

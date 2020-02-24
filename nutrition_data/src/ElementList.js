import React from 'react';
import PrintFirstElement from './printFirstElement';

class ElementList extends React.Component{



render(){

  
   
  return (
<div>
    

 <PrintFirstElement  firstElement={this.props.ListOfElement.hints} handleFaveToggle={this.props.handleFaveToggle} 
 handleCalToggle={this.props.handleCalToggle}  />

</div>
  )
  }

}

export default ElementList;

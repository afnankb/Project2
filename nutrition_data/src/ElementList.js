import React from 'react';
import PrintFirstElement from './printFirstElement';

class ElementList extends React.Component{

 
constructor(props){
super(props)
this.state ={
  fovoritListClick : false 

}

}


  clickFoveritList(){

   this.setState({
    
    fovoritListClick : true
         
   })

  }


render(){

   
   
  return (
<div>
    <div className='foveritAndTotal'>
<button type="button" onClick={() => this.clickFoveritList()} > foverit list  </button>
<button type="button" > total calorus </button>
</div>
 <PrintFirstElement  firstElement={this.props.ListOfElement.hints} handleFaveToggle={this.props.handleFaveToggle} 
 handleCalToggle={this.props.handleCalToggle} fovoritListClick={this.state.fovoritListClick}
 favorit={this.props.faves}/>

</div>
  )
  }

}

export default ElementList;

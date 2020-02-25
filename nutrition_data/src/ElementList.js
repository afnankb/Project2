import React from 'react';
import PrintFirstElement from './printFirstElement';

class ElementList extends React.Component{

 
constructor(props){
super(props)
this.state ={
  fovoritListClick : false  ,
  calorisListClick : false

}

}


  clickFoveritList(){

   this.setState({
    
    fovoritListClick : true
         
   })

  }

  clickcalorisList(){

    this.setState({
    
      calorisListClick : true
           
     })


  }



render(){

   
   
  return (
<div>
    <div className='foveritAndTotal'>
<button type="button" onClick={() => this.clickFoveritList()} > foverit list  </button>
<button type="button" onClick={() => this.clickcalorisList()}  > total calorus </button>  
</div>

 <PrintFirstElement  firstElement={this.props.ListOfElement.hints} handleFaveToggle={this.props.handleFaveToggle} 
 handleCalToggle={this.props.handleCalToggle} fovoritListClick={this.state.fovoritListClick}
 favorit={this.props.faves} caloris={this.props.caloris} calorisListClick={this.state.calorisListClick} 
 handleDeleteToggle={this.props.handleDeleteToggle} handleDeleteALL={this.props.handleDeleteALL}
 />

</div>
  )
  }

}

export default ElementList;

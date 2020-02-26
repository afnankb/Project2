import React from 'react';
import PrintElement from './printElement';

class ElementList extends React.Component{

constructor(props){
super(props)
this.state ={
  fovoritListClick : false  ,
  calorisListClick : false
}

}
// to check if favorite list button clicked 
  clickFoveritList(){

   this.setState({
    
    fovoritListClick : true
         
   })

  }
// to check if Calories list button clicked 
  clickcalorisList(){

    this.setState({
    
      calorisListClick : true
           
     })


  }




render(){

    
  return (
<div>
<div className="text-center">
  <div className="ml-2">
<div class="btn-group">
<div className="m-2 ">
<button class="btn btn-light btn-sm" type="button" onClick={() => this.clickFoveritList()} > favorite list  </button>
</div>
<div className="m-2 ">
<button  class="btn btn-light btn-sm" type="button" onClick={() => this.clickcalorisList()}  > Calories list </button>  
</div>
</div>
</div>
</div>
 <PrintElement  firstElement={this.props.ListOfElement.hints} handleFaveToggle={this.props.handleFaveToggle} 
 handleCalToggle={this.props.handleCalToggle} fovoritListClick={this.state.fovoritListClick}
 favorit={this.props.faves} caloris={this.props.caloris} calorisListClick={this.state.calorisListClick} 
 handleDeleteToggle={this.props.handleDeleteToggle} handleDeleteALL={this.props.handleDeleteALL}
  calories={this.props.calories} handleAddChecked={this.props.handleAddChecked} deleteChicketFav={this.props.deleteChicketFav}
  handleChangeCal={this.props.handleChangeCal} deletCal={this.props.deletCal}/>

</div>

  )
  }
}

export default ElementList;

import React from 'react';

class Calories extends React.Component{
    
  constructor(props){

    super(props)
    this.state = {

      calVal : this.props.firstElementArray.nutrients.ENERC_KCAL , 
      newCal : this.props.firstElementArray.nutrients.ENERC_KCAL

    }
  
   }


  // to edit Calories if the user change it 
   handelInputhange = (e) => {
    
    let textValue = e.target.value;
   
    let valuInt = parseInt(textValue)

    
     this.setState ({
      
      newCal  : valuInt 

     })
    
   }


   changeCal () {
    this.props.deletCal(this.props.TheIndex)

    this.props.handleChangeCal(this.state.newCal)

   }



render(){

      
    return ( <div>
        
        <div class="contenerInformition ">
           <div class="border border-light rounded-sm "> 

    <p> name : {this.props.firstElementArray.label}</p>   
    <p> brand : {this.props.firstElementArray.brand}</p>
    <p> cal :  </p> 
     
        <input class="form-control form-control" type="text"  onChange={this.handelInputhange} value={this.state.newCal} />
        <button class="btn btn-light btn-sm" type="button" onClick={() => this.changeCal()}> Edit </button>
    </div>
    </div>

  </div>
   )}}
          
        
     export default Calories;

import React from 'react';

class Calories extends React.Component{
    
  constructor(props){

    super(props)
    this.state = {

      calVal : this.props.firstElementArray.nutrients.ENERC_KCAL

    }
  
   }


  // to edit Calories if the user change it 
   handelInputhange = (e) => {
    let textValue = e.target.value;
    if (textValue !== " " || textValue !== 0) {
    let valuInt = parseInt(textValue)
    this.props.handleChangeCal(valuInt)
     this.setState ({
      
      calVal  : textValue 

     })
    }
   }




render(){

      
    return ( <div>
        
        <div class="contenerInformition ">
           <div class="border border-light rounded-sm "> 

    <p> name : {this.props.firstElementArray.label}</p>   
    <p> brand : {this.props.firstElementArray.brand}</p>
    <p> cal :  </p> 
     
        <input class="form-control form-control" type="text"  onChange={this.handelInputhange} value={this.state.calVal} />
      
    </div>
    </div>

  </div>
   )}}
          
        
     export default Calories;

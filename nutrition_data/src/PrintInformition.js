import React from 'react';

class PrintInformition extends React.Component{

   constructor(props){

    super(props)
    this.state = {
        element : this.props.firstElementArray ,
        state : false ,
        stateIMGForCal : false 
    }

   }

 // add element to favorite array 
   addToFovorit  = e => {
    this.props.handleFaveToggle(this.state.element);
   this.setState({
    state : true 
   })

   }

   // add element to Calories array 
   addToCal  = e => {

    this.props.handleCalToggle(this.state.element);
    this.props.handleChangeCal(this.state.element.nutrients.ENERC_KCAL );
    this.setState({
      stateIMGForCal : true 
    })

   }

render(){

  let iconURL = require('../src/before.png');
  let iconCAL = require('../src/kcal.png') ;
  if(this.state.state === true){
      iconURL = require('../src/after.png');
  }
  if(this.state.stateIMGForCal === true){
    iconCAL = require('../src/afterkcal.png');
}
   


    return (
        <div>
           <div class="contenerInformition ">
           <div class="border border-light rounded-sm "> 
           <p> name : {this.state.element.label}</p>   
           <p> brand : {this.state.element.brand}</p>
           <p> cal : {this.state.element.nutrients.ENERC_KCAL} </p>
           
          <div className="fovoritImg">
             <img onClick={() => this.addToFovorit()} src={iconURL}/>
             <img  onClick={() => this.addToCal()} src={iconCAL}/>
             </div>
             </div>
             </div>
             </div>
         
          )
          }
        
        }
        
        export default PrintInformition;
     
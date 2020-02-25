import React from 'react';

class GetFood extends React.Component{

   constructor(props){

    super(props)
    this.state = {
        element : this.props.firstElementArray ,
        state : false ,
    }

   }


   addToFovorit  = e => {

    this.props.handleFaveToggle(this.state.element);
   this.setState({
    state : true 
   })

   }

   addToCal  = e => {

    this.props.handleCalToggle(this.state.element.nutrients.ENERC_KCAL , this.state.element);
   

   }

render(){

  let iconURL = require('../src/before.png');

  if(this.state.state === true){
      iconURL = require('../src/after.png');
  }

     
    return (
        <div>

           <div className="element"> 
           <p> name : {this.state.element.label}</p>   
           <p> brand : {this.state.element.brand}</p>
           <p> cal : {this.state.element.nutrients.ENERC_KCAL} </p>
           
          <div className="fovoritImg">
             <img onClick={() => this.addToFovorit()} src={iconURL}/>
             <img  onClick={() => this.addToCal()} src={require('../src/kcal.png')}/>
             </div>
             </div>
             <br/>
             

         </div>
          )
          }
        
        }
        
        export default GetFood;
     
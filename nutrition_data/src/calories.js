import React from 'react';
import Printtotalcal from './printtotalcal'
class calories extends React.Component{
    
  constructor(props){

    super(props)
    this.state = {
        element : this.props.firstElementArray ,
         
    }

   }
render(){

      
    
    return ( <div>
      
      <Printtotalcal  TheCalories={this.props.TheCalories}/>
        
     <div className="element"> 
    <p> name : {this.state.element.label}</p>   
    <p> brand : {this.state.element.brand}</p>
    <p> cal : {this.state.element.nutrients.ENERC_KCAL} </p>
    
    </div>

  </div>
   )
          }
        
        }
        

                    export default calories;
        
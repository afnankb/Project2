import React from 'react';

class calories extends React.Component{
    
  constructor(props){

    super(props)
  
   }
render(){

      
    
    return ( <div>
        
     <div className="element"> 
    <p> name : {this.props.firstElementArray.label}</p>   
    <p> brand : {this.props.firstElementArray.brand}</p>
    {/* <p> cal : {this.props.firstElementArray.nutrients.ENERC_KCAL} </p> */}
     
    </div>

  </div>
   )}}
          
        
     export default calories;

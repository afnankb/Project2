import React from 'react';

class PrintFovors extends React.Component{
 
  
render(){

    console.log("in foforit")
    

    return (
        <div>
          
          <h1>  list :  </h1>
          <h1> foverit {this.props.element.label}</h1>
          <h4>foverit {this.props.element.brand}</h4>
          <h4>foverit {this.props.element.nutrients.ENERC_KCAL}</h4>
         </div>
          )
    }
        
        }
        
        export default PrintFovors;
     
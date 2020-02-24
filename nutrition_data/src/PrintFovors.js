import React from 'react';

class PrintFovors extends React.Component{
 
  
render(){

    console.log("in foforit")
    

    return (
        <div>
          
          <h1>  list :  </h1>
          <p> foverit {this.props.element.label}</p>
          <p>foverit {this.props.element.brand}</p>
          <p>foverit {this.props.element.nutrients.ENERC_KCAL}</p>
         </div>
          )
    }
        
        }
        
        export default PrintFovors;
     
import React from 'react';

class printtotalcal extends React.Component{
    
  
render(){

      
    
    return ( <div>
    <h3> your calories for today are :  </h3>
     <h3>{this.props.TheCalories}</h3>
        
  </div>
   )
          }
        
        }
        

                    export default printtotalcal;
        
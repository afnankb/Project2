import React from 'react';
import GetFood from './GetFood';
class printFirstElement extends React.Component{

  
  
render(){

    const theFirstElement = this.props.firstElement.map(function(first,index){
         return ( <GetFood firstElementArray={first.food}  key={index} />)
    })
         
      
    

console.log(this.props.firstElement)
    return (
        <div>
           
          
            <div className="contener">
            {theFirstElement}
            </div>
         </div>
          )
          }
        
        }
        
        export default printFirstElement;
        
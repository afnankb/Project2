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
           
           <div className="fovoritImg">
             <img src={require('../src/before.png')}/>
             </div>
             <img  src={require('../src/kcal.png')}/>
             <br/>
            {theFirstElement}
        
         </div>
          )
          }
        
        }
        
        export default printFirstElement;
        
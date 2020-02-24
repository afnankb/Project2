import React from 'react';
import GetFood from './GetFood';
class printFirstElement extends React.Component{

  
render(){
console.log(this.props)

    const theFirstElement = this.props.firstElement.map((first,index )=>{

         return ( <GetFood firstElementArray={first.food}  key={index}  handleFaveToggle={this.props.handleFaveToggle} />)
    })
         

      
    

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
        
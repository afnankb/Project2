import React from 'react';
import Favors from './Favors';

class nutrients extends React.Component{



render(){
    console.log(this.props.nutrients)
    console.log(this.props.onFaveToggle)

    if (this.props.Thestate === true){
   
        return <Favors name={this.props.name} brand={this.props.brand} cal={this.props.nutrients.ENERC_KCAL} />

    }

    return (
        <div>
           
         
             <h4> cal : {this.props.nutrients.ENERC_KCAL}</h4>
            
          
         </div>
          )
          }
        
        }
        
        export default nutrients;
     
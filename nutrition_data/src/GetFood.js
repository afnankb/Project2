import React from 'react';

import Favors from './Favors';

class GetFood extends React.Component{

   constructor(props){

    super(props)
    this.state = {
        element : this.props.firstElementArray ,
        state : false ,
        faves : [] ,
        
      
    }

   }

    addToFovorit () {
    
    console.log("clicked")
    const newelement = [...this.state.faves]
    newelement.push(this.state.element)
    console.log(`Adding ${this.props.firstElementArray.label} To Favors`);
    console.log(`Adding ${this.props.firstElementArray.brand} To Favors`);
   
    this.setState({

        state : true ,
        faves : newelement ,
    })
    

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
             <img   src={require('../src/kcal.png')}/>
             </div>
             </div>
             <br/>
              

         </div>
          )
          }
        
        }
        
        export default GetFood;
     
import React from 'react';
import Addcal from './Addcal';
import Favors from './Favors';

class GetFood extends React.Component{

   constructor(props){

    super(props)
    this.state = {
        element : this.props.firstElementArray ,
        state : false ,
        faves : [] ,
        stateCal : false
      
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



    calculateCal(){

   console.log("clicked cal button ")
   console.log(this.state.element.nutrients.ENERC_KCAL)
      
   this.setState({

    stateCal : true

   })

    }


render(){


  if(this.state.state === true){

    return <Favors  Array={this.state.faves} />
  }

  if(this.state.stateCal === true){

    return <Addcal  calorus={this.state.element.nutrients.ENERC_KCAL} />
  }

 

     
    return (
        <div>
           
           <h4> name : {this.state.element.label}</h4>   
           <h4> brand : {this.state.element.brand}</h4>
           <h4> cal : {this.state.element.nutrients.ENERC_KCAL} </h4>

          <div className="fovoritImg">
             <img onClick={() => this.addToFovorit()} src={require('../src/before.png')}/>
             </div>
             <img  onClick={() => this.calculateCal()}  src={require('../src/kcal.png')}/>
             <br/>
              

         </div>
          )
          }
        
        }
        
        export default GetFood;
     
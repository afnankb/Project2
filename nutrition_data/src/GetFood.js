import React from 'react';
import Nutrients from './nutrients';

class GetFood extends React.Component{

   constructor(props){

    super(props)
    this.state = {
        Thestate: false ,
        
      
    }

   }

    addToFovorit = food => {
    
    console.log("clicked")
    
    console.log(`Adding ${this.props.firstElementArray.label} To Favors`);
    console.log(`Adding ${this.props.firstElementArray.brand} To Favors`);
   
    this.setState({
       Thestate : true ,
    })


    }


render(){


  

     
    return (
        <div>
           
           <h4> name : {this.props.firstElementArray.label}</h4>   
           <h4> brand : {this.props.firstElementArray.brand}</h4>
           
          <Nutrients  nutrients={this.props.firstElementArray.nutrients} key={this.props.key} Thestate={this.state.Thestate}
          name={this.props.firstElementArray.label} brand={this.props.firstElementArray.brand} />

          <div className="fovoritImg">
             <img onClick={() => this.addToFovorit()} src={require('../src/before.png')}/>
             </div>
             <img  src={require('../src/kcal.png')}/>
             <br/>

         </div>
          )
          }
        
        }
        
        export default GetFood;
     
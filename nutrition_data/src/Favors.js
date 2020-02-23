import React from 'react';

class Favors extends React.Component{
 
  

constructor(props){
    super(props)
    
    this.state = {
         allFovorit : [{
         name : this.props.name ,
         brand : this.props.brand ,
         cal : this.props.cal }
         ]
       }
    }

 
render(){


    console.log(this.state.allFovorit)
   

    return (
        <div>
          
          <h1> my fovorit list :  </h1>
          <h1> foverit {this.state.name}</h1>
          <h4>foverit {this.state.brand}</h4>
          <h4>foverit {this.state.cal}</h4>
          
          <img onClick={() => this.delete.bind(this)} src={require('../src/delete.png')}/>
         
         </div>
          )
    }
        
        }
        
        export default Favors;
     
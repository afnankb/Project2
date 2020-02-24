import React from 'react';

class foverit extends React.Component{
    constructor(props){

        super(props)
        this.state = {
            element : this.props.firstElementArray ,
             
        }
    
       }


       deleteFav  = e => {
         
        this.props.handleDeleteToggle(this.state.element);
         console.log(this.state.element)
    
       }



  
render(){

      
    
    return ( <div>

    <div className="element"> 
    <p> name : {this.state.element.label}</p>   
    <p> brand : {this.state.element.brand}</p>
    <p> cal : {this.state.element.nutrients.ENERC_KCAL} </p>
    
    
   <div className="fovoritImg">
      <img src={require('../src/after.png')}/>
      <img onClick={() => this.deleteFav()} src={require('../src/delete.png')}/>
     
      </div>
      </div>
      <br/>
  </div>
   )
          }
        
        }
        
        export default foverit;
        
import React from 'react';

class foverit extends React.Component{
    constructor(props){

        super(props)
    
       }


       deleteFav () {
         console.log(" click delete ")
        this.props.handleDeleteToggle(this.props.TheIndex);
         console.log(this.props.TheIndexx)
        
           
       }



  
render(){

      
    
    return ( <div>

    <div className="element"> 
    <p> name : {this.props.firstElementArray.label}</p>   
    <p> brand : {this.props.firstElementArray.brand}</p>
    <p> cal : {this.props.firstElementArray.nutrients.ENERC_KCAL} </p>
    
    
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
        
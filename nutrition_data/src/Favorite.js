import React from 'react';

class favorite extends React.Component{
    constructor(props){

        super(props)
         
        this.state = {
            click : false 
        }

       }
        // delete this element by index
       deleteFav () {
         
        this.props.handleDeleteToggle(this.props.TheIndex);
        
          
       }

  
       changeImg(){
        this.props.handleAddChecked(this.props.TheIndex)
          this.setState ({
            click : true
          })

       }

  
render(){

    let iconURL = require('../src/notChecked.png');

    if(this.state.click === true){
        iconURL = require('../src/checked.png');
    }
      
    return ( <div>

<div class="contenerInformition ">
           <div class="border border-light rounded-sm "> 
    <p> name : {this.props.firstElementArray.label}</p>   
    <p> brand : {this.props.firstElementArray.brand}</p>
    <p> cal : {this.props.firstElementArray.nutrients.ENERC_KCAL} </p>
    
    
   <div className="fovoritImg">

      <img src={require('../src/after.png')}/>
      <img onClick={() => this.deleteFav()} src={require('../src/delete.png')}/>
      <img onClick={() => this.changeImg()} src={iconURL}/>
      </div>
      </div>
      </div>
  </div>
   )}
 }
            
        export default favorite;
        
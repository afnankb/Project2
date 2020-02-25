import React from 'react';
import GetFood from './GetFood';
import Foverit from './foverit';
import Calories from './calories'
class printElement extends React.Component{


    removeAll  = e => {
       console.log("clicked")
        this.props.handleDeleteALL();
       
       }


       removeChecked = e => {
          
         this.props.deleteChicketFav()

       }
  
render(){

    let theFirstElement = ""
    let theFoveritElement = ""
    let theCaloriesElement = ""
    let allItem = ""
    let total = 0
    let  imgUrl = ""
    let finalTotal = ""
    let theString = ""
    let deleteImg = ""

    if(this.props.fovoritListClick === true){
       
         imgUrl = require('../src/removeAll.png')
        deleteImg  = require('../src/DeleteIcon.png')
          
         theFoveritElement = this.props.favorit.map((theElment,index)=>{
           
            return ( <Foverit firstElementArray={theElment}  key={index} TheIndex={index}  handleDeleteToggle={this.props.handleDeleteToggle}
               handleAddChecked={this.props.handleAddChecked} />)
         })

    }
    
    else if (this.props.calorisListClick === true){
      
        total = this.props.caloris.reduce((firstNumber , secondNumber)=> firstNumber+secondNumber)
        theCaloriesElement = this.props.calories.map((theElment,index)=>{
            
            return  (<Calories   firstElementArray={theElment} key={index}  handleCalToggle={this.props.handleCalToggle}  handleChangeCal={this.props.handleChangeCal} />)
            
         })
        
     }


    else {
        allItem = this.props.firstElement.map((first,index )=>{

         return ( <GetFood firstElementArray={first.food}  key={index}  handleFaveToggle={this.props.handleFaveToggle} handleCalToggle={this.props.handleCalToggle} 
            handleChangeCal={this.props.handleChangeCal} />)
    })
       
     }


     if (this.props.fovoritListClick === true) {
        theFirstElement = theFoveritElement
     }
     else if (this.props.calorisListClick === true){
        theFirstElement = theCaloriesElement
        finalTotal = total 
        theString = "your calories for today are :"
     }
     else {
        theFirstElement = allItem
     }
    
    

    return (
        <div>

            <img onClick={() => this.removeAll()} src={imgUrl}/>
            <img onClick={() => this.removeChecked()} src={deleteImg}/>

            <h3>{theString}</h3>
            <h3>{finalTotal}</h3>
                
            <div  className="contener">
            {theFirstElement}
             
            </div>
                   
         </div>
          )
          }
        
        }
        
        export default printElement;
        
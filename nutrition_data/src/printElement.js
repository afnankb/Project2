import React from 'react';
import PrintInformition from './PrintInformition';
import Favorite from './Favorite';
import Calories from './Calories'
class printElement extends React.Component{

   // when click remove All button 
    removeAll  = e => {
      
        this.props.handleDeleteALL();
       }

 // when click remove one element button 
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


    // if clicked display favorite list 
    if(this.props.fovoritListClick === true){
       
         imgUrl = require('../src/removeAll.png')
        deleteImg  = require('../src/DeleteIcon.png')
          
         theFoveritElement = this.props.favorit.map((theElment,index)=>{
           
            return ( <Favorite firstElementArray={theElment}  key={index} TheIndex={index}  handleDeleteToggle={this.props.handleDeleteToggle}
               handleAddChecked={this.props.handleAddChecked} />)
         })

    }

    // if clicked display Calories list 
    
    else if (this.props.calorisListClick === true){
      
        total = this.props.caloris.reduce((firstNumber , secondNumber)=> firstNumber+secondNumber)
        theCaloriesElement = this.props.calories.map((theElment,index)=>{
            
            return  (<Calories   firstElementArray={theElment} key={index} TheIndex={index} deletCal={this.props.deletCal} handleCalToggle={this.props.handleCalToggle}  handleChangeCal={this.props.handleChangeCal} />)
            
         })
        
     }


    else {
        allItem = this.props.firstElement.map((first,index )=>{

         return ( <PrintInformition firstElementArray={first.food}  key={index}  handleFaveToggle={this.props.handleFaveToggle} handleCalToggle={this.props.handleCalToggle} 
            handleChangeCal={this.props.handleChangeCal} />)
    })
       
     }

    // to select what array will call it 
     if (this.props.fovoritListClick === true) {
        theFirstElement = theFoveritElement
     }
     else if (this.props.calorisListClick === true){
        theFirstElement = theCaloriesElement
        finalTotal = total 
        theString = " your calories for today is :"
     }
     else {
        theFirstElement = allItem
     }
    
    

    return (
        <div>
            <div className='text-center'>
            <div class="btn-group">
              
            <div className="remove">
            <img onClick={() => this.removeAll()} src={imgUrl} class="img-thumbnail"/>
            </div>
            <div className="remove">
            <img onClick={() => this.removeChecked()} src={deleteImg} class="img-thumbnail"/>
            </div>
            
            </div>
            </div> 
            <div className='text-center'>
            <div className="font-italic">
            <p>{theString}</p>
            <p>{finalTotal}</p>
            </div>
            </div>

              <div className="contener">
            {theFirstElement}
             
            </div>
                   
         </div>
          )
          }
        
        }
        
        export default printElement;
        
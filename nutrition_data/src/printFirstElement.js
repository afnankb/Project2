import React from 'react';
import GetFood from './GetFood';
import Foverit from './foverit';
import Calories from './calories'
class printFirstElement extends React.Component{


    removeAll  = e => {
       console.log("clicked")
        this.props.handleDeleteALL();
       
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

    if(this.props.fovoritListClick === true){
        //  console.log("fhgfgfhvgc")
         imgUrl = require('../src/removeAll.png')
         theFoveritElement = this.props.favorit.map((theElment,index)=>{
            // console.log("inside return ")
            // console.log(theElment)
            // console.log("the index "+index)
            return ( <Foverit firstElementArray={theElment}  key={index} TheIndex={index}  handleDeleteToggle={this.props.handleDeleteToggle} />)
         })

    }
    


    else if (this.props.calorisListClick === true){
        // console.log("first "+total)
        total = this.props.caloris.reduce((firstNumber , secondNumber)=> firstNumber+secondNumber)
        theCaloriesElement = this.props.calories.map((theElment,index)=>{
            
            return  (<Calories   firstElementArray={theElment} key={index}  />)
            
         })
        
     }

     




    else {
        allItem = this.props.firstElement.map((first,index )=>{

         return ( <GetFood firstElementArray={first.food}  key={index}  handleFaveToggle={this.props.handleFaveToggle} handleCalToggle={this.props.handleCalToggle} 
         />)
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
            <h3>{theString}</h3>
            <h3>{finalTotal}</h3>
                
            <div  className="contener">
            {theFirstElement}
             
            </div>
                   
         </div>
          )
          }
        
        }
        
        export default printFirstElement;
        
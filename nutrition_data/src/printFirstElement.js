import React from 'react';
import GetFood from './GetFood';
import Foverit from './foverit';
import Calories from './calories'
class printFirstElement extends React.Component{

  
render(){

    let theFirstElement = ""
    let theFoveritElement = ""
    let allItem = ""
    let total = 0

    if(this.props.fovoritListClick === true){
         console.log("fhgfgfhvgc")

         theFoveritElement = this.props.favorit.map((theElment,index)=>{
            console.log("inside return ")
            console.log(theElment)
            return ( <Foverit firstElementArray={theElment}  key={index}  handleDeleteToggle={this.props.handleDeleteToggle} />)
         })

    

    }



    else if (this.props.calorisListClick === true){
        console.log("first "+total)
        total = this.props.caloris.reduce((firstNumber , secondNumber)=> firstNumber+secondNumber)
    
        console.log("last "+total)

              return  (<Calories  TheCalories={total}/>)
     }




    else {
                         allItem = this.props.firstElement.map((first,index )=>{

         return ( <GetFood firstElementArray={first.food}  key={index}  handleFaveToggle={this.props.handleFaveToggle} handleCalToggle={this.props.handleCalToggle} />)
    })
       
     }


     



     if (this.props.fovoritListClick === true) {
        theFirstElement = theFoveritElement
     }
     else {
        theFirstElement = allItem
     }
    
    

    return (
        <div>
           

            <div className="contener">
            {theFirstElement}
          
            </div>
                   
         </div>
          )
          }
        
        }
        
        export default printFirstElement;
        
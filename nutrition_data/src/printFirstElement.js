import React from 'react';
import GetFood from './GetFood';
class printFirstElement extends React.Component{

  constructor(props){
 
    super(props)
    
    this.state ={
 
         img : require('../src/before.png')
    }


  }


  changeImg () {

    this.setState({
      img : require('../src/after.png')
    })



  }

render(){

    const theFirstElement = this.props.firstElement.map(function(first,index){
         return ( <GetFood firstElementArray={first.food}  key={index} />)
    })
         
      
    

console.log(this.props.firstElement)
    return (
        <div>
           
           <div className="fovoritImg">
             <img src={this.state.img}/>
             </div>
             <img onClick={() => this.changeImg()} src={require('../src/kcal.png')}/>
             <br/>
            {theFirstElement}
        
         </div>
          )
          }
        
        }
        
        export default printFirstElement;
        
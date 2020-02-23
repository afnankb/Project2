import React from 'react';
import PrintFovors from './PrintFovors';
class Favors extends React.Component{
 
  

constructor(props){
    super(props)

 this.state ={
     fovoritArray : this.props.Array ,
     img : require('../src/delete.png')
}
    
}


remove (item){

    const Delete = [...this.state.fovoritArray];
    const foodIndex = Delete.includes(item);
    Delete.splice(foodIndex,1)
      console.log("delete it ")
      this.setState({
        
        fovoritArray : Delete ,
        img : ""

      })

}



removeAll (){

this.setState ({

    fovoritArray : [] ,
        img : ""

})

}
 
render(){

    console.log("in foforit")
    console.log(this.state.fovoritArray)
    console.log(this.state.fovoritArray.label)

    const fovoritElement = this.state.fovoritArray.map(function(first,index){
        return (<PrintFovors element={first}  key={index} /> )
   })

   console.log("work"+fovoritElement)

    return (
        <div>
          
          <h1> my fovorit list :  </h1>
        <img onClick={() => this.removeAll()} src={require('../src/removeAll.png') } />
          {fovoritElement}
        <img onClick={() => this.remove(this.state.fovoritArray)}  src={this.state.img}/>
         </div>
          )
    }
        
        }
        
        export default Favors;
     
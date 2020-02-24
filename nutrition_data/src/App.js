// bringing in react from npm package.JSON
import React from 'react';
import axios from 'axios';
import ElementList from './ElementList';

// Define our App component calss
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      userSearch : "" ,
      ListOfElement : {} , 
      theState : false ,
      fav:[] ,
     cal : []
    }

  }

  handelSearchChange =(e) => {
     
    let textValue = e.target.value;

    if(textValue.includes(" ")){
    
      textValue = textValue.replace(" ", "%20");

    }
else {
   
     this.setState ({

      userSearch : textValue
       
     })
     
  }}

  Search() {
    axios.get(`https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=865851b7&app_key=5c70970d448fba3e868462bea11f3476&ingr=${this.state.userSearch}`)
      .then(res => {

        console.log(res.data)
        // console.log(res.data.parsed[0].food.nutrients.ENERC_KCAL)
        this.setState({
          ListOfElement : res.data ,
          theState : true ,
        })
       
      })
      .catch(function (error) {
        // handle error
        console.log(error)

      })
  }


  handleFaveToggle=(food)=>{
    const faves = [...this.state.fav];
     console.log('the elment ',food)
    faves.push(food);
    // let newArray=[]
    // newArray.push(objIng)
    this.setState({ fav : faves });
    console.log(this.state.fav)
  }

  handleCalToggle=(calo)=>{
    const clories = [...this.state.cal];
     console.log('the elment ',calo)
     clories.push(calo);
    // let newArray=[]
    // newArray.push(objIng)
    this.setState({ cal : clories });
    console.log(this.state.cal)
  }



// What should the component render 
render(){
  


   if (this.state.theState === true){
   return <ElementList ListOfElement={this.state.ListOfElement} handleFaveToggle={this.handleFaveToggle} handleCalToggle={this.handleCalToggle}/>
  }
   
return (
  <div>
      <h2> Search to know the calories of the food </h2> 
      <input type="text" onChange={this.handelSearchChange}/>
      <button type="button" onClick={() => this.Search()}> Search </button>
        
      </div>
)
}

}

// let's export the class to be used by another file
export default App;
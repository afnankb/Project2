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
      ListOfElement :[] , 
      theState : false ,
      fav :[] ,
      cal : [0 , 0] ,
      calories : []
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
    this.setState({
      theState : false ,
     
      
    })
    axios.get(`https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=865851b7&app_key=5c70970d448fba3e868462bea11f3476&ingr=${this.state.userSearch}`)
      .then(res => {

        // console.log(res.data)
        // console.log(res.data.parsed[0].food.nutrients.ENERC_KCAL)

        this.setState({
          ListOfElement: res.data ,
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
    //  console.log('the elment ',food)
    faves.push(food);
    // let newArray=[]
    // newArray.push(objIng)
    this.setState({ fav : faves });
    // console.log(this.state.fav)
  }


 
  handleCalToggle=(calo , food) =>{
    const clories = [...this.state.cal];
    //  console.log('the elment ',calo)
     clories.push(calo);
     const thecalories = [...this.state.calories];
     thecalories.push(food);
    // let newArray=[]
    // newArray.push(objIng)
    this.setState({ cal : clories ,
      calories : thecalories                   });
    // console.log(this.state.cal)
    
  }


  handleDeleteToggle = (TheIndex) => {
  
  const deleteItem = [this.state.fav];

  let item = deleteItem[0] ;
  
  item.splice(TheIndex,1)
  
   this.setState ({
           fav : item
   })
  
  }



  handleDeleteALL = () => {
    console.log("in delete  All ")
   this.setState ({
           fav : []
   })
  
  }
// What should the component render 
render(){
  
// console.log("start")
 let start ;
   if (this.state.theState === true){
    start =  <ElementList ListOfElement={this.state.ListOfElement} handleFaveToggle={this.handleFaveToggle} 
   handleCalToggle={this.handleCalToggle} faves={this.state.fav}  caloris={this.state.cal}
   handleDeleteToggle={this.handleDeleteToggle} handleDeleteALL={this.handleDeleteALL}
    calories={this.state.calories} />
  }
   
return (
  <div>
     
    <div className='startText'> 
      <h2> Search to know the calories of the food </h2> 
      </div>
      <div className='search'>
      <input type="text" onChange={this.handelSearchChange}/>
      <button type="button" onClick={() => this.Search()}> Search </button>
      </div>
        {start}
      </div>
)
}

}

// let's export the class to be used by another file
export default App;
// bringing in react from npm package.JSON
import React from 'react';
import axios from 'axios';
import ElementList from './ElementList';

// Define our App component calss
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // to save what the user search about 
      userSearch: "",
      // save the axios respons
      ListOfElement: [],
      // to check if the user search or not 
      theState: false,
      // array of favorite
      fav: [],
      // array of Calories
      cal: [0, 0],
      // array of Calorie element 
      calories: [] ,
      // array of checked to remove 
      checkDelete : []
    }

  }


  handelSearchChange = (e) => {

    let textValue = e.target.value;

    if (textValue.includes(" ")) {
      // becouse in this API if search about more than one word must contain %20 betwwen it  
      textValue = textValue.replace(" ", "%20");

    }

    else {

      this.setState({

        userSearch: textValue

      })

    }
  }

  Search() {
    this.setState({
      theState: false,


    })
    axios.get(`https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=865851b7&app_key=5c70970d448fba3e868462bea11f3476&ingr=${this.state.userSearch}`)
      .then(res => {

        this.setState({
          ListOfElement: res.data,
          theState: true,


        })

      })
      .catch(function (error) {

        console.log(error)

      })
  }

 //  add to favorite list 
  handleFaveToggle = (food) => {
    const faves = [...this.state.fav];

    faves.push(food);

    this.setState({ fav: faves });

  }


//  add to Calories list 
  handleCalToggle = ( food) => {
    
    const thecalories = [...this.state.calories];
    thecalories.push(food);

    this.setState({
      
      calories: thecalories
    });


  }

  handleChangeCal = (calo) => {

    const clories = [...this.state.cal];
    clories.push(calo);

    this.setState({
      cal: clories,
      
    });

  }

// delete element 
  handleDeleteToggle = (TheIndex) => {

    const deleteItem = [this.state.fav];

    let item = deleteItem[0];

    item.splice(TheIndex, 1)

    this.setState({
      fav: item
    })

  }

// delete All
  handleDeleteALL = () => {

    this.setState({
      fav: []
    })

  }

  // add checked element to delete it 
  handleAddChecked = (TheIndex) => {

    const elmentChicked = [...this.state.checkDelete];

    elmentChicked.push(TheIndex);

    this.setState({
      checkDelete : elmentChicked 
    })


  }

 // delete checked element 
  deleteChicketFav = () => {

      const deleteElment = [this.state.checkDelete];
      const  arrayFav = [this.state.fav];
      let item = arrayFav[0];
      for (let i=0 ; i<= deleteElment.length ; i++){
        item.splice(deleteElment[i], 1)
 
      }

    this.setState({
      fav : item ,
      checkDelete : []
    })
  }


  render() {

    let start;
    if (this.state.theState === true) {
      start = <ElementList ListOfElement={this.state.ListOfElement} handleFaveToggle={this.handleFaveToggle}
        handleCalToggle={this.handleCalToggle} faves={this.state.fav} caloris={this.state.cal}
        handleDeleteToggle={this.handleDeleteToggle} handleDeleteALL={this.handleDeleteALL}
        calories={this.state.calories} handleAddChecked={this.handleAddChecked} deleteChicketFav={this.deleteChicketFav}
        handleChangeCal={this.handleChangeCal}/>
    }

    return (
      <div>

        <div className='startText'>
          <p> Check the calories , Just type the name below </p>
        </div>
        <div className='search'>
          <input type="text" onChange={this.handelSearchChange} />
          <button type="button" onClick={() => this.Search()}> Search </button>
        </div>
        {start}
      </div>
    )
  }

}

// let's export the class to be used by another file
export default App;
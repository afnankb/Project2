// bringing in react from npm package.JSON
import React from 'react';
import axios from 'axios';
import ElementList from './ElementList';


// Define our App component calss
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userSearch: "",
      ListOfElement: [],
      theState: false,
      fav: [],
      cal: [0, 0],
      calories: [] ,
      checkDelete : []
    }

  }




  handelSearchChange = (e) => {

    let textValue = e.target.value;

    if (textValue.includes(" ")) {

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


  handleFaveToggle = (food) => {
    const faves = [...this.state.fav];

    faves.push(food);

    this.setState({ fav: faves });

  }



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


  handleDeleteToggle = (TheIndex) => {

    const deleteItem = [this.state.fav];

    let item = deleteItem[0];

    item.splice(TheIndex, 1)

    this.setState({
      fav: item
    })

  }



  handleDeleteALL = () => {

    this.setState({
      fav: []
    })

  }

  handleAddChecked = (TheIndex) => {

    const elmentChicked = [...this.state.checkDelete];

    elmentChicked.push(TheIndex);

    this.setState({
      checkDelete : elmentChicked 
    })


  }


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



  // What should the component render 
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
          <h2> Search to know the calories of the food </h2>
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
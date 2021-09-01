import React, { Component } from 'react';
import CatInfo from './CatInfo';



class App extends Component {

  
state = {
  cats: '',
  searchUrl: '',
  baseUrl: 'https://api.thecatapi.com/v1/images/search',
  apiKey: 'fd55d926-6fea-4581-aaa2-a4be59791716',
  query: 'attach_breed',
  catData: [],
}

handleChange = (event)=> {
  this.setState({
    cats: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.setState({searchUrL: this.state.baseUrl + this.state.apiKey + this.state.query + this.state.cats}, ()=>{
      fetch(this.state.baseUrl)
      .then(response => response.json())
      .then(cat => {
          this.setState({
              catData: cat})
      })
      .catch(error => console.log(error))
  })

}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title"
            value={this.state.cats}
            onChange={this.handleChange} 
          />
          <button type="submit">Submit</button>
        </form>
      { this.catData.map()
        <CatInfo catbreed={this.state.catData}/>
      } 
      </div>
    );
  }
}

export default App;
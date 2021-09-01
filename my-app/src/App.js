import { data } from 'browserslist';
import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {

state = {
  data : [],
  input : 'arsalan2243',
}

componentDidMount() {
  axios.get('https://api.github.com/users/ehsan2793')
  .then(response => {this.setState({data: [response.data]})})
  .catch(error => console.error('error'));
}


handleSubmit = (event) => {
  event.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.input}`)
  .then(response => {this.setState(
    {data:[response.data]})})
    .catch(error => console.log(error))

}
handleChange = (event) => {
const {name, value} = event.target;
this.setState({
[name]: value

})

}


  render() {
 



    return (
      <div className="App">
          <div>
            <h1>Welcome to Github Card</h1>
            <p>this is the place where you can find your github card</p>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="input" value={this.state.input} type="text"placeholder="type your github login"/>
              <button>click</button>
            </form>

            <br/>
          </div>
          {
              this.state.data.map(item => { return <div key={new Date().setMilliseconds} className="cardContainer">
              <div>
                <img width="300" height="300"src={item['avatar_url']}/>
              </div>
              <div className="textContiner">
                  <p>Name: {(item.name !== null)?`${item.name}` : 'no name' } </p>
                  <p>Login: {item.login} </p>
                  <p>Id: {item.id} </p>
                  <p>Number of Folloers: {item.followers}  </p>
  
              </div>
            </div>})
            }

            




      </div>
    )
  }
}

export default App;

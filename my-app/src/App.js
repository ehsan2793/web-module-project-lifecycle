import React from 'react';
import './App.css';

class App extends React.Component {







  render() {
    return (
      <div className="App">
          <div>
            <h1>Welcome to Github Card</h1>
            <p>this is the place where you can find your github card</p>
            <form>
              <input placeholder="write name here"/>
              <button>click</button>
            </form>

            <br/>
          </div>
          <div className="cardContainer">
            <div>
              <img width="300" height="300"src="https://avatars.githubusercontent.com/u/84936400?v=4"/>
            </div>
            <div className="textContiner">
                <p>Name: </p>
                <p>Login: </p>
                <p>Id: </p>
                <p>Number of Folloers:  </p>

            </div>
          </div>

         
      </div>
    )
  }
}

export default App;

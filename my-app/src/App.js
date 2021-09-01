import { data } from 'browserslist';
import React from 'react';
import './App.css';

class App extends React.Component {

// state = {
//   data :
// }





  render() {
    const data = [{
      login: "ehsan2793",
      id: 84936400,
      node_id: "MDQ6VXNlcjg0OTM2NDAw",
      avatar_url: "https://avatars.githubusercontent.com/u/84936400?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ehsan2793",
      html_url: "https://github.com/ehsan2793",
      followers_url: "https://api.github.com/users/ehsan2793/followers",
      following_url: "https://api.github.com/users/ehsan2793/following{/other_user}",
      gists_url: "https://api.github.com/users/ehsan2793/gists{/gist_id}",
      starred_url: "https://api.github.com/users/ehsan2793/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ehsan2793/subscriptions",
      organizations_url: "https://api.github.com/users/ehsan2793/orgs",
      repos_url: "https://api.github.com/users/ehsan2793/repos",
      events_url: "https://api.github.com/users/ehsan2793/events{/privacy}",
      received_events_url: "https://api.github.com/users/ehsan2793/received_events",
      type: "User",
      site_admin: false,
      name: "Ehsan Rahimi",
      company: null,
      blog: "",
      location: "California ",
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 41,
      public_gists: 0,
      followers: 1,
      following: 1,
      created_at: "2021-05-27T19:41:56Z",
      updated_at: "2021-08-31T15:53:10Z"
      }]



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
          {
              data.map(item => { return <div key={new Date().setMilliseconds} className="cardContainer">
              <div>
                <img width="300" height="300"src={item['avatar_url']}/>
              </div>
              <div className="textContiner">
                  <p>Name: {item.name} </p>
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

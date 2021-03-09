import React from 'react';
import Github from './Github';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    githubUsers: [],
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/SpicyLunchbox')
      .then(res => {
        this.setState({
          githubUsers: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
    axios.get(`https://api.github.com/users/SpicyLunchbox/followers`)
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
      .catch(err => {
        console.log(err);
      })
    }
  

  render() {
    return (
      <div className="App">
        <Github githubUsers={this.state.githubUsers} followers={this.state.followers}/>
      </div>
    )
  }




}




export default App;

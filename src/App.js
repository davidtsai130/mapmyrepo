import React, { Component } from 'react';
import User from './containers/User'
import Repos from './containers/Repos'
import Maps from './containers/Maps'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
				<User />
				<Repos />
				<Maps />
			</div>
    );
  }
}

export default App;

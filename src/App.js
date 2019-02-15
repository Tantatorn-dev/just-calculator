import React, { Component } from 'react';
import {Provider} from 'react-redux'; 
import {createStore} from 'redux';

import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

import displayNumber from './reducers';

const store = createStore(displayNumber);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Display/>
        <Buttons/>
      </Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { Card, Grid } from '@material-ui/core'

import displayNumber from './reducers';

const store = createStore(displayNumber);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Grid container spacing={0}>
            <Grid xs1 />
            <Grid xs10>
              <Card id="my-calculator">
                <Display />
                <Buttons />
              </Card>
            </Grid>
            <Grid xs1 />
          </Grid>
        </Provider>
      </div>
    );
  }
}

export default App;

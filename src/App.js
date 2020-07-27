import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ProfileScreen from './screens/Profile';
import reducers from './reducers';
const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default class App extends Component {  
  render() {
    return (
      <Provider store={store}>
         <ProfileScreen />
      </Provider>
    );
  }
}
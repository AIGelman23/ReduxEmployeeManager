import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAiAXWP2Cw0E8-qVBJb1cbcdJnRfs1zZ9c',
      authDomain: 'manager-a6fdb.firebaseapp.com',
      databaseURL: 'https://manager-a6fdb.firebaseio.com',
      projectId: 'manager-a6fdb',
      storageBucket: 'manager-a6fdb.appspot.com',
      messagingSenderId: '1050590768007',
      appId: '1:1050590768007:web:da567e3dc96a041c374122',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

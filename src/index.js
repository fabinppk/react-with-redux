import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducerButton from './reducers/userButton-reducer';
import userReducerInput from './reducers/userInput-reducer';

const allReducers = combineReducers({
  products: productsReducer,
  userButton: userReducerButton,
  userInput: userReducerInput
});

const store = createStore(
  allReducers,
  {
    products: [{ name: "Iphone" }],
    userButton: "-",
    userInput: "-"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());
//
// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: "John"
//   }
// }
//
// store.dispatch(updateUserAction);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App prop="Alguma coisa"/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

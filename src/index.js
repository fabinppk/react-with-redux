import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { products_list } from './products_list';
import productsReducer from './reducers/products-reducer';
import userReducerButton from './reducers/userButton-reducer';
import userReducerInput from './reducers/userInput-reducer';
import totalPrice from './reducers/totalPrice-reducer';

const allReducers = combineReducers({
  products: productsReducer,
  userButton: userReducerButton,
  userInput: userReducerInput,
  totalPrice: totalPrice
});

const store = createStore(
  allReducers,
  {
    products: products_list,
    userButton: "-",
    userInput: "-",
    totalPrice: 0
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

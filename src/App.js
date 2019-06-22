import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { items } from "./reducers";

import "./App.css";

import ButtonArea from "./ButtonArea";
import Square from "./Square";

const reducers = combineReducers({
  items
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const createSquares = num => {
  const items = [];
  for (let i = 0; i < num; ++i) {
    items.push(<Square key={i} item={"item" + i} />);
  }
  return items;
};

const squares = createSquares(5000);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ButtonArea>{squares}</ButtonArea>
      </div>
    </Provider>
  );
}

export default App;

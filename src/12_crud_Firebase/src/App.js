import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "./redux/configureStore";
import Root from "./Root";
import './App.css';

const store = configureStore();

function App() {
 return(
   <Provider store={store}>
     <Router>
       <Root/>
     </Router>
   </Provider>
 );
}

export default App;
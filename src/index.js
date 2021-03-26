import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Redux store
import store from "./store";
import { Provider } from "react-redux";

//Router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from "./Components/Main/main"
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import newTask from "././Components/newTask/newTask"
import page404 from "././Components/Error404/page404"

class App extends Component {


  render() {

    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/newTask" exact component={newTask} />
            <Route  component={page404} />
          </Switch>
          <Footer />
        </Router>
      </Provider>

    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))
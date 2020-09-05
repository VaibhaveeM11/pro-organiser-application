import React from 'react';
import './App.css';
import Navbar from './NavigationBar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Create from './Pages/CreateBoard/CreateBoard';
import Board from './Pages/Board/Board';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/createboard" component={Create}/>
      <Route path="/board/:boardid" component={Board}/>
      <Route exact path="*" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;

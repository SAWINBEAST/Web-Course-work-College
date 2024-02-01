//import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import './App.css'; // Подключение общих стилей

function App() {
  return (
    //<Router>
      //<Switch>
        //<Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        //</Route>
      //</Switch>
    //</Router>
  );
}

export default App;

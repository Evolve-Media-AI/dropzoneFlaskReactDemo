import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Dropzone from './components/Dropzone'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route exact={true} path="/">
                <Home />
              </Route>
              <Route exact={true} path="/dropzone">
                <Dropzone />
              </Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Layout } from './components/layout';
import { OrderTable } from './components/order-table';

import { PopupHost } from './components/openfin/popup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/popup"><PopupHost><div/></PopupHost></Route>
        <Route path="/in-page"><Layout><OrderTable dialog={false}/></Layout></Route>
        <Route path="/dialog"><Layout><OrderTable dialog={true}/></Layout></Route>
        <Route path="/"><Redirect to="/in-page" /></Route>
      </Switch>
    </Router>
  );
}

export default App;
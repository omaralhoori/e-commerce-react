import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/home/homepage'
import ShopePage from './pages/shop/shoppage'
import Header from './components/header/header'

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;

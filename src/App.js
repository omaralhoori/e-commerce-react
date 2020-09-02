import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/home/homepage'
import ShopePage from './pages/shop/shoppage'
import LoginRegisterPage from './pages/login-register/login-registerpage'

import Header from './components/header/header'

import { auth } from './firebase/firebase.utils'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopePage} />
          <Route path='/signin' component={LoginRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

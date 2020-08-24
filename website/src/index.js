
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Login from './components/views/Admin/Login'
import SignUp from './components/views/Admin/Signup'
import Dashboard from './components/views/Admin/Dashboard'

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <App />} />
      <Route path='/Login' render={() => <Login />} />
      <Route path='/Signup' render={() => <SignUp />} />
      <Route path='/Dashboard' render={() => <Dashboard />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
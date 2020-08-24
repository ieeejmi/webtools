import React from 'react'
import fire from './config/Fire'
import Login from './views/Admin/Login'
import Dashboard from './views/Admin/Dashboard'

export default function App() {

  const [user, setUser] = React.useState(null);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      // session start
    }
    else {
      setUser(null);
    }
  })
  
  return (
    <div>
      {
        user ? <Dashboard /> : <Login />
      }
    </div>
  )

}
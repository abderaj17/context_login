import React from 'react'
import '../src/App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
 <UserContextProvider>
  <h1>Hello AB!</h1>
  <Login />
  <Profile />
 </UserContextProvider>
  )
}

export default App
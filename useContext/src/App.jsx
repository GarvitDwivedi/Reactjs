import React from 'react';
import UserContextProvider from './context/UserContexProvider';
import Login from './component/login';
import Profile from './component/profile';

function App() {

  return (
    <UserContextProvider>
      <h1>Helloe</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    
  )
}

export default App

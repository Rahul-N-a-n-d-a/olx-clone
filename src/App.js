import React, { useContext, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost';
import { authContext } from './Context/FirebaseContext';
import { auth } from './Firebase/Config';
import { PostContext } from './Context/ProductContext';

function App() {
  const { setUser } = useContext(authContext)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
    })

  })
  return (
    <div>
      <PostContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/viewpost' element={<ViewPost />} />
        </Routes>
      </PostContext>
    </div>
  );
}

export default App;

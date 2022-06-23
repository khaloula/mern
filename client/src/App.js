import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>khalil App</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

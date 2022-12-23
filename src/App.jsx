import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar'
import Details from './page/Details'
import Meals from './page/Meals'


const App = () => {
  return <div className='container mx-auto relative'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Meals/> }/>
      <Route path='/detail/:id' element={<Details/>}/>
    </Routes>
  </div>
}

export default App
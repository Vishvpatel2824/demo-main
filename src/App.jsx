import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

  const user = {
    name: 'vishv patel',
    age: 21
  }

  function getData(data){
    console.log(data)
  }

  return (
    <div>
        <BrowserRouter>
        <h1>hello welcom to my app.....</h1>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home user={user}/>}/>
            <Route path='/about' element={<About getData={getData}/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

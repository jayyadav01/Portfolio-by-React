import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Code from './Code'
import Work from './Work'
import Education from './Education'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Educationcontent from './Educationcontent'
import Internship from './Internship'


function Main() {
  return (
    <div>
      <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Code' element={<Code/>}></Route>
                <Route path='/Work' element={<Work/>}></Route>
                <Route path='/Portfolio' element={<Portfolio/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>

                <Route path='/Education' element={<Education/>}>
                  <Route path='/Education' element={<Educationcontent/>}></Route>
                  <Route path='/Education/Internship' element={<Internship/>}></Route>
                </Route>

            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main

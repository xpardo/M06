import React, { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import Menu from './Menu'
import About from './vistes/About'
import Tickets from './Tickets/Tickets'
import Login from './vistes/Login'
import { UserContext } from './UserContext'
import Header from './Common/Header'
import Footer from './Common/Footer'
const App = () => {


  const state = useState("xepaul@fp.insjoaquimmir.cat")

  const [ usuari, setUsuari ] = state

  

  return (
    <>
    <div><Header/></div>

      <UserContext.Provider value= {{ usuari,setUsuari } }>
        <Routes>
            <Route path="/" element={ <Menu  />}>
               
                <Route index element= {  usuari != "" ? <Tickets  /> : <Login/>} />
                <Route path="about" element= {<About/>} />
                <Route path="login" element= {<Login />} />
                <Route path="*" element= {<Tickets/>} />
            </Route>
        </Routes>
      </UserContext.Provider>
      
      <div><Footer/></div>
  </>
  )
}

export default App
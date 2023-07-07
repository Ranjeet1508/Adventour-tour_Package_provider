import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../Components/SignUp_Login/SignUp'
import Login from '../Components/SignUp_Login/Login'


function AllRoutes() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route />
    </Routes>
  )
}

export default AllRoutes
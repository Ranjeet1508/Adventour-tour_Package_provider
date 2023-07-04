import React from 'react'
import { Route, Routes } from 'react-router-dom'


function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route />
      <Route />
      <Route />
    </Routes>
  )
}

export default AllRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Thankyou from '../Components/Payment/Thankyou'
import Payment from '../Components/Payment/Payment'
import Home from '../Components/Homepage/Home'


function AllRoutes() {
  return (
    <div>
<Routes>

    <Route path='/' element={<Home/>}/>
    {/* <Route path='/tourdetail/:location/:id' element={<Tourdetail/>}/> */}
    {/* <Route path='/signup' element={<Signup/>}/> */}
    <Route path='/payment/:location/:id' element={<Payment/>}/>
    {/* <Route path='/tourlist/:location' element={<Tourlist/>}/>
    <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/services' element={<Services />} /> */}
    <Route path='/payment-successful' element={<Thankyou/>}/>
  
 </Routes>
    </div>
  )
}

export default AllRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Thankyou from '../Components/Payment/Thankyou'
import Payment from '../Components/Payment/Payment'
import Home from '../Components/Homepage/Home'
import Login from '../Components/SignUp_Login/Login'
import Signup from '../Components/SignUp_Login/SignUp'
import TourList from '../Components/TourList/TourList'
import TourDetails from '../Components/TourDetails/TourDetails'

function AllRoutes() {
  return (
    <div>
<Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/tourdetail/:location/:id' element={<TourDetails/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/payment/:location/:id' element={<Payment/>}/>
    <Route path='/tourlist/:location' element={<TourList/>}/>
    <Route path='/login' element={<Login/>}/>
    {/* <Route path='/services' element={<Services />} /> */}
    <Route path='/payment-successful' element={<Thankyou/>}/>
  
 </Routes>
    </div>
  )
}

export default AllRoutes
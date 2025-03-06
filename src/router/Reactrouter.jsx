import React from 'react'
import Navbar from '../nav/Navbar'
import Loginp from '../loginp/Loginp'
import Signup from '../signup/Signup'
import ForgetPass from '../forget/ForgetPass'
import Profilenew from '../components/Profilenew'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Welcome from '../welcome/Welcome'
import Payment from '../payement/Payment'
import Payment2 from '../payement/Payment2'
 import Aboutus from '../aboutus/Aboutus'
 import Appmenu from '../appmenu/Appmenu'
import Complete from '../complete/Complete'
const Reactrouter = () => {
  

  
  return (
    
    <BrowserRouter>
    <Routes>
   <Route path="/nav" element={<Navbar/>}/>
   <Route path="/" element={<Loginp/>}/>
   <Route path="/Profilenew" element={<Profilenew/>}/>
   <Route path="/Signup" element={<Signup/>}/>
   <Route path="/ForgetPass" element={<ForgetPass/>}/>
   <Route path="/Payment" element={<Payment/>}/>
   <Route path="/Appmenu" element={<Appmenu/>}/>
   <Route path="/Aboutus" element={<Aboutus/>}/>
   <Route path="/Payment2" element={<Payment2/>}/>
   <Route path="/Complete" element={<Complete/>}/>
  </Routes>
    </BrowserRouter>
    
  )
}

export default Reactrouter
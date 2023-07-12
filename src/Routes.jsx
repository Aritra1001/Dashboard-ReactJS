import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Orders from './Components/Orders';
import Products from './Components/Products';
import Customers from './Components/Customers';
import Reports from './Components/Reports';
import Settings from './Components/Settings';
import Support from './Components/Support';

const RouterCompo = () => {
  return (
    <>
    
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/customers' element={<Customers/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/support' element={<Support/>}/>
            </Routes>
  
    </>
  )
}

export default RouterCompo
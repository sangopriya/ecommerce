import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/layout/index'
import Home from './Components/pages/Home'
import Item from './Components/pages/Item'
import ItemOverview from './Components/pages/ItemOverview'
import Cart from './Components/pages/Cart'
import Order from './Components/pages/Order'

export default function App() {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Layout/>}>
             <Route index element={<Home />} />
             <Route path='/category/:id' element={<Item />} />
             <Route path='/item/:id' element={<ItemOverview />} />
             <Route path='/cart' element={<Cart />} />
             <Route path='/order' element={<Order />} />
        </Route>
    </Routes>
   </Router>
  )
}

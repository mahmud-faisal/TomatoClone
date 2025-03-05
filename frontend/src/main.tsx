import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter, Routes, Route } from "react-router";
import Cart from './pages/cart/Cart.tsx';
import PlaceOrder from './pages/placeOrder/PlaceOrder.tsx';
import Home from './pages/home/Home.tsx';
import { Router } from 'react-router';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/place-order' element={<PlaceOrder/>} />
    </Route>
    

  </Routes>
</BrowserRouter>
)

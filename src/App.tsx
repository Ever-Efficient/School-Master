// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Add from './pages/Admin/add-product'
import Products from './pages/Admin/products'
import Orders from './pages/Admin/orders'

export default function App() {
  return (
   

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<Add />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Routes>
   
  )
}

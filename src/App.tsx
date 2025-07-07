// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Add from './pages/Admin/add-product'
import Products from './pages/Admin/products'
import Orders from './pages/Admin/orders'
import Customers from './pages/Admin/customers'
import Category from './pages/Admin/Category'

export default function App() {
  return (
   

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<Add />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/category" element={<Category />} />
        </Routes>
   
  )
}

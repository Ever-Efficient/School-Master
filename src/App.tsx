// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'

export default function App() {
  return (
   

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
   
  )
}

import {  BarChart3, LogOut, Package, Plus, ShoppingCart, Tag, Users } from "lucide-react"
import { Link } from "react-router-dom"
export default function Sidebar() {
  return (
    <div>
        <div className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col">
          <div className="p-6 border-b border-[#e5e7eb]">
            <h1 className="text-xl font-bold text-[#111827]">School Master</h1>
            <p className="text-sm text-[#6b7280]">Admin Dashboard</p>
          </div>
  
          <nav className="flex-1 p-4 space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-[#2563eb] bg-[#dbeafe] rounded-lg">
              <BarChart3 className="w-5 h-5" />
           
              <Link to="/admin">Dashboard</Link>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Package className="w-5 h-5" />
             
              <Link to="/admin/products">Products</Link>

            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              
              <Link to="/admin/orders">Orders</Link>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Users className="w-5 h-5" />
             
              <Link to="/admin/Customers">Customers</Link>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Tag className="w-5 h-5" />
             
              <Link to="/admin/categories">Categories</Link>
            </div>
{/*   
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Plus className="w-5 h-5" />
              <Link to="/admin/add">Add New Product</Link>
            </div>
   */}
  
            {/* <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div> */}
          </nav>
  
          <div className="p-4 border-t border-[#e5e7eb]">
            <div className="flex items-center gap-3 px-3 py-2 text-[#ef4444] hover:bg-[#fef2f2] rounded-lg cursor-pointer">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

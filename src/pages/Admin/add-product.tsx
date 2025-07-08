import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"

export default function AddProductPage() {
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    stock: 0,
    status: "Active",
    image: "/placeholder.svg?height=40&width=40",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [id]: id === "stock" || id === "price" ? Number(value) : value,
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    if (!product.id || !product.name || !product.category || !product.price) {
      alert("Please fill required fields: ID, Name, Category, Price")
      return
    }

    // Determine stock status
    const status =
      product.stock === 0
        ? "Out of Stock"
        : product.stock < 5
        ? "Critical"
        : product.stock < 10
        ? "Low Stock"
        : "Active"

    const newProduct = { ...product, status }

    const existing = JSON.parse(localStorage.getItem("productList") || "[]")
    localStorage.setItem("productList", JSON.stringify([...existing, newProduct]))

    alert("Product saved successfully!")
    navigate("/admin/products")
  }

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/admin/products">
              <Button variant="outline" size="sm" className="border-[#d1d5db] bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Add New Product</h2>
              <p className="text-[#6b7280]">Create a new product for your school uniform store</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Product Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input  className=" border border-zinc-500" id="name" value={product.name} onChange={handleInputChange} placeholder="e.g., School Shirt - White" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="id">Product Code</Label>
                      <Input  className=" border border-zinc-500" id="id" value={product.id} onChange={handleInputChange} placeholder="e.g., PRD-001" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea  className=" border border-zinc-500" id="description" value={product.description} onChange={handleInputChange} placeholder="Enter product description..." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div  className="space-y-2">
                      <Label  htmlFor="category">Category</Label>
                      <Select  onValueChange={(val) => handleSelectChange("category", val)}>
                        <SelectTrigger>
                          <SelectValue  placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Shirts">Shirts</SelectItem>
                          <SelectItem value="Trousers">Trousers</SelectItem>
                          <SelectItem value="Skirts">Skirts</SelectItem>
                          <SelectItem value="Blazers">Blazers</SelectItem>
                          <SelectItem value="Accessories">Accessories</SelectItem>
                          <SelectItem value="Footwear">Footwear</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Input  className=" border border-zinc-500" id="brand" value={product.brand} onChange={handleInputChange} placeholder="e.g., School Master" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Pricing & Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (Rs)</Label>
                      <Input  className=" border border-zinc-500" id="price" type="number" value={product.price} onChange={handleInputChange} placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input  className=" border border-zinc-500" id="stock" type="number" value={product.stock} onChange={handleInputChange} placeholder="0" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input  className=" border border-zinc-500" id="image" value={product.image} onChange={handleInputChange} placeholder="Image URL or leave as default" />
                  <div className="border-2 border-dashed border-[#d1d5db] rounded-lg p-8 text-center mt-4">
                    <Upload className="w-12 h-12 text-[#9ca3af] mx-auto mb-4" />
                    <div className="text-[#6b7280] mb-2">
                      <span className="font-medium text-[#2563eb] cursor-pointer">Click to upload</span> or drag and drop
                    </div>
                    <div className="text-sm text-[#9ca3af]">PNG, JPG, GIF up to 10MB</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Product Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select onValueChange={(val) => handleSelectChange("status", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder={product.status} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Low Stock">Low Stock</SelectItem>
                        <SelectItem value="Critical">Critical</SelectItem>
                        <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button className="w-full bg-[#2563eb] hover:bg-[#1e40af] text-white" onClick={handleSave}>
                  Save Product
                </Button>
                <Button variant="outline" className="w-full border-[#d1d5db] bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

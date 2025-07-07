import { ArrowLeft, BarChart3, LogOut, Package, Plus, Settings, ShoppingCart, Star, Tag, Upload, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

import { Link } from "react-router-dom"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"



export default function AddProductPage() {
  return (
    <div className="flex h-screen bg-[#f9fafb]">
        <Sidebar/>
    
        
  
      <div className="flex-1 flex flex-col">
        <Header/>
     

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/products">
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
                      <Label htmlFor="productName" className="text-[#374151]">
                        Product Name
                      </Label>
                      <Input
                        id="productName"
                        placeholder="e.g., School Shirt - White"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="productCode" className="text-[#374151]">
                        Product Code
                      </Label>
                      <Input
                        id="productCode"
                        placeholder="e.g., PRD-001"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-[#374151]">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Enter product description..."
                      className="border-[#d1d5db] focus:border-[#2563eb] min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-[#374151]">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger className="border-[#d1d5db] focus:border-[#2563eb]">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shirts">Shirts</SelectItem>
                          <SelectItem value="trousers">Trousers</SelectItem>
                          <SelectItem value="skirts">Skirts</SelectItem>
                          <SelectItem value="blazers">Blazers</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                          <SelectItem value="footwear">Footwear</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand" className="text-[#374151]">
                        Brand
                      </Label>
                      <Input
                        id="brand"
                        placeholder="e.g., School Master"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Pricing & Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price" className="text-[#374151]">
                        Price (Rs)
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="0.00"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comparePrice" className="text-[#374151]">
                        Compare at Price (Rs)
                      </Label>
                      <Input
                        id="comparePrice"
                        type="number"
                        placeholder="0.00"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="costPrice" className="text-[#374151]">
                        Cost per Item (Rs)
                      </Label>
                      <Input
                        id="costPrice"
                        type="number"
                        placeholder="0.00"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sku" className="text-[#374151]">
                        SKU
                      </Label>
                      <Input
                        id="sku"
                        placeholder="e.g., SS-WHT-M"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="barcode" className="text-[#374151]">
                        Barcode
                      </Label>
                      <Input
                        id="barcode"
                        placeholder="e.g., 1234567890123"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="trackQuantity" />
                      <Label htmlFor="trackQuantity" className="text-[#374151]">
                        Track quantity
                      </Label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity" className="text-[#374151]">
                        Quantity
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="0"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lowStockThreshold" className="text-[#374151]">
                        Low Stock Threshold
                      </Label>
                      <Input
                        id="lowStockThreshold"
                        type="number"
                        placeholder="10"
                        className="border-[#d1d5db] focus:border-[#2563eb]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-[#d1d5db] rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-[#9ca3af] mx-auto mb-4" />
                    <div className="text-[#6b7280] mb-2">
                      <span className="font-medium text-[#2563eb] cursor-pointer">Click to upload</span> or drag and
                      drop
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
                    <Label htmlFor="status" className="text-[#374151]">
                      Status
                    </Label>
                    <Select>
                      <SelectTrigger className="border-[#d1d5db] focus:border-[#2563eb]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="featured" />
                      <Label htmlFor="featured" className="text-[#374151]">
                        Featured product
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="requiresShipping" />
                      <Label htmlFor="requiresShipping" className="text-[#374151]">
                        This product requires shipping
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Product Variants</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hasVariants" />
                      <Label htmlFor="hasVariants" className="text-[#374151]">
                        This product has multiple options, like different sizes or colors
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[#374151]">Size Options</Label>
                    <div className="flex flex-wrap gap-2">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox id={`size-${size}`} />
                          <Label htmlFor={`size-${size}`} className="text-sm text-[#374151]">
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button className="w-full bg-[#2563eb] hover:bg-[#1e40af]">Save Product</Button>
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

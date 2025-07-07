import { Search, Filter, Plus, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"
import { Link } from "react-router-dom"



const products = [
  {
    id: "PRD-001",
    name: "School Shirt - White",
    category: "Shirts",
    price: "Rs 2,450",
    stock: 45,
    status: "Active",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "PRD-002",
    name: "School Trouser - Navy",
    category: "Trousers",
    price: "Rs 3,200",
    stock: 23,
    status: "Active",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "PRD-003",
    name: "School Tie - Blue",
    category: "Accessories",
    price: "Rs 850",
    stock: 8,
    status: "Low Stock",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "PRD-004",
    name: "School Skirt - Size M",
    category: "Skirts",
    price: "Rs 2,800",
    stock: 3,
    status: "Critical",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "PRD-005",
    name: "School Blazer - Navy",
    category: "Blazers",
    price: "Rs 4,500",
    stock: 15,
    status: "Active",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "PRD-006",
    name: "School Shoes - Black",
    category: "Footwear",
    price: "Rs 3,800",
    stock: 0,
    status: "Out of Stock",
    image: "/placeholder.svg?height=40&width=40",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Products</h2>
              <p className="text-[#6b7280]">Manage your school uniform inventory</p>
            </div>
            <Link to="/admin/add">
              <Button className="bg-[#2563eb] text-white hover:bg-[#1e40af]">
                <Plus className="w-4 h-4 mr-2" />
                Add New Product
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#111827]">89</div>
                <div className="text-sm font-semibold text-[#6b7280]">Total Products</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#16a34a]">76</div>
                <div className="text-sm font-semibold text-[#6b7280]">Active Products</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#ea580c]">7</div>
                <div className="text-sm text-[#6b7280] font-semibold">Low Stock</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#dc2626]">6</div>
                <div className="text-sm text-[#6b7280] font-semibold">Out of Stock</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="border-[#e5e7eb] mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
                  <Input placeholder="Search products..." className="pl-10 border-[#d1d5db]" />
                </div>
                <Button variant="outline" className="border-[#d1d5db] bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Products Table */}
          <Card className="border-[#e5e7eb]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#111827]">All Products</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#e5e7eb]">
                    <TableHead className="text-[#6b7280]">Product</TableHead>
                    <TableHead className="text-[#6b7280]">Category</TableHead>
                    <TableHead className="text-[#6b7280]">Price</TableHead>
                    <TableHead className="text-[#6b7280]">Stock</TableHead>
                    <TableHead className="text-[#6b7280]">Status</TableHead>
                    <TableHead className="text-[#6b7280]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id} className="border-[#e5e7eb]">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-10 h-10 rounded-lg bg-[#f3f4f6]"
                          />
                          <div>
                            <div className="font-medium text-[#111827]">{product.name}</div>
                            <div className="text-sm text-[#6b7280]">{product.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">{product.category}</TableCell>
                      <TableCell className="font-medium text-[#111827]">{product.price}</TableCell>
                      <TableCell className="text-[#6b7280]">{product.stock}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            product.status === "Active"
                              ? "bg-[#dcfce7] text-[#166534] hover:bg-[#dcfce7]"
                              : product.status === "Low Stock"
                                ? "bg-[#fff7ed] text-[#ea580c] hover:bg-[#fff7ed]"
                                : product.status === "Critical"
                                  ? "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fee2e2]"
                                  : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#f3f4f6]"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#6b7280] hover:text-[#111827]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#6b7280] hover:text-[#111827]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#ef4444] hover:text-[#dc2626]">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

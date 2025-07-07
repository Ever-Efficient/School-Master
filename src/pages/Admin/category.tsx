import { Search, Plus, Edit, Trash2, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"


const categories = [
  {
    id: "CAT-001",
    name: "Shirts",
    description: "School shirts in various sizes and colors",
    productCount: 15,
    status: "Active",
    createdDate: "Jan 15, 2024",
  },
  {
    id: "CAT-002",
    name: "Trousers",
    description: "School trousers and pants",
    productCount: 12,
    status: "Active",
    createdDate: "Jan 15, 2024",
  },
  {
    id: "CAT-003",
    name: "Skirts",
    description: "School skirts in different sizes",
    productCount: 8,
    status: "Active",
    createdDate: "Jan 20, 2024",
  },
  {
    id: "CAT-004",
    name: "Blazers",
    description: "School blazers and jackets",
    productCount: 6,
    status: "Active",
    createdDate: "Feb 01, 2024",
  },
  {
    id: "CAT-005",
    name: "Accessories",
    description: "Ties, belts, and other accessories",
    productCount: 18,
    status: "Active",
    createdDate: "Feb 10, 2024",
  },
  {
    id: "CAT-006",
    name: "Footwear",
    description: "School shoes and sports shoes",
    productCount: 10,
    status: "Active",
    createdDate: "Mar 01, 2024",
  },
  {
    id: "CAT-007",
    name: "Sports Wear",
    description: "PE uniforms and sports equipment",
    productCount: 14,
    status: "Active",
    createdDate: "Mar 15, 2024",
  },
  {
    id: "CAT-008",
    name: "Bags",
    description: "School bags and backpacks",
    productCount: 6,
    status: "Inactive",
    createdDate: "Apr 01, 2024",
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Categories</h2>
              <p className="text-[#6b7280]">Organize your products into categories</p>
            </div>
            <Button className="bg-[#2563eb] text-white hover:bg-[#1e40af]">
              <Plus className="w-4 h-4 mr-2" />
              Add New Category
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 font-semibold gap-6 mb-6">
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#111827]">8</div>
                <div className="text-sm text-[#6b7280]">Total Categories</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#16a34a]">7</div>
                <div className="text-sm text-[#6b7280]">Active Categories</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#2563eb]">89</div>
                <div className="text-sm text-[#6b7280]">Total Products</div>
              </CardContent>
            </Card>
            
          </div>

          {/* Search */}
          <Card className="border-[#e5e7eb] mb-6">
            <CardContent className="p-4">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
                <Input placeholder="Search categories..." className="pl-10 border-[#d1d5db]" />
              </div>
            </CardContent>
          </Card>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="border-[#e5e7eb] hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-[#2563eb]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-[#111827]">{category.name}</CardTitle>
                        <p className="text-sm text-[#6b7280]">{category.id}</p>
                      </div>
                    </div>
                    <Badge
                      className={
                        category.status === "Active"
                          ? "bg-[#dcfce7] text-[#166534] hover:bg-[#dcfce7]"
                          : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#f3f4f6]"
                      }
                    >
                      {category.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#6b7280] text-1lg  mb-4">{category.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-[#6b7280]">
                      <span className="font-medium text-[#111827]">{category.productCount}</span> products
                    </div>
                    <div className="text-sm text-[#6b7280]">Created {category.createdDate}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-[#d1d5db] bg-transparent">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#ef4444] border-[#ef4444] hover:bg-[#fef2f2] bg-transparent"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

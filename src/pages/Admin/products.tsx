import { useEffect, useState } from "react"
import {
  Search,  Plus, Edit, Trash2, Eye
} from "lucide-react"
import {
  Button
} from "@/components/ui/button"
import {
  Input
} from "@/components/ui/input"
import {
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import {
  Badge
} from "@/components/ui/badge"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"
import { Link } from "react-router-dom"
import ProductEditModal from "@/components/admin-layout/ProductEditModal"

const initialProducts = [
  {
    id: "PRD-001",
    name: "School Shirt - White",
    category: "Shirts",
    price: "Rs 2,450",
    stock: 45,
    status: "Active",
    image: "https://e7.pngegg.com/pngimages/447/732/png-clipart-white-crew-neck-t-shirt-t-shirt-white-sleeve-hanes-t-shirts-tshirt-active-shirt-thumbnail.png",
  },
  {
    id: "PRD-002",
    name: "School Trouser - Navy",
    category: "Trousers",
    price: "Rs 3,200",
    stock: 23,
    status: "Active",
    image: "https://e7.pngegg.com/pngimages/573/83/png-clipart-trousers-formal-wear-suit-trouser-s-waistcoat-waist-thumbnail.png",
  },
  {
    id: "PRD-003",
    name: "School Tie - Blue",
    category: "Accessories",
    price: "Rs 850",
    stock: 8,
    status: "Low Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4h1u25IqKScnzkGE73Ohkfm-RQdKzcllXBQ&s",
  },
  {
    id: "PRD-004",
    name: "School Skirt - Size M",
    category: "Skirts",
    price: "Rs 2,800",
    stock: 3,
    status: "Critical",
    image: "https://png.pngtree.com/png-vector/20241230/ourmid/pngtree-blue-school-uniform-with-short-sleeves-and-pleated-skirt-png-image_14939718.png",
  },
  {
    id: "PRD-005",
    name: "School Blazer - Navy",
    category: "Blazers",
    price: "Rs 4,500",
    stock: 15,
    status: "Active",
    image: "https://www.pngkey.com/png/detail/279-2792617_free-png-blazer-png-images-transparent-school-uniform.png",
  },
  {
    id: "PRD-006",
    name: "School Shoes - Black",
    category: "Footwear",
    price: "Rs 3,800",
    stock: 0,
    status: "Out of Stock",
    image: "https://www.vhv.rs/dpng/d/476-4762177_pep-school-shoes-price-png-download-bata-toughees.png",
  },
]

export default function ProductsPage() {

  const [searchTerm, setSearchTerm] = useState("")
  const [editingProduct, setEditingProduct] = useState(null)

  const [productList, setProductList] = useState(() => {
    const saved = localStorage.getItem("productList")
    if (saved) {
      return JSON.parse(saved)
    } else {
      localStorage.setItem("productList", JSON.stringify(initialProducts))
      return initialProducts
    }
  })
  
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList))
  }, [productList])

  useEffect(() => {
    const saved = localStorage.getItem("productList")
    if (saved) setProductList(JSON.parse(saved))
  }, [])
  
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList))
  }, [productList])

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?")
    if (confirmDelete) {
      setProductList((prev) => prev.filter((product) => product.id !== id))
    }
  }

  const handleSave = (updatedProduct: any) => {
    setProductList((prev) =>
      prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    )
    setEditingProduct(null)
  }

  const filteredProducts = productList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const statusStyles: Record<string, string> = {
    Active: "bg-[#dcfce7] text-[#166534] hover:bg-[#dcfce7]",
    "Low Stock": "bg-[#fff7ed] text-[#ea580c] hover:bg-[#fff7ed]",
    Critical: "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fee2e2]",
    "Out of Stock": "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#f3f4f6]",
  }

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

          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 border-[#d1d5db]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* <Button variant="outline" className="border-[#d1d5db] bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button> */}
          </div>

          <Card className="border-[#e5e7eb]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#111827]">All Products</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#e5e7eb]">
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id} className="border-[#e5e7eb]">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                             
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
                          <Badge className={statusStyles[product.status] || ""}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#6b7280] hover:text-[#111827]"
                              onClick={() => setEditingProduct(product)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#ef4444] hover:text-[#dc2626]"
                              onClick={() => handleDelete(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-[#6b7280] py-4">
                        No products found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <ProductEditModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

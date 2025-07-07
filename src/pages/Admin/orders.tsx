import { Search, Filter, Download, Eye, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"


const orders = [
  {
    id: "#ORD-001",
    customer: "Priya Perera",
    email: "priya@email.com",
    product: "School Shirt (White)",
    quantity: 2,
    amount: "Rs 4,900",
    status: "Completed",
    date: "Dec 10, 2024",
    paymentMethod: "Card",
  },
  {
    id: "#ORD-002",
    customer: "Kamal Silva",
    email: "kamal@email.com",
    product: "School Trouser (Navy)",
    quantity: 1,
    amount: "Rs 3,200",
    status: "Processing",
    date: "Dec 10, 2024",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "#ORD-003",
    customer: "Nimal Fernando",
    email: "nimal@email.com",
    product: "School Tie (Blue)",
    quantity: 3,
    amount: "Rs 2,550",
    status: "Shipped",
    date: "Dec 09, 2024",
    paymentMethod: "Cash",
  },
  {
    id: "#ORD-004",
    customer: "Saman Perera",
    email: "saman@email.com",
    product: "School Blazer (Navy)",
    quantity: 1,
    amount: "Rs 4,500",
    status: "Pending",
    date: "Dec 09, 2024",
    paymentMethod: "Card",
  },
  {
    id: "#ORD-005",
    customer: "Kumari Silva",
    email: "kumari@email.com",
    product: "School Skirt (Size M)",
    quantity: 2,
    amount: "Rs 5,600",
    status: "Cancelled",
    date: "Dec 08, 2024",
    paymentMethod: "Card",
  },
]

export default function OrdersPage() {
  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Orders</h2>
              <p className="text-[#6b7280]">Manage and track all customer orders</p>
            </div>
            {/* <Button className="bg-[#2563eb] text-white hover:bg-[#1e40af]">
              <Download className="w-4 h-4 mr-2" />
              Export Orders
            </Button> */}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#111827]">1,247</div>
                <div className="text-sm text-[#6b7280]">Total Orders</div>
                <div className="text-xs text-[#16a34a]">+12% from last month</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#16a34a]">892</div>
                <div className="text-sm text-[#6b7280]">Completed</div>
                <div className="text-xs text-[#16a34a]">+8% from last month</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#ea580c]">156</div>
                <div className="text-sm text-[#6b7280]">Processing</div>
                <div className="text-xs text-[#ea580c]">+3% from last month</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#dc2626]">23</div>
                <div className="text-sm text-[#6b7280]">Cancelled</div>
                <div className="text-xs text-[#dc2626]">-2% from last month</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="border-[#e5e7eb] mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
                  <Input placeholder="Search orders..." className="pl-10 border-[#d1d5db]" />
                </div>
                <Button variant="outline" className="border-[#d1d5db] bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Status
                </Button>
                <Button variant="outline" className="border-[#d1d5db] bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Date
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card className="border-[#e5e7eb]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#111827]">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#e5e7eb]">
                    <TableHead className="text-[#6b7280]">Order ID</TableHead>
                    <TableHead className="text-[#6b7280]">Customer</TableHead>
                    <TableHead className="text-[#6b7280]">Product</TableHead>
                    <TableHead className="text-[#6b7280]">Quantity</TableHead>
                    <TableHead className="text-[#6b7280]">Amount</TableHead>
                    <TableHead className="text-[#6b7280]">Status</TableHead>
                    <TableHead className="text-[#6b7280]">Date</TableHead>
                    <TableHead className="text-[#6b7280]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className="border-[#e5e7eb]">
                      <TableCell className="font-medium text-[#111827]">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-[#111827]">{order.customer}</div>
                          <div className="text-sm text-[#6b7280]">{order.email}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">{order.product}</TableCell>
                      <TableCell className="text-[#6b7280]">{order.quantity}</TableCell>
                      <TableCell className="font-medium text-[#111827]">{order.amount}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            order.status === "Completed"
                              ? "bg-[#dcfce7] text-[#166534] hover:bg-[#dcfce7]"
                              : order.status === "Processing"
                                ? "bg-[#fef9c3] text-[#854d0e] hover:bg-[#fef9c3]"
                                : order.status === "Shipped"
                                  ? "bg-[#dbeafe] text-[#1e40af] hover:bg-[#dbeafe]"
                                  : order.status === "Pending"
                                    ? "bg-[#fff7ed] text-[#ea580c] hover:bg-[#fff7ed]"
                                    : "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fee2e2]"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">{order.date}</TableCell>
                      <TableCell> 
                        <div className="flex items-center gap-2">
                          <Button variant="ghost"  size="sm" className="text-[#6b7280] cursor-pointer hover:text-[#111827]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#6b7280] cursor-pointer hover:text-[#111827]">
                            <Edit className="w-4 h-4" />
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

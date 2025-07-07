import { Search, Filter, Plus, Eye, Edit, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Sidebar from "@/components/admin-layout/sidebar"
import { Header } from "@/components/admin-layout/header"

const customers = [
  {
    id: "CUST-001",
    name: "Priya Perera",
    email: "priya@email.com",
    phone: "+94 77 123 4567",
    totalOrders: 12,
    totalSpent: "Rs 28,450",
    status: "Active",
    joinDate: "Jan 15, 2024",
    lastOrder: "Dec 10, 2024",
  },
  {
    id: "CUST-002",
    name: "Kamal Silva",
    email: "kamal@email.com",
    phone: "+94 71 234 5678",
    totalOrders: 8,
    totalSpent: "Rs 19,200",
    status: "Active",
    joinDate: "Feb 20, 2024",
    lastOrder: "Dec 10, 2024",
  },
  {
    id: "CUST-003",
    name: "Nimal Fernando",
    email: "nimal@email.com",
    phone: "+94 76 345 6789",
    totalOrders: 15,
    totalSpent: "Rs 35,750",
    status: "VIP",
    joinDate: "Dec 05, 2023",
    lastOrder: "Dec 09, 2024",
  },
  {
    id: "CUST-004",
    name: "Saman Perera",
    email: "saman@email.com",
    phone: "+94 75 456 7890",
    totalOrders: 3,
    totalSpent: "Rs 8,900",
    status: "New",
    joinDate: "Nov 28, 2024",
    lastOrder: "Dec 09, 2024",
  },
  {
    id: "CUST-005",
    name: "Kumari Silva",
    email: "kumari@email.com",
    phone: "+94 78 567 8901",
    totalOrders: 6,
    totalSpent: "Rs 14,200",
    status: "Inactive",
    joinDate: "Mar 10, 2024",
    lastOrder: "Oct 15, 2024",
  },
]

export default function CustomersPage() {
  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Customers</h2>
              <p className="text-[#6b7280]">Manage your customer relationships</p>
            </div>
            {/* <Button className="bg-[#2563eb] text-white hover:bg-[#1e40af]">
              <Plus className="w-4 h-4 mr-2 " />
              Add New Customer
            </Button> */}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 font-semibold gap-6 mb-6">
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#111827]">2,847</div>
                <div className="text-sm text-[#6b7280]">Total Customers</div>
                <div className="text-xs text-[#16a34a]">+15% from last month</div>
              </CardContent>
            </Card>
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#16a34a]">2,456</div>
                <div className="text-sm text-[#6b7280]">Active Customers</div>
                <div className="text-xs text-[#16a34a]">+12% from last month</div>
              </CardContent>
            </Card>
            
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-[#ea580c]">235</div>
                <div className="text-sm text-[#6b7280]">New This Month</div>
                <div className="text-xs text-[#ea580c]">+25% from last month</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="border-[#e5e7eb] mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
                  <Input placeholder="Search customers..." className="pl-10 border-[#d1d5db]" />
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

          {/* Customers Table */}
          <Card className="border-[#e5e7eb]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#111827]">All Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#e5e7eb]">
                    <TableHead className="text-[#6b7280]">Customer</TableHead>
                    <TableHead className="text-[#6b7280]">Contact</TableHead>
                    <TableHead className="text-[#6b7280]">Orders</TableHead>
                    <TableHead className="text-[#6b7280]">Total Spent</TableHead>
                    <TableHead className="text-[#6b7280]">Status</TableHead>
                    <TableHead className="text-[#6b7280]">Last Order</TableHead>
                    <TableHead className="text-[#6b7280]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id} className="border-[#e5e7eb]">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-[#2563eb] text-white text-sm">
                              {customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-[#111827]">{customer.name}</div>
                            <div className="text-sm text-[#6b7280]">{customer.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                            <Mail className="w-3 h-3" />
                            {customer.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                            <Phone className="w-3 h-3" />
                            {customer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">{customer.totalOrders}</TableCell>
                      <TableCell className="font-medium text-[#111827]">{customer.totalSpent}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            customer.status === "Active"
                              ? "bg-[#dcfce7] text-[#166534] hover:bg-[#dcfce7]"
                              : customer.status === "VIP"
                                ? "bg-[#dbeafe] text-[#1e40af] hover:bg-[#dbeafe]"
                                : customer.status === "New"
                                  ? "bg-[#fff7ed] text-[#ea580c] hover:bg-[#fff7ed]"
                                  : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#f3f4f6]"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">{customer.lastOrder}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#6b7280] hover:text-[#111827]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#6b7280] hover:text-[#111827]">
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

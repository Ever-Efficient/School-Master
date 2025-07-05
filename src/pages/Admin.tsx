import {
    Search,
    Bell,
    ShoppingCart,
    Package,
    Users,
    Tag,
    Plus,
    Star,
    BarChart3,
    Settings,
    LogOut,
    AlertTriangle,
  } from "lucide-react"
  import { Button } from "../components/ui/button"
  import { Input } from "../components/ui/input"
  import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
  import { Badge } from "../components/ui/badge"
  import { Avatar, AvatarFallback } from "../components/ui/avatar"
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
  
  export default function Component() {
    return (
      <div className="flex h-screen bg-[#f9fafb]">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-[#e5e7eb] flex flex-col">
          <div className="p-6 border-b border-[#e5e7eb]">
            <h1 className="text-xl font-bold text-[#111827]">School Master</h1>
            <p className="text-sm text-[#6b7280]">Admin Dashboard</p>
          </div>
  
          <nav className="flex-1 p-4 space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-[#2563eb] bg-[#dbeafe] rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Package className="w-5 h-5" />
              <span>Products</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <span>Orders</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Users className="w-5 h-5" />
              <span>Customers</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Tag className="w-5 h-5" />
              <span>Categories</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Plus className="w-5 h-5" />
              <span>Add New Product</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Star className="w-5 h-5" />
              <span>Reviews</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <BarChart3 className="w-5 h-5" />
              <span>Reports & Analytics</span>
            </div>
  
            <div className="flex items-center gap-3 px-3 py-2 text-[#6b7280] hover:bg-[#f9fafb] rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </nav>
  
          <div className="p-4 border-t border-[#e5e7eb]">
            <div className="flex items-center gap-3 px-3 py-2 text-[#ef4444] hover:bg-[#fef2f2] rounded-lg cursor-pointer">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-[#e5e7eb] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
                <Input
                  placeholder="Search products, orders, customers..."
                  className="pl-10 border-[#d1d5db] focus:border-[#2563eb] focus:ring-[#2563eb]"
                />
              </div>
  
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell className="w-6 h-6 text-[#6b7280]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ef4444] rounded-full"></div>
                </div>
  
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#2563eb] text-white text-sm">AU</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="font-medium text-[#111827]">Admin User</div>
                    <div className="text-[#6b7280]">admin@schoolmaster</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
  
          {/* Dashboard Content */}
          <main className="flex-1 p-6 overflow-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Dashboard Overview</h2>
              <p className="text-[#6b7280]">Welcome back! Here's what's happening with your store today.</p>
            </div>
  
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-[#e5e7eb]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#6b7280] mb-1">Total Orders</p>
                      <p className="text-2xl font-bold text-[#111827]">1,247</p>
                      <p className="text-sm text-[#16a34a]">+12% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="border-[#e5e7eb]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#6b7280] mb-1">Active Products</p>
                      <p className="text-2xl font-bold text-[#111827]">89</p>
                      <p className="text-sm text-[#16a34a]">+3 new this week</p>
                    </div>
                    <div className="w-12 h-12 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-[#16a34a]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="border-[#e5e7eb]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#6b7280] mb-1">Revenue</p>
                      <p className="text-2xl font-bold text-[#111827]">Rs 2,45,890</p>
                      <p className="text-sm text-[#16a34a]">+8% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-[#fef9c3] rounded-lg flex items-center justify-center">
                      <span className="text-[#ca8a04] font-bold text-lg">₹</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="border-[#e5e7eb]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#6b7280] mb-1">Low Stock Items</p>
                      <p className="text-2xl font-bold text-[#111827]">7</p>
                      <p className="text-sm text-[#dc2626]">Needs attention</p>
                    </div>
                    <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-[#dc2626]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Monthly Sales Performance */}
              <Card className="lg:col-span-2 border-[#e5e7eb]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-[#111827]">Monthly Sales Performance</CardTitle>
                  <Button variant="ghost" className="text-[#2563eb] hover:text-[#1e40af]">
                    View Details
                  </Button>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-64 bg-[#f9fafb] rounded-lg flex items-center justify-center">
                    <p className="text-[#9ca3af]">Chart placeholder</p>
                  </div>
                </CardContent>
              </Card>
  
              {/* Low Stock Alerts */}
              <Card className="border-[#e5e7eb]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#111827]">Low Stock Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#fef2f2] rounded-lg">
                    <div>
                      <p className="font-medium text-[#111827]">School Shirt - Size M</p>
                      <p className="text-sm text-[#6b7280]">Only 3 left</p>
                    </div>
                    <Badge className="bg-[#dc2626] hover:bg-[#dc2626]">Critical</Badge>
                  </div>
  
                  <div className="flex items-center justify-between p-3 bg-[#fff7ed] rounded-lg">
                    <div>
                      <p className="font-medium text-[#111827]">School Tie - Blue</p>
                      <p className="text-sm text-[#6b7280]">Only 8 left</p>
                    </div>
                    <Badge className="bg-[#ea580c] hover:bg-[#ea580c]">Low</Badge>
                  </div>
  
                  <div className="flex items-center justify-between p-3 bg-[#fff7ed] rounded-lg">
                    <div>
                      <p className="font-medium text-[#111827]">School Skirt - Size L</p>
                      <p className="text-sm text-[#6b7280]">Only 5 left</p>
                    </div>
                    <Badge className="bg-[#ea580c] hover:bg-[#ea580c]">Low</Badge>
                  </div>
  
                  <Button className="w-full bg-[#2563eb] hover:bg-[#1e40af]">View All Alerts</Button>
                </CardContent>
              </Card>
            </div>
  
            {/* Recent Orders */}
            <Card className="border-[#e5e7eb]">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold text-[#111827]">Recent Orders</CardTitle>
                <Button className="bg-[#2563eb] hover:bg-[#1e40af]">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#e5e7eb]">
                      <TableHead className="text-[#6b7280]">Order ID</TableHead>
                      <TableHead className="text-[#6b7280]">Customer</TableHead>
                      <TableHead className="text-[#6b7280]">Product</TableHead>
                      <TableHead className="text-[#6b7280]">Status</TableHead>
                      <TableHead className="text-[#6b7280]">Date</TableHead>
                      <TableHead className="text-[#6b7280]">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-[#e5e7eb]">
                      <TableCell className="font-medium text-[#111827]">#ORD-001</TableCell>
                      <TableCell className="text-[#6b7280]">Priya Perera</TableCell>
                      <TableCell className="text-[#6b7280]">School Shirt (White)</TableCell>
                      <TableCell>
                        <Badge className="bg-[#dcfce7] text-[#166534] hover:bg-[#dcfce7]">Completed</Badge>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">Dec 10, 2024</TableCell>
                      <TableCell className="text-[#111827]">Rs 2,450</TableCell>
                    </TableRow>
                    <TableRow className="border-[#e5e7eb]">
                      <TableCell className="font-medium text-[#111827]">#ORD-002</TableCell>
                      <TableCell className="text-[#6b7280]">Kamal Silva</TableCell>
                      <TableCell className="text-[#6b7280]">School Trouser (Navy)</TableCell>
                      <TableCell>
                        <Badge className="bg-[#fef9c3] text-[#854d0e] hover:bg-[#fef9c3]">Processing</Badge>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">Dec 10, 2024</TableCell>
                      <TableCell className="text-[#111827]">Rs 3,200</TableCell>
                    </TableRow>
                    <TableRow className="border-[#e5e7eb]">
                      <TableCell className="font-medium text-[#111827]">#ORD-003</TableCell>
                      <TableCell className="text-[#6b7280]">Nimal Fernando</TableCell>
                      <TableCell className="text-[#6b7280]">School Tie (Blue)</TableCell>
                      <TableCell>
                        <Badge className="bg-[#dbeafe] text-[#1e40af] hover:bg-[#dbeafe]">Shipped</Badge>
                      </TableCell>
                      <TableCell className="text-[#6b7280]">Dec 09, 2024</TableCell>
                      <TableCell className="text-[#111827]">Rs 850</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
  
                <div className="mt-4">
                  <Button variant="ghost" className="text-[#2563eb] hover:text-[#1e40af]">
                    View All Orders
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    )
  }
  
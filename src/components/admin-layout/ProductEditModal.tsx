import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProductEditModal({ product, onClose, onSave }) {
  const [form, setForm] = useState(product)

  

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    onSave(form)
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/50 z-40 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
          <div className="space-y-3">
            <Input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <Input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
            <Input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
            <Input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" type="number" />
            <Input name="status" value={form.status} onChange={handleChange} placeholder="Status" />
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} className="bg-[#2563eb] text-white hover:bg-[#1e40af]">Save</Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

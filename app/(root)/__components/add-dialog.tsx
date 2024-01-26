import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "sonner";

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addItem = async (e: any) => {
    if (newProduct.name !== "" && newProduct.price !== 0) {
      await addDoc(collection(db, "products"), {
        name: newProduct.name.trim(),
        price: newProduct.price,
      });
      setNewProduct({ name: "", price: 0 });
    }
    toast(`Added New Product`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Add new product to database.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name:
            </Label>
            <Input
              id="name"
              name="name"
              className="col-span-3"
              onChange={handleChange}
              value={newProduct.name}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price:
            </Label>
            <Input
              id="price"
              type="number"
              name="price"
              className="col-span-3"
              onChange={handleChange}
              value={newProduct.price}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit" onClick={addItem}>
              Add
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

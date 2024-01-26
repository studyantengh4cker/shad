"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

import ProductsTable from "./__components/table";
import AddProduct from "./__components/add-dialog";
import { UserButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: any[] = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      // Sort itemsArr by price
      itemsArr.sort((a, b) => a.price - b.price);
      setProducts(itemsArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="h-screen flex items-center justify-center gap-4">
      <ProductsTable products={products} />
      <Card>
        <CardHeader>
          <UserButton />
          <h1>Statistics</h1>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-zinc-600">Total Products:</p>
            <h1 className="text-3xl">{products.length}</h1>
          </div>
          <div>
            <p className="text-zinc-600">Goal Profit:</p>
            <h1 className="text-3xl">$100</h1>
          </div>
        </CardContent>
        <CardFooter>
          <AddProduct />
        </CardFooter>
      </Card>
    </main>
  );
}

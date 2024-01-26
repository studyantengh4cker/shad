import { ModeToggle } from "@/components/theme-provider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Product from "./product";

export default function ProductsTable({ products }: { products: any[] }) {
  const totalPrice = products.reduce(
    (acc, product) => parseInt(acc) + parseInt(product.price),
    0
  );
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <ModeToggle />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">My Products</h1>
          <p className="text-zinc-600">
            Total Price:{" "}
            <span className="text-green-300">
              ${totalPrice.toLocaleString("en-US")}
            </span>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableCaption>A list of your products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <Product product={product} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

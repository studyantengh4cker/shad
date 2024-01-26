import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import DeleteButton from "./delete-btn";

export default function Product({ product }: { product: any }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell>${parseInt(product.price).toLocaleString("en-US")}</TableCell>
      <TableCell className="text-right">
        <DeleteButton id={product.id} />
      </TableCell>
    </TableRow>
  );
}

import {useState, useEffect} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type {ProductType} from "@/api/products.ts";
import {getProducts } from "@/api/products.ts";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {Pencil, Trash} from "lucide-react";
// import {toast} from "sonner";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setloading] = useState<boolean>(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setloading(false));
  }, [])

  // const handleDelete = async (id: number) => {
  //   if (!window.confirm("Delete this product?")){
  //     setDeleting(id)
  //   }
  //   try {
  //     await deleteProduct(id);
  //     setProducts((prev) => prev.filter((p) => p.id !== id));
  //     toast.success("Product deleted successfully.");
  //     console.log("Product deleted successfully");
  //   } catch (error) {
  //     toast.error("Error deleting product " + id);
  //     console.log(error);
  //   } finally {
  //     setDeleting(null);
  //   }
  // };

  if (loading) return <div className="text-center p-8">Loading...</div>;

  function handleDelete(id: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="p-8">
        <Table>
          <TableCaption>A list of your products.</TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price} €</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/products/${product.id}`)}
                    >
                    <Pencil/>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                    disabled={deleting === product.id}
                  >
                    <Trash/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
export default ProductList
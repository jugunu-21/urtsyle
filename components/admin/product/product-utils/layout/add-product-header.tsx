
import {
  ChevronLeft,
  PlusCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-interface"
import toast from "react-hot-toast";
interface SubmitHandlerInterface {
  requestBody: ProductDataInterface
  id?: string | undefined
  setSheetOpen?: (value: boolean) => void;
  refetch?: (options?: RefetchOptions) => Promise<any>;
  addProducthandler: () => Promise<void>
}
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { RefetchOptions } from "@tanstack/react-query"
export default function ProductHeader({ requestBody, addProducthandler, id, setSheetOpen, refetch }: SubmitHandlerInterface) {
  const router = useRouter();
  const productaddpost = api.product.productAdd.useMutation();
  const productUpdatepost = api.product.productUpdate.useMutation();


  // const handlerupload = async () => {

  //   productaddpost.mutateAsync({ requestBody })
  //     .then(() => {
  //       router.push("/admin/product/productfetch")
  //       toast.success("sucessfully uploaded");
  //     })
  //     .catch(function (error) {
  //       console.log("apiaddproduct", error);
  //       toast.error("failed to upload product")
  //     });
  // }
  const handlerupdate = async (id: string) => {
    if (id) {
      productUpdatepost.mutateAsync({ requestBody, id: id })
        .then
        (() => {
          { setSheetOpen && setSheetOpen(false) }
          { refetch && refetch() }
          // router.push("/admin/product/productfetch")
          toast.success("sucessfully updated");
        }
        ).catch((error) => console.error("submission error:", error))
    }
  }
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon" className="h-7 w-7">
        <ChevronLeft className="h-4 w-4" onClick={() => {
          window.history.back();
          // console.log(window.location.href)
        }} />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        Add Product
      </h1>
      <Badge variant="outline" className="ml-auto sm:ml-0">
        In stock
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button variant="outline" size="sm" onClick={() => location.reload()}>
          Discard
        </Button>

        {id == null ? (
          <Button size="sm" onClick={() => addProducthandler()}>Save Product</Button>

        ) : (<Button size="sm" onClick={() => handlerupdate(id)}>Save Product</Button>)}
      </div>
    </div>
  )
}
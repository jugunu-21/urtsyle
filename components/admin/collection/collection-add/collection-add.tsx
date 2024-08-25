
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-interface"
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/trpc/react"
import { collectionproductInterface } from "../../collection/collection-utils/collection-interface"
import { RefetchOptions } from "@tanstack/react-query"
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
type addprops = {
  collection: Array<collectionproductInterface>,
  setSheetOpen: (sheetOpen: boolean) => void,
  setCollection: (collection: Array<collectionproductInterface>) => (void);
  refetch?: (options?: RefetchOptions) => Promise<any>;
  setSelectProduct: (sheetOpen: boolean) => void,
}
import React, { useState } from "react";
import { MultiSelect } from "@/components/admin/collection/collection-utils/layout/multi-select";
import CollectionImageCard from "../collection-utils/layout/collection-image"

export default function Dashboard({ setSelectProduct, collection, setCollection, setSheetOpen, refetch }: addprops) {
  const collectionIds=()=>collection.map((product=>product.productId));
  const [selectedIds, setSelectedIds] = useState<string[]>(collectionIds);
  const collectionAddPost = api.collection.collectionAdd.useMutation();

  const [name, setName] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const requestBody = {
    CollectionName: name ?? '', // Provide a default empty string if name is null
    CollectionDescription: description ?? '', // Provide a default empty string if description is null
    // CollectionIds: collection?.map(item => item.productId) || [],
    CollectionIds: selectedIds
  }
 
  const productInclude = collection?.filter((product) => {
    const isIncluded = selectedIds.includes(product.productId);
    return isIncluded ? product.ProductImage : null;
  }).filter(image => image !== null);

  const images = productInclude.map(product => product.ProductImage)
  const handler = async () => {
    collectionAddPost.mutateAsync({ requestBody: requestBody })
      .then(() => {
        setSheetOpen(false)
        setCollection([])
        setSelectProduct(false)
        { refetch && refetch(); }
        toast.success("sucessfully created the collection")
      })
      .catch(function (error) {
        console.log("apicollectionUpload ", error);
        toast.error("failed to add collection")
      });
  }
  const imgg = collection.filter(product => selectedIds.includes(product.productId)).map(product => product.ProductImage);

  const selectedNames = collection.filter(product => selectedIds.includes(product.productId)).map(product => product.productName);
  return (
    <main className="grid flex-1 items-start gap-4  sm:px-6 sm:py-0 md:gap-8 m-4">
      <div >
        <Card x-chunk="dashboard-07-chunk-0 mb-4">
          <CardHeader>
            <CardTitle>Collection Details</CardTitle>
            <CardDescription>
              Add Collection Details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label className="text-xl" htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  placeholder="Enter Name of Collection"
                  defaultValue={name ? name : ''}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                />
              </div>
              <div className="grid gap-3">
                <Label className="text-xl" htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter description."
                  className="min-h-20"
                  defaultValue={description ? description : ''}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className=" max-w-xl">
                <Label htmlFor="name">Products to Add In Collection</Label>
                <MultiSelect
                  options={collection}
                  onValueChange={setSelectedIds}
                  defaultValue={selectedIds}
                  placeholder="Select Products"
                  variant="inverted"
                  animation={2}
                  maxCount={3}
                />{
                }
                {(imgg.length > 0) && <CollectionImageCard image={imgg} />}
                <div className="mt-4">
                  <h2 className=" font-semibold">Selected Products</h2>
                  <ul className="list-disc list-inside">
                    {selectedNames.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  id="price"
                  pattern="\d*"
                  className="w-full"
                  defaultValue={price ? price : ''}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price..."

                />
              </div>
              <Button className="mx-auto" onClick={() => handler()}>Save Collection</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

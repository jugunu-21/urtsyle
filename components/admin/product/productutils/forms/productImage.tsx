import Image from "next/image"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Upload } from 'lucide-react'
interface ProductImageCardprops{
  image:string|null
  setImage:(image:string)=>void
}
function ProductImageCard( {image,setImage}: ProductImageCardprops) {
return(
    <div> <Card
    className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
    
  >
    <CardHeader>
      <CardTitle>Product Images</CardTitle>
      <CardDescription>
        Lipsum dolor sit amet, consectetur adipiscing elit
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-2">
        <Image
          alt="Product image"
          className="aspect-square w-full rounded-md object-cover"
          height="300"
          src="/placeholder.svg"
          width="300"
        />
        <div className="grid grid-cols-3 gap-2">
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"

            />
          </button>
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>
          <button  className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
            onClick={() => {setImage("https://m.media-amazon.com/images/I/51p6ELTSNpL._SY879_.jpg")
              console.log("clicked button for image")}
            }
          >
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only"

            >Upload</span>

          </button>
        </div>
      </div>
    </CardContent>
  </Card></div>
)
  
}
export default ProductImageCard;
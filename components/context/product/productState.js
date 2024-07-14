import React from "react";
import ProductContext from "./productContext";
const ProductState =(props)=>{
    const state={
        "name":"harry"
    }
return(
<ProductContext.Provider value="state">
    {props.children}
</ProductContext.Provider>

)
}
export default ProductState;
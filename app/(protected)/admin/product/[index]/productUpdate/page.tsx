"use client"

import React, { useState,useEffect } from 'react';

import Dashboard from "@/components/admin/product/product-update/product-update"
import { useParams } from 'next/navigation';

  export default function ProductUpdate() {
 

    const params = useParams();
    const productIdArray = Array.isArray(params.index)
      ? params.index
      : [params.index];
    const [param1] = productIdArray;
    const groupIndex = param1 ? parseInt(param1, 10) : undefined;
    // const groupIndex = param1 !== undefined ? parseInt(param1, 10) : undefined;
    // const groupIndex = param1 !== undefined && param1 !== null && param1 !== '' ? parseInt(param1, 10) : undefined;
    // const groupIndex = param1 !== undefined && param1 !== null ? parseInt(param1, 10) : undefined;
    // const groupIndex = typeof param1 === 'number' ? param1 : undefined;
    // const groupIndex = param1 !== null && typeof param1 === 'number' ? param1 : undefined;
console.log("groupIndex",groupIndex)
    return (
        <div >
     
          try to fetch from some other place {groupIndex}

                {/* <Dashboard index={ groupIndex} /> */}
        
        </div>

    )
}




"use client"
import React, { useState } from "react";
;
import { useParams } from 'next/navigation';

import Link from "next/link";

import Sitelink from "@/components/reusable-components/site-link";

import itemsData from "@/Data/items.json"

import Star from '@/components/reusable-components/star-icon';
import Moredetails from "@/components/details/more-detail/more-detail"
export default function Page() {
  const [selectedContent, setSelectedContent] = useState("customers");
  const params = useParams();

  // Ensure productid is an array
  const productIdArray = Array.isArray(params.productid) ? params.productid : [params.productid];

  const [param1, param2] = productIdArray;

  const groupId = param1 ? parseInt(param1, 10) : undefined;
  const cartId = param2 ? parseInt(param2, 10) : undefined;
  let finalItem;

  if (groupId !== undefined && cartId !== undefined) {
    finalItem = itemsData[groupId].cart[cartId];
  }

  if (!finalItem) {
    return <div>Item not found</div>;
  }

  return (
    <Moredetails finalItem={finalItem} />
  );
}


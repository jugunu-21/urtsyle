
"use client"
import { Suspense } from "react";
import React, { useState, useEffect } from 'react';
import Dashboard from "@/components/admin/product/product-fetch/product-fetch"
export default function ProductFetch() {
    return (
        <div >
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                </Suspense>
            </div>
        </div>
    )
}
"use client"
import React, { useState, useEffect } from 'react';
import Dashboard from "@/components/admin/product/product-add/product-add"
export default function Productadd() {
    return (
        <div >
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Dashboard />
            </div>
        </div>
    )
}
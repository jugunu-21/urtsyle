"use client"
import React from "react";
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import deleteUser from "@/components/authentications/deleteuser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";

import { useToken,useStore } from "@/components/helpers/zustand";
import ApiFetchProducts from "@/components/admin/product/productFunctions/apiFetchProducts";
import { Productsprops } from "@/components/context/mycontext";
// import { useStore } from "zustand";
export default function Navbardrop() {

  const token= useToken((state)=>state.token);
  const setData= useStore((state)=>state.setData);
  const router = useRouter();
  const auth = getAuth(app)
  const handleLogout = () => {
    // Sign out from Firebase
    signOut(auth)
      .then(() => {
        document.cookie = `jwtToken=; max-age=0; path=/`;
        console.log("Signed out successfully and session cookie cleared");

        // Redirect to home page or any other page
        router.push("/");
        toast.success("successfully sign Out")
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  const handledeleteuser = () => {
    deleteUser();

  }


      const fetchData = async () => {
            const response = await ApiFetchProducts({jwtToken:token});
            if (response) {
                console.log(response)
              const result: Productsprops | undefined = response.data.data
              if (result) {
                console.log(result)
                setData(result);
                console.log("successfuly data fetched in nav zustanddatain frtch")
              }
            }
        
        
          }  
     



  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          className="h-8 w-10 rounded-full"
          src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/signup">signup</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}> signout</DropdownMenuItem>
        <DropdownMenuItem>   <Link href="/signin">Login</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>fetchData()}>   <Link href="/admin/product">Products</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={handledeleteuser}>deleteUser</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

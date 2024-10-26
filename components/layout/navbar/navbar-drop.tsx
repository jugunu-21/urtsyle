"use client"
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import deleteUser from "@/components/authentications/delete-user/delete-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import Image from "next/image";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
interface UserInfo {
  phone_number?: string;
}
import { Collection } from "@/components/home/hero/card-collection";
import { Sheet, SheetClose, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa6";
import LikedCollectionsSheet from "@/components/sheet/LikedCollectionsSheet";
export default function Navbardrop() {
  const jwtToken = useToken().token
  const [liked, setLiked] = useState<boolean>(false);
  const auth = getAuth(app)
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove('jwtToken', { path: '/' });
        console.log("Signed out successfully and session cookie cleared");
        window.location.reload()
        toast.success("successfully sign Out")
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  const handledeleteuser = () => {
    deleteUser();
  }
  const [sheetOpenLikedCollection, setSheetOpenLikedCollection] = useState(false);
  return (
    <div className="">
      <DropdownMenu >
        <DropdownMenuTrigger className=" h-full w-full rounded-lg  flex flex-col justify-center items-center   gap-1 hover:bg-slate-100  data-[state=open]:bg-slate-200  px-3 "  >

          <FaUser />
          <div className="text-xs">Profile</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {jwtToken !== null && <>
            <DropdownMenuItem onClick={() => { setLiked(true); setSheetOpenLikedCollection(true) }}>Wishlist</DropdownMenuItem>
            <DropdownMenuItem >   <Link href="/admin/product">Admin Dashboard</Link></DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            <DropdownMenuItem onClick={handledeleteuser}>Delete User</DropdownMenuItem>
          </>}
          {jwtToken === null && <> <DropdownMenuItem>
            <Link href="/sign-up">Signup</Link>
          </DropdownMenuItem>
            <DropdownMenuItem>   <Link href="/sign-in">Login</Link></DropdownMenuItem></>
          }
        </DropdownMenuContent>
      </DropdownMenu>

      {liked && (
        <LikedCollectionsSheet
          isOpen={sheetOpenLikedCollection}
          onClose={() => setSheetOpenLikedCollection(false)}
        />
      )}

    </div>
  );
}

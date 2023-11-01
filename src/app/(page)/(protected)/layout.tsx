"use client"
import React from "react";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  
    const {authStatus} = useAuth();
    const router = useRouter();

    if(!authStatus){
        router.replace('/login');
        return <></>;
    }

  return (
    children
  );
};

export default ProtectedLayout;
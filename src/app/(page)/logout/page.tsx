"use client"

import React, { useEffect } from 'react';
import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import appwriteService from '@/appwrite/config';

const LogoutPage = () => {

    const router = useRouter();
    const {setAuthStatus}  = useAuth();

    useEffect(() => {
      appwriteService.logout().then(() => {
        setAuthStatus(false);
        router.replace("/");
      });
    }, [setAuthStatus, router]);
    

  return (
    <div>Logging out......</div>
  )
}

export default LogoutPage;

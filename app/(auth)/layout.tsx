'use client'

import React, { useEffect } from 'react'

import "@ilhamirfan/styles/auth.scss"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BasicLayout from '@ilhamirfan/components/layout/basicLayout';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status == "authenticated") {
            router.push("/", { scroll: false })
        }
    }, [session])


    return (
        <BasicLayout>
            {children}
        </BasicLayout>
    )
}

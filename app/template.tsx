'use client'

import React from 'react'

import { SessionProvider } from "next-auth/react";

// Template component providing session context to its children
export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

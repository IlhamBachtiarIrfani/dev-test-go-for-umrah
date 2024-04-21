'use client'

import SidebarLayout from "@ilhamirfan/components/layout/sidebar/sidebarLayout"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import '@ilhamirfan/styles/dashboard-global.scss'

interface LayoutProps {
    children: React.ReactNode;
}


export default function Layout(props: LayoutProps) {
    const router = useRouter();

    const { data } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace("/login")
        },
    });

    return (
        <SidebarLayout>
            {props.children}
        </SidebarLayout>
    )
}

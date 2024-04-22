'use client'

// Importing necessary components and hooks
import SidebarLayout from "@ilhamirfan/components/layout/sidebar/sidebarLayout"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Importing styles
import '@ilhamirfan/styles/dashboard-global.scss'

// Interface for defining layout props
interface LayoutProps {
    children: React.ReactNode;
}

// Component definition for rendering the dashboard layout
export default function Layout(props: LayoutProps) {
    // Initializing useRouter hook to access routing information
    const router = useRouter();

    // Using useSession hook to access session information
    const { data } = useSession({
        required: true,
        // Redirect to the login page if the user is not authenticated
        onUnauthenticated() {
            router.replace("/login")
        },
    });

    // Rendering the SidebarLayout component with children content
    return (
        <SidebarLayout>
            {props.children}
        </SidebarLayout>
    )
}

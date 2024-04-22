import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "goforumrah",
    description: "Dev test by Ilham Bachtiar Irfani",
    authors: {
        name: "Ilham Bachtiar Irfani",
        url: "https://www.linkedin.com/in/ilham-bachtiar-irfani/"
    },
    creator: "Ilham Bachtiar Irfani",
};

import "@ilhamirfan/styles/global.scss"
import "@ilhamirfan/styles/button.scss"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

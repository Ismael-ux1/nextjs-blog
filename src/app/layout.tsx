import React from 'react';
import { Inter } from 'next/font/google';
import '../styles/global.css';

const inter = Inter ( { subsets: ['latin'] } );

export const metadata = {
    title: 'My Blog',
    description: 'Welcome to my personal blog!'
};

/**
 * Root Layout Component:
 * Defines the root layout for the application. This is a server component.
 */

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* Global Navigation */}
                {/* might have a header component */}
                <main className="min-h-screen bg-gray-950">
                    <div className="container mx-auto px-4">{children}</div>
                    {/* Global Footer (if applicable) */}
                {/* might have a footer component here, */}
                </main>
            </body>

        </html>
    )
}  
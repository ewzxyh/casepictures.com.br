import React from 'react';

// app/layout.js
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Pictures Case</title>
            </head>
            <body>
                <header>
                    <h1>Pictures Case</h1>
                </header>
                <main>{children}</main>
                <footer>© 2024 Pictures Case</footer>
            </body>
        </html>
    );
}

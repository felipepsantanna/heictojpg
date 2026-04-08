import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className="scroll-smooth">
            <body className="antialiased font-sans">
                <GoogleTagManager gtmId="GTM-5X8922M" />
                {children}
            </body>
        </html>
    );
}
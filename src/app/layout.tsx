import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
    title: 'Converter HEIC para JPEG Gratuitamente | Rocktools',
    description: 'O conversor HEICtoJPG é uma ferramenta online gratuita que converte fotos do iOS de HEIC para JPEG / JPG.',
    openGraph: {
        type: 'website',
        url: 'https://heictojpg.com.br',
        title: 'Converter HEIC para JPEG gratuitamente',
        description: 'Converta HEIC para JPG online e rápido.',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <GoogleTagManager gtmId="GTM-5X8922M" />
            <body>
                {children}
            </body>
        </html>
    );
}
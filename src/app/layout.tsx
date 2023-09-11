import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from "./providers";
import SidebarWithHeader from "@components/SidebarWithHeader";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter3',
  description: 'Twitter3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <SidebarWithHeader>

            {children}

        </SidebarWithHeader>

      </Providers>
      </body>
    </html>
  );
}

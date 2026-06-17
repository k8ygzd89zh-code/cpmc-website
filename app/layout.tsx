import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './lib/LanguageContext';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'CPMC Holdings | Precision Metal Packaging — A Member of ORG Technology Group',
  description:
    'CPMC Holdings (华瑞新控股) — China\'s leading comprehensive metal packaging manufacturer. Aerosol cans, food cans, aluminum beverage cans, custom tin boxes, metal caps, steel drums, and plastic packaging for the world\'s most trusted brands. Member of ORG Technology Group.',
  keywords:
    'CPMC Holdings, 华瑞新控股, metal packaging, aerosol cans, food cans, aluminum cans, tinplate packaging, ORG Technology, beer cans, milk powder cans, packaging manufacturer China',
  openGraph: {
    title: 'CPMC Holdings | Precision Metal Packaging',
    description: 'Comprehensive metal packaging solutions for the world\'s most trusted brands.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CPMC Holdings',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white antialiased">
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://artsmartiauxreims.fr'),
  title: {
    default: 'Arts Martiaux Reims | Kung Fu, Krav Maga, Taichi',
    template: '%s | Arts Martiaux Reims'
  },
  description: 'Découvrez les arts martiaux à Reims : Kung Fu, Krav Maga, Jeet Kune Do, Taichi, Taekwondo et MMA. Cours pour tous âges et niveaux.',
  keywords: ['kung fu', 'krav maga', 'martial arts', 'arts martiaux', 'reims', 'taichi', 'taekwondo', 'jeet kune do', 'mma', 'self defense', 'cours arts martiaux'],
  authors: [{ name: 'Arts Martiaux Reims' }],
  creator: 'Arts Martiaux Reims',
  publisher: 'Arts Martiaux Reims',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://artsmartiauxreims.fr',
    siteName: 'Arts Martiaux Reims',
    title: 'Arts Martiaux Reims | Kung Fu, Krav Maga, Taichi',
    description: 'Découvrez les arts martiaux à Reims : Kung Fu, Krav Maga, Jeet Kune Do, Taichi, Taekwondo et MMA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arts Martiaux Reims',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arts Martiaux Reims | Kung Fu, Krav Maga, Taichi',
    description: 'Découvrez les arts martiaux à Reims',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'sports',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

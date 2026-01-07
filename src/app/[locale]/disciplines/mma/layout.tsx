import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.mma.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'mma reims',
      'mixed martial arts',
      'arts martiaux mixtes',
      'combat libre',
      'free fight',
      'grappling',
      'jiu-jitsu',
      'cours mma',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function MMALayout({ children }: Props) {
  return children;
}

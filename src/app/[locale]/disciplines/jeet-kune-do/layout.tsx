import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.jeetkundo.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'jeet kune do reims',
      'jkd reims',
      'bruce lee',
      'arts martiaux reims',
      'cours jeet kune do',
      'intercepting fist',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function JeetKuneDoLayout({ children }: Props) {
  return children;
}

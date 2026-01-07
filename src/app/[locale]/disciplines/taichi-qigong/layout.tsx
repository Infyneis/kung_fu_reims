import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.taichi.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'taichi reims',
      'qigong reims',
      'tai chi chuan',
      'qi gong',
      'meditation',
      'bien-être',
      'relaxation',
      'gymnastique chinoise',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function TaichiLayout({ children }: Props) {
  return children;
}

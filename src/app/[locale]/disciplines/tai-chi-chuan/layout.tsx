import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.taichichuan.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'tai chi chuan reims',
      'taiji quan',
      'art martial interne',
      'internal martial art',
      'yin yang',
      'équilibre',
      'bien-être',
      'cours tai chi',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function TaiChiChuanLayout({ children }: Props) {
  return children;
}

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.kravmaga.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'krav maga reims',
      'self defense reims',
      'self défense',
      'cours krav maga',
      'defense personnelle',
      'arts martiaux reims',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function KravMagaLayout({ children }: Props) {
  return children;
}

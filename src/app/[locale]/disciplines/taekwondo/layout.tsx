import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.taekwondo.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'taekwondo reims',
      'art martial coréen',
      'korean martial art',
      'self-défense',
      'sport olympique',
      'techniques jambes',
      'kick techniques',
      'cours taekwondo',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function TaekwondoLayout({ children }: Props) {
  return children;
}

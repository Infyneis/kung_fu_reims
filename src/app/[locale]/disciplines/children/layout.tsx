import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.children.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'cours enfants reims',
      'gymnastique enfant',
      'arts martiaux enfants',
      'eveil corporel',
      'motricité enfant',
      'sport enfant reims',
      'activité enfant',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function ChildrenLayout({ children }: Props) {
  return children;
}

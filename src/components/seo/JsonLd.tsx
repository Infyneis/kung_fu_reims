'use client';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Arts Martiaux Reims',
    description:
      'Centre de formation aux arts martiaux à Reims proposant Kung Fu, Krav Maga, Jeet Kune Do, Taichi, Taekwondo et MMA.',
    url: 'https://artsmartiauxreims.fr',
    telephone: '+33 X XX XX XX XX',
    email: 'contact@artsmartiauxreims.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Reims',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2583,
      longitude: 4.0317,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/artsmartiauxreims',
      'https://www.instagram.com/artsmartiauxreims',
      'https://www.youtube.com/artsmartiauxreims',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cours Arts Martiaux',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kung Fu',
            description: 'Art martial chinois traditionnel',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Krav Maga',
            description: 'Self-défense israélienne',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jeet Kune Do',
            description: 'Art martial créé par Bruce Lee',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taichi Qigong',
            description: 'Art martial interne et bien-être',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taekwondo',
            description: 'Art martial coréen olympique',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MMA',
            description: 'Arts Martiaux Mixtes',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://artsmartiauxreims.fr',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

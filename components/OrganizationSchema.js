const makeSchema = brandInfo => {
  const { companyUrl, companyPhone, companyName } = { ...brandInfo }
  return {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    legalName: companyName,
    url: companyUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sofia',
      addressRegion: 'Triaditsa',
      streetAddress: 'bl. 30',
      postalCode: '1404',
      addressCountry: 'Bulgaria',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: companyPhone,
        contactType: 'customer service',
      },
    ],
    logo: `${companyUrl}logo.svg`,
    sameAs: [
      'https://www.facebook.com/binerals',
      'https://www.linkedin.com/company/69779077',
      'https://github.com/Binerals',
    ],
  }
}

export default function OrganizationSchema({ brandInfo }) {
  return (
    <script
      key={`organizationJSON`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(makeSchema(brandInfo)),
      }}
    />
  )
}

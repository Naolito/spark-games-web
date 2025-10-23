export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Spark Games",
    "legalName": "Naolito Games SL",
    "alternateName": "Spark Games",
    "url": "https://sparkgames.com",
    "logo": "https://sparkgames.com/logo.png",
    "description": "Spark Games is the commercial name of Naolito Games SL, a mobile game development studio based in Málaga, Spain. Creating engaging mobile games for global audiences.",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Spark Games Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sor teresa prat 15, Polo de contenidos digitales",
      "addressLocality": "Málaga",
      "addressRegion": "Andalusia",
      "postalCode": "29003",
      "addressCountry": "ES"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "contact@naolito.com",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      // Add social media profiles when available
      "https://play.google.com/store/apps/developer?id=Spark+Games",
      "https://apps.apple.com/developer/spark-games"
    ],
    "industry": "Computer Games",
    "numberOfEmployees": "1-10",
    "knowsAbout": [
      "Mobile Game Development",
      "iOS Games",
      "Android Games",
      "Game Design",
      "Unity Development"
    ],
    "taxID": "B75552836",
    "vatID": "ESB75552836"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Spark Games",
    "url": "https://sparkgames.com",
    "description": "Official website of Spark Games - Mobile game development studio creating engaging games for global audiences.",
    "publisher": {
      "@type": "Organization",
      "name": "Naolito Games SL"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sparkgames.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}

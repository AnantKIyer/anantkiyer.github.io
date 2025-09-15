import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anant Kiyer",
    "jobTitle": "Full Stack Developer & Designer",
    "description": "Passionate full-stack developer specializing in modern web technologies, React, Next.js, and creating exceptional user experiences.",
    "url": "https://anantkiyer.github.io",
    "image": "https://anantkiyer.github.io/api/placeholder/400/400",
    "sameAs": [
      "https://github.com/anantkiyer",
      "https://linkedin.com/in/anantkiyer",
      "https://twitter.com/anantkiyer"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "UI/UX Design",
      "Web Development"
    ],
    "alumniOf": "Computer Science",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "email": "anant@example.com",
    "telephone": "+1-555-123-4567"
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

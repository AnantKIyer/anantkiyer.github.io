import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
        "name": "Anant Kumar Iyer",
    "jobTitle": "Full Stack Developer & Designer",
    "description": "Passionate full-stack developer specializing in modern web technologies, React, Next.js, and creating exceptional user experiences.",
    "url": "https://anantkiyer.github.io",
    "image": "https://anantkiyer.github.io/api/placeholder/400/400",
    "sameAs": [
      "https://github.com/anantkumariyer",
      "https://linkedin.com/in/anantkumariyer",
      "https://twitter.com/anantkumariyer"
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
    "email": "anant.kumar.iyer@example.com",
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

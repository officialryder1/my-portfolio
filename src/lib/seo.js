/**
 * Generate basic meta tags
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} url - Canonical URL
 * @param {string} image - Social sharing image URL
 * @returns {Array} - Array of meta tag objects
 */
export function getBasicMeta(title, description, url, image = '/social-preview.jpg') {
    return [
        { title: `${title} | Developer Portfolio` },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { rel: 'canonical', href: url }
    ];
}


export function getStructuredData(options = {}) {
    const defaults = {
        "@type": "Person",
        name: "Your Name",
        jobTitle: "Full Stack Developer",
        url: "https://my-portfolio-39ntj11wu-officialryder1s-projects.vercel.app/",
        sameAs: [
            "https://github.com/officialryder1",
            "https://linkedin.com/in/victor-kenneth-3a8704195",
            'https://x.com/official_ryder0'
        ]
    };
    
    const data = { ...defaults, ...options };
    
    return {
        jsonld: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Developer Portfolio",
            "url": "https://yourportfolio.vercel.app",
            "author": ${JSON.stringify(data, null, 2)}
        }`
    };
}
  
export function seoGenerateMetaTags(page, site) {
    let pageMetaTags = {};

    if (site?.defaultMetaTags?.length) {
        site.defaultMetaTags.forEach((metaTag) => {
            if (metaTag && metaTag.property && metaTag.content) {
                pageMetaTags[metaTag.property] = metaTag.content;
            }
        });
    }

    const seoTitle = seoGenerateTitle(page, site);
    const ogImage = seoGenerateOgImage(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    const domainUrl = site?.env?.URL || 'https://sonidovivo.org';
    const currentUrl = page?.slug ? `${domainUrl}${page.slug}` : domainUrl;

    pageMetaTags = {
        ...pageMetaTags,
        ...(seoTitle && { 'og:title': seoTitle }),
        ...(metaDescription && { 'og:description': metaDescription }),
        ...(ogImage && { 'og:image': ogImage }),
        'og:type': 'website',
        'og:url': currentUrl,
        'og:site_name': 'Sonido Vivo',
        'og:locale': page?.slug?.startsWith('/es') ? 'es_PR' : 'en_US',
        ...(seoTitle && { 'twitter:title': seoTitle }),
        ...(metaDescription && { 'twitter:description': metaDescription }),
        ...(ogImage && { 'twitter:image': ogImage }),
        'twitter:card': 'summary_large_image',
        'twitter:site': '@sonidovivo',
        'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        'googlebot': 'index, follow',
        'bingbot': 'index, follow',
        'keywords': seoGenerateKeywords(page, site)
    };

    if (page?.seo?.metaTags?.length) {
        page.seo.metaTags.forEach((metaTag) => {
            if (metaTag && metaTag.property && metaTag.content) {
                pageMetaTags[metaTag.property] = metaTag.content;
            }
        });
    }

    let metaTags = [];
    if (pageMetaTags && typeof pageMetaTags === 'object' && !Array.isArray(pageMetaTags)) {
        Object.keys(pageMetaTags).forEach((key) => {
            if (pageMetaTags[key] !== null && pageMetaTags[key] !== undefined) {
                metaTags.push({
                    property: key,
                    content: pageMetaTags[key],
                    format: key.startsWith('og:') || key.startsWith('twitter:') ? 'property' : 'name'
                });
            }
        });
    }

    return metaTags;
}

export function seoGenerateTitle(page, site) {
    if (!page) return null;
    let title = page.seo?.metaTitle ? page.seo?.metaTitle : page.title;
    if (site?.titleSuffix && page.seo?.addTitleSuffix !== false) {
        title = `${title} - ${site.titleSuffix}`;
    }
    return title;
}

export function seoGenerateMetaDescription(page, site) {
    if (!page) return null;
    let metaDescription = null;
    if (page.__metadata?.modelName === 'PostLayout') {
        metaDescription = page.excerpt;
    }
    if (page.seo?.metaDescription) {
        metaDescription = page.seo?.metaDescription;
    }
    return metaDescription;
}

export function seoGenerateOgImage(page, site) {
    if (!page || !site) return null;
    let ogImage = null;
    if (site.defaultSocialImage) {
        ogImage = site.defaultSocialImage;
    }
    if (page.__metadata?.modelName === 'PostLayout') {
        if (page.featuredImage?.url) {
            ogImage = page.featuredImage.url;
        }
    }
    if (page.seo?.socialImage) {
        ogImage = page.seo?.socialImage;
    }

    const domainUrl = site.env?.URL ? site.env.URL : null;

    if (ogImage) {
        if (domainUrl) {
            return domainUrl + ogImage;
        } else {
            return ogImage;
        }
    }
    return null;
}

export function seoGenerateKeywords(page, site) {
    const baseKeywords = [
        'audio equipment rental Puerto Rico',
        'professional sound systems',
        'PA system rental',
        'sound engineering services',
        'event audio equipment',
        'Sonido Vivo'
    ];

    const pageSpecificKeywords = {
        '/': ['audio equipment rental', 'professional audio', 'Puerto Rico events', 'sound system rental'],
        '/services': ['sound engineering', 'audio services', 'technical support', 'equipment delivery'],
        '/equipment-rentals': ['PA systems', 'mixing consoles', 'microphones', 'QSC', 'Midas', 'Sennheiser'],
        '/contact': ['audio rental quote', 'sound equipment inquiry', 'event audio contact'],
        '/es': ['alquiler de equipos de audio', 'audio profesional Puerto Rico', 'sistemas de sonido'],
        '/es/services': ['ingeniería de sonido', 'servicios de audio', 'soporte técnico'],
        '/es/equipment-rentals': ['sistemas PA', 'consolas mezcla', 'micrófonos profesionales'],
        '/es/contact': ['cotización audio', 'contacto equipos sonido']
    };

    const pageKeywords = pageSpecificKeywords[page?.slug] || [];
    return [...baseKeywords, ...pageKeywords].join(', ');
}

export function seoGenerateStructuredData(page, site) {
    const domainUrl = site?.env?.URL || 'https://sonidovivo.org';
    
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${domainUrl}/#organization`,
        name: 'Sonido Vivo',
        alternateName: 'Sonido Vivo Professional Audio',
        description: 'Professional audio equipment rentals and sound engineering services throughout Puerto Rico',
        url: domainUrl,
        logo: `${domainUrl}/images/logo-dark.svg`,
        image: `${domainUrl}/images/main-hero.jpg`,
        telephone: '+1-321-300-5425',
        email: 'contacto@sonidovivo.org',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PR',
            addressRegion: 'Puerto Rico',
            addressLocality: 'San Juan'
        },
        areaServed: [
            {
                '@type': 'State',
                name: 'Puerto Rico'
            }
        ],
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 18.4655,
            longitude: -66.1057
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '18:00'
        },
        sameAs: [
            'https://facebook.com/sonidovivo',
            'https://instagram.com/sonidovivo'
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Audio Equipment Rentals',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'PA System Rental',
                        description: 'Professional PA systems for events and venues'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Sound Engineering Services',
                        description: 'Professional sound engineering and technical support'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Equipment Delivery & Setup',
                        description: 'Full logistics support including delivery and setup'
                    }
                }
            ]
        }
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${domainUrl}/#website`,
        url: domainUrl,
        name: 'Sonido Vivo',
        description: 'Professional audio equipment rentals serving Puerto Rico',
        publisher: {
            '@id': `${domainUrl}/#organization`
        },
        inLanguage: ['en-US', 'es-PR']
    };

    const breadcrumbSchema = page?.slug && page.slug !== '/' ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: generateBreadcrumbs(page, domainUrl)
    } : null;

    const schemas = [organizationSchema, websiteSchema];
    if (breadcrumbSchema) {
        schemas.push(breadcrumbSchema);
    }

    return schemas;
}

function generateBreadcrumbs(page, domainUrl) {
    const breadcrumbs = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: domainUrl
        }
    ];

    if (page?.slug && page.slug !== '/') {
        const parts = page.slug.split('/').filter(Boolean);
        let currentPath = '';
        
        parts.forEach((part, index) => {
            currentPath += `/${part}`;
            breadcrumbs.push({
                '@type': 'ListItem',
                position: index + 2,
                name: page.title || part,
                item: `${domainUrl}${currentPath}`
            });
        });
    }

    return breadcrumbs;
}

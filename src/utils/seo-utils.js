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

    pageMetaTags = {
        ...pageMetaTags,
        ...(seoTitle && { 'og:title': seoTitle }),
        ...(ogImage && { 'og:image': ogImage })
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
                    format: key.startsWith('og') ? 'property' : 'name'
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

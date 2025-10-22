import React from 'react';
import Head from 'next/head';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription, seoGenerateStructuredData } from '../utils/seo-utils';

function Page(props) {
    const { page, site } = props;
    
    if (!page || !page.__metadata) {
        throw new Error(`Invalid page data for path '${props.path}'`);
    }
    
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    const structuredData = seoGenerateStructuredData(page, site);
    const domainUrl = site?.env?.URL || 'https://sonidovivo.org';
    const canonicalUrl = page?.slug ? `${domainUrl}${page.slug}` : domainUrl;
    const pageLanguage = page?.slug?.startsWith('/es') ? 'es' : 'en';
    const alternateLanguage = pageLanguage === 'es' ? 'en' : 'es';
    const alternatePath = pageLanguage === 'es' 
        ? page.slug.replace('/es', '') || '/'
        : `/es${page.slug}`;
    
    return (
        <>
            <Head>
                <html lang={pageLanguage} />
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hrefLang={alternateLanguage} href={`${domainUrl}${alternatePath}`} />
                <link rel="alternate" hrefLang="x-default" href={domainUrl} />
                {metaTags && metaTags.length > 0 && metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="theme-color" content="#000000" />
                {site?.favicon && <link rel="icon" href={site.favicon} />}
                {structuredData && structuredData.map((schema, index) => (
                    <script
                        key={`structured-data-${index}`}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
            </Head>
            <PageLayout page={page} site={site} />
        </>
    );
}

export function getStaticPaths() {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;

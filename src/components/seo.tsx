import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

type SeoPropsType = {
  title: string;
  description: string;
};

const Seo = ({ title, description }: SeoPropsType) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterCardImage,
    openGraphImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    openGraphImage: `${siteUrl}${openGraphImage}`,
    twitterCardImage: `${siteUrl}${twitterCardImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.openGraphImage} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.openGraphImage && (
        <meta property="og:image" content={seo.openGraphImage} />
      )}

      <meta name="twitter:card" content="summary" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.twitterCardImage && (
        <meta name="twitter:image" content={seo.twitterCardImage} />
      )}
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        twitterCardImage
        openGraphImage
      }
    }
  }
`;

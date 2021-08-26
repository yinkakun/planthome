import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document types
import siteSettings from './documents/site-settings';
import homepage from './documents/home-page';
import pages from './documents/pages';
import products from './documents/products';
import productCategories from './documents/product-categories';

// object types
import blockContent from './objects/block-content';
import figure from './objects/figure';
import hero from './objects/hero';
import imageGallery from './objects/image-gallery';
import link from './objects/link';
import newsletter from './objects/newsletter';
import seo from './objects/seo';
import socialLink from './objects/social-link';
import footerNavigationBlock from './objects/footer-navigation-block';
import featuredProduct from './objects/featured-product';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteSettings,
    homepage,
    pages,
    products,
    productCategories,

    blockContent,
    figure,
    hero,
    imageGallery,
    link,
    newsletter,
    seo,
    socialLink,
    footerNavigationBlock,
    featuredProduct,
  ]),
});

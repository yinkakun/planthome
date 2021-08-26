import React from 'react';
import Layout from '../components/layout';
import Hero from '../sections/hero';
import Newsletter from '../sections/newsletter';
import FeaturedPlant from '../sections/featured-plant';
import Collections from '../sections/collections';
import BestSellers from '../sections/best-sellers';
import Gallery from '../sections/gallery';

const IndexPage = () => (
  <Layout title="Home">
    <Hero />
    <Collections />
    <BestSellers />
    <FeaturedPlant />
    <Newsletter />
    <Gallery />
  </Layout>
);

export default IndexPage;

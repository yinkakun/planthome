import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeaturedPlantQuery } from '../../graphql-types';
import Fade from 'react-reveal/Fade';

const FeaturedPlant = () => {
  const data = useStaticQuery<FeaturedPlantQuery>(query);
  const featuredProductData = data?.sanityHomepage?.featuredProduct;

  return (
    <section className="relative bg-primary bg-opacity-60 mt-44">
      <div className="container flex flex-col justify-between max-w-screen-xl px-5 pt-32 pb-16 mx-auto iitems-center md:flex-row sm:order-last">
        <div className="max-w-xl mt-8 text-center order-0 sm:text-left sm:mt-0">
          <Fade bottom>
            <h2 className="text-4xl font-bold sm:text-5xl">Featured Plant</h2>
          </Fade>

          <div>
            <Fade bottom cascade>
              <h3 className="mt-4 text-3xl font-normal sm:text-4xl sm:mt-14">
                {featuredProductData?.product?.name}
              </h3>
              <p className="mt-4 text-lg tracking-wide sm:text-2xl sm:tracking-widest">
                {
                  featuredProductData?.product?.description?.[0]?.children?.[0]
                    ?.text
                }
              </p>
            </Fade>
            <div className="absolute top-0 right-0 z-10 flex flex-col py-6 pl-6 pr-10 font-bold text-white transform sm:pr-20 sm:pl-10 sm:py-8 sm:top-1/2 bg-accent">
              <span className="text-xl sm:text-2xl">Price</span>
              <span className="text-3xl sm:text-4xl">
                ${featuredProductData?.product?.price}
              </span>
            </div>
            <Link
              className="inline-block w-full px-10 py-5 text-2xl font-bold text-center text-white bg-accent mt-7 sm:w-auto"
              to={featuredProductData?.cta?.slug?.current as string}
            >
              {featuredProductData?.cta?.text}
            </Link>
          </div>
        </div>

        <div className="relative order-first transform sm:translate-y-8 sm:order-last">
          <div className="absolute left-0 right-0 h-full max-w-md mx-auto bg-center bg-no-repeat bg-featured-product" />

          <div className="max-w-xl ">
            <div className="transform -translate-y-20 sm:-translate-y-32">
              <GatsbyImage
                alt=""
                image={
                  featuredProductData?.product?.productImage?.asset
                    ?.gatsbyImageData
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlant;

const query = graphql`
  query FeaturedPlant {
    sanityHomepage {
      featuredProduct {
        product {
          productImage {
            asset {
              gatsbyImageData
            }
          }
          price
          name
          slug {
            current
          }
          description {
            children {
              text
            }
          }
        }
        cta {
          text
          slug {
            current
          }
        }
      }
    }
  }
`;

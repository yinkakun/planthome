import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BestSellersQuery } from '../../graphql-types';

const BestSellers = () => {
  const data = useStaticQuery<BestSellersQuery>(query);
  const bestSellersData = data?.sanityHomepage?.bestsellers;

  return (
    <section>
      <div className="container max-w-screen-xl px-5 pt-24 mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl sm:text-left">
          Best Best Sellers
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3 auto-rows-fr">
          {bestSellersData?.map((product) => {
            return (
              <div
                key={product?.name}
                className="flex flex-col mt-8 sm:mt-0 first-of-type:mt-0"
              >
                <GatsbyImage
                  style={{ height: '430px' }}
                  image={product?.productImage?.asset?.gatsbyImageData}
                  alt={product?.name as string}
                />
                <div>
                  <Link
                    to={product?.slug?.current as string}
                    className="flex justify-between mt-3 text-xl text-current"
                  >
                    <span>{product?.name}</span>
                    <span>${product?.price}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

const query = graphql`
  query BestSellers {
    sanityHomepage {
      bestsellers {
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
      }
    }
  }
`;

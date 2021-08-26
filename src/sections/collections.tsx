import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactComponent as ArrowRightIcon } from '../icons/arrow-right.svg';
import { CollectionsQuery } from '../../graphql-types';

const Collections = () => {
  const data = useStaticQuery<CollectionsQuery>(query);
  const collectionsData = data?.sanityHomepage?.collections;

  return (
    <section>
      <div className="container max-w-screen-xl px-5 pt-24 mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl sm:text-left">
          Collections
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3 auto-rows-fr">
          {collectionsData?.map((collection: any) => {
            return (
              <div
                key={collection.title}
                className="flex flex-col mt-8 sm:mt-0 first-of-type:mt-0"
              >
                <GatsbyImage
                  style={{ height: '430px' }}
                  image={collection.image.asset.gatsbyImageData}
                  alt={collection.title}
                />
                <div>
                  <Link
                    to={collection.slug.current}
                    className="inline-block mt-3 text-xl text-current"
                  >
                    <span>{collection.title}</span>
                    <span className="inline-block ml-3">
                      <ArrowRightIcon />
                    </span>
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

export default Collections;

const query = graphql`
  query Collections {
    sanityHomepage {
      collections {
        title
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

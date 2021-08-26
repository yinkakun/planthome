import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GalleryQuery } from '../../graphql-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const Gallery = () => {
  const { sanityHomepage } = useStaticQuery<GalleryQuery>(query);
  const firstImage = sanityHomepage?.gallery?.images?.[0]?.asset;
  const restOfImages = sanityHomepage?.gallery?.images?.slice(1);

  return (
    <div>
      <div className="container mx-auto mt-36">
        <div className="grid max-w-screen-xl grid-cols-3 grid-rows-2 gap-5 px-5 mx-auto md:grid-flow-col">
          <div className="col-span-2 row-span-2 md:col-span-1">
            <GatsbyImage
              image={firstImage?.gatsbyImageData}
              alt=""
              className="h-full"
            />
          </div>
          <div className="grid w-full h-full grid-cols-2 col-span-3 grid-rows-2 row-span-2 gap-5 md:col-span-2">
            {restOfImages?.map((image, index) => {
              return (
                <GatsbyImage
                  key={index}
                  image={image?.asset?.gatsbyImageData}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const query = graphql`
  query Gallery {
    sanityHomepage {
      gallery {
        images {
          asset {
            gatsbyImageData
            altText
          }
        }
      }
    }
  }
`;

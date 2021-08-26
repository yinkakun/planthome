import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PortableText from 'react-portable-text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { NewsletterQuery } from '../../graphql-types';
import Fade from 'react-reveal/Fade';

const Newsletter = () => {
  const data = useStaticQuery<NewsletterQuery>(query);
  const newsletterData = data?.sanityHomepage?.newsletter;

  return (
    <section className="py-20 mt-24 bg-accent">
      <div className="container relative max-w-screen-xl px-5 mx-auto text-center sm:text-left">
        <Fade bottom>
          <PortableText
            className="max-w-4xl text-3xl text-white sm:text-4xl"
            serializers={{}}
            content={newsletterData?._rawIntro}
          />
        </Fade>

        <div className="flex justify-end mt-20 sm:mt-36">
          <form className="flex w-full max-w-xl border-b-2">
            <input
              type="email"
              placeholder={newsletterData?.formPlaceholderText as string}
              className="flex-grow p-4 pl-0 text-lg text-white placeholder-gray-400 bg-transparent focus:outline-none"
            />
            <button className="pl-2 text-2xl font-bold text-white">
              {newsletterData?.submitButtonText}
            </button>
          </form>
        </div>

        <div className="absolute hidden sm:block top-1/2 left-3/20">
          <GatsbyImage
            image={data?.sanitySiteSettings?.logo?.asset?.gatsbyImageData}
            alt=""
            className="w-16 h-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

const query = graphql`
  query Newsletter {
    sanitySiteSettings {
      title
      logo {
        asset {
          gatsbyImageData
        }
      }
    }
    sanityHomepage {
      newsletter {
        formPlaceholderText
        submitButtonText
        _rawIntro(resolveReferences: { maxDepth: 10 })
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

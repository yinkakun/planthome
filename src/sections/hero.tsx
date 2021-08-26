import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from 'react-portable-text';
import { HeroQuery } from '../../graphql-types';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  const data = useStaticQuery<HeroQuery>(query);
  const hero = data.sanityHomepage?.hero;

  return (
    <section className="bg-primary">
      <div className="container z-20 flex flex-col items-center max-w-screen-xl px-5 pt-32 pb-32 mx-auto md:flex-row md:justify-between">
        <div className="md:max-w-lg">
          <Fade bottom cascade>
            <PortableText
              serializers={{
                strong: ({ children }: any) => (
                  <span className="text-dull-orange">
                    {children}
                    <GatsbyImage
                      image={
                        data.sanitySiteSettings?.logo?.asset?.gatsbyImageData
                      }
                      alt=""
                      className="ml-3 align-baseline"
                    />
                  </span>
                ),
              }}
              content={hero?._rawTitle}
              className="text-4xl font-bold md:text-6xl"
            />

            <p className="mt-10 text-xl md:mt-4 md:text-2xl">
              {hero?.subtitle}
            </p>
            <Link
              className="inline-block w-full px-8 py-5 mt-6 text-xl text-center text-white md:mt-5 md:text-2xl bg-accent md:w-auto"
              to={hero?.heroCta?.slug?.current as string}
            >
              {hero?.heroCta?.text}
            </Link>
          </Fade>
        </div>

        <Fade>
          <div className="relative z-10 w-11/12 pr-4 mt-16 transform md:mt-0 md:-translate-x-8 sm:w-auto">
            <div className="absolute top-0 z-0 block w-full h-full transform bg-white rotate-6" />
            <div className="absolute top-0 z-0 block w-full h-full transform bg-green-500 -rotate-6" />
            <div>
              <GatsbyImage
                alt=""
                image={hero?.heroImage?.asset?.gatsbyImageData}
                imgClassName="image"
                objectFit="scale-down"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;

const query = graphql`
  query Hero {
    sanitySiteSettings {
      title
      logo {
        asset {
          gatsbyImageData
        }
      }
    }
    sanityHomepage {
      hero {
        heroCta {
          text
          slug {
            current
          }
        }
        heroImage {
          asset {
            gatsbyImageData(height: 440)
          }
        }
        subtitle
        _rawTitle
      }
    }
  }
`;

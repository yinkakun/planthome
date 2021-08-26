import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FooterQuery } from '../../graphql-types';
import { ReactComponent as FacebookIcon } from '../icons/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram-icon.svg';
import { ReactComponent as TwitterIcon } from '../icons/twitter-icon.svg';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  const { sanitySiteSettings } = useStaticQuery<FooterQuery>(query);
  const firstNavBlock = sanitySiteSettings?.footerNavigation?.[0]?.items;
  const secondNavBlock = sanitySiteSettings?.footerNavigation?.[1]?.items;

  return (
    <footer className="bg-primary mt-52">
      <Fade cascade>
        <div className="container flex flex-col max-w-screen-xl px-5 pt-32 mx-auto pb-9">
          <div className="flex flex-col items-start justify-between md:items-center md:flex-row">
            <div className="flex flex-row items-center sm:flex-col">
              <div>
                <GatsbyImage
                  image={sanitySiteSettings?.logo?.asset?.gatsbyImageData}
                  alt=""
                />
              </div>
              <h2 className="ml-2 text-3xl font-bold sm:text-4xl md:mt-4 md:ml-0">
                {sanitySiteSettings?.title}
              </h2>
            </div>

            <ul className="mt-10 sm:mt-10">
              {firstNavBlock?.map((item) => {
                return (
                  <li
                    key={item?.slug?.current}
                    className="mt-4 text-base sm:text-lg"
                  >
                    <Link to={item?.slug?.current as string}>{item?.text}</Link>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-10 sm:mt-10">
              {secondNavBlock?.map((item) => {
                return (
                  <li
                    key={item?.slug?.current}
                    className="mt-4 text-base sm:text-lg"
                  >
                    <Link to={item?.slug?.current as string}>{item?.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-between mt-12 sm:mt-24">
            <p className="text-sm">{sanitySiteSettings?.copyright}</p>

            <ul className="flex">
              {sanitySiteSettings?.socialLinks?.map((item) => {
                if (item?.socialMedia === 'Instagram') {
                  return (
                    <li key={item?.url} className="ml-4">
                      <a href={item?.url as string}>
                        <span>
                          <InstagramIcon />
                        </span>
                      </a>
                    </li>
                  );
                }

                if (item?.socialMedia === 'Twitter') {
                  return (
                    <li key={item?.url} className="ml-4">
                      <a href={item?.url as string}>
                        <span>
                          <TwitterIcon />
                        </span>
                      </a>
                    </li>
                  );
                }

                if (item?.socialMedia === 'Facebook') {
                  return (
                    <li key={item?.url} className="ml-4">
                      <a href={item?.url as string}>
                        <span>
                          <FacebookIcon />
                        </span>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;

const query = graphql`
  query Footer {
    sanitySiteSettings {
      footerNavigation {
        items {
          text
          slug {
            current
          }
        }
      }
      copyright
      title
      logo {
        asset {
          gatsbyImageData
          altText
        }
      }
      socialLinks {
        url
        socialMedia
      }
    }
  }
`;

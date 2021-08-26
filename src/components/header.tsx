import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Cross as Hamburger } from 'hamburger-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeaderQuery } from '../../graphql-types';
import useScrollBlock from '../utils/use-scroll-block';
import useIsMobile from '../utils/use-is-mobile';
import Fade from 'react-reveal/Fade';

const Header = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery<HeaderQuery>(query);
  const result = data.sanitySiteSettings;

  const hendleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [menuOpen]);

  const getMenuStyle = () => {
    const isMobile = useIsMobile();

    if (menuOpen && isMobile) {
      return { clipPath: `circle(140.2% at 98% 0)` };
    }

    if (!menuOpen && isMobile) {
      return { clipPath: `circle(1.1% at 99% 0)` };
    }

    if (!isMobile) {
      return { clipPath: `none` };
    }
  };

  return (
    <header className="pt-8 bg-primary">
      <nav className="container z-30 flex items-center justify-between max-w-screen-xl px-5 mx-auto">
        <Fade top>
          <Link
            to="/"
            className="fixed top-0 left-0 right-0 z-30 flex items-center h-20 p-5 text-2xl font-medium sm:static bg-primary-400 sm:text-3xl sm:border-0 bg-opacity-90 sm:bg-primary"
          >
            <GatsbyImage alt="" image={result?.logo?.asset?.gatsbyImageData} />
            <span className="ml-2 font-medium">{result?.title}</span>
          </Link>
        </Fade>

        <ul
          className="fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center transition-all duration-500 ease-linear sm:pointer-events-auto sm:static sm:flex-row bg-primary-400 sm:bg-transparent"
          style={getMenuStyle()}
        >
          {result?.headerNavigation?.map((navItem: any) => {
            return (
              <Fade bottom key={navItem.slug.current}>
                <li
                  key={navItem.slug.current}
                  className="mt-6 text-2xl sm:text-lg ml:0 sm:mt-0 sm:ml-7 last:ml-0"
                >
                  <Link className="p-2" to={navItem.slug.current}>
                    {navItem.text}
                  </Link>
                </li>
              </Fade>
            );
          })}
        </ul>

        <button
          className="fixed z-50 flex items-center justify-center w-40 h-40 rounded-full bg-primary-200 bbg-white bbg-opacity-50 -top-20 -right-20 sm:hidden"
          onClick={hendleMenuButtonClick}
        >
          <span className="absolute z-50 bottom-6 left-6">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;

const query = graphql`
  query Header {
    sanitySiteSettings {
      title
      logo {
        asset {
          gatsbyImageData
        }
      }
      headerNavigation {
        text
        slug {
          current
        }
      }
    }
  }
`;

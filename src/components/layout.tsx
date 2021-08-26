import React from 'react';
import { Fragment } from 'react';
import Seo from './seo';
import Footer from './footer';
import Header from './header';
import './layout.scss';

type LayoutPropsType = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const Layout = ({ children, title, description }: LayoutPropsType) => {
  return (
    <Fragment>
      <Seo title={title} description={description} />
      <div className="flex flex-col h-full">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;

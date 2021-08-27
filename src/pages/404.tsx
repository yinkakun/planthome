import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { File } from 'react-kawaii';

const NotFoundPage = () => {
  return (
    <Layout title="404">
      <div className="h-full">
        <div className="container flex flex-col items-center justify-center h-full max-w-screen-xl mx-auto mt-20">
          <File size={200} mood="ko" color="#83D1FB" />
          <p className="max-w-sm mt-6 text-2xl text-center">
            Not Coming Anytime Soon Bruh... Only the{' '}
            <Link className="text-primary-900" to="/">
              Homepage
            </Link>{' '}
            is available.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

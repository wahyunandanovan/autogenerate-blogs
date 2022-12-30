import { NextSeo } from 'next-seo';
import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import Blogs from '../../sections/blog/Blogs';
import { siteName } from '../../utils/data';

function Blog() {
  return (
    <React.Fragment>
      <NextSeo title="My-Blog | Articles" description={`this oficial website ${siteName}`} />
      <PageLayout>
        <Blogs />
      </PageLayout>
    </React.Fragment>
  );
}

export default Blog;

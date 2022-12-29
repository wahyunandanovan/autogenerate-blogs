import { NextSeo } from 'next-seo';
import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import Blogs from '../../sections/blog/Blogs';

function Blog() {
  return (
    <React.Fragment>
      <NextSeo title="My-Blog | Articles" />
      <PageLayout>
        <Blogs />
      </PageLayout>
    </React.Fragment>
  );
}

export default Blog;

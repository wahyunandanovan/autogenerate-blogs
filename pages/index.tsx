import React from "react";
import PageLayout from "../layouts/PageLayout";
import HomeSection from "../sections/home";
import { NextSeo } from 'next-seo';
import { siteName } from "../utils/data";


export default function Home() {
  return (
    <React.Fragment>
      <NextSeo title="My-Blog | Home" description={`this website official ${siteName}`} />
      <PageLayout>
        <HomeSection />
      </PageLayout>
    </React.Fragment>
  );
}

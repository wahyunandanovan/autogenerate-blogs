import React from "react";
import { NextSeo } from 'next-seo';
import PageLayout from "../layouts/PageLayout";
import HomeSection from "../sections/home";

export default function Home() {
  return (
    <React.Fragment>
      <NextSeo title="My-Blog | Home" />
      <PageLayout>
        <HomeSection />
      </PageLayout>
    </React.Fragment>
  );
}

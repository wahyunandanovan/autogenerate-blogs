import React from "react";
import { NextSeo } from 'next-seo';
import PageLayout from "../layouts/PageLayout";
import HomeSection from "../sections/home";

export default function Home() {
  return (
    <>
      <NextSeo title="My-Blog | Home" />
      <PageLayout>
        <HomeSection />
      </PageLayout>
    </>
  );
}

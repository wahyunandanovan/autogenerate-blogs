import React from "react";
import { NextSeo, NextSeoProps } from 'next-seo';
import PageLayout from "../layouts/PageLayout";
import HomeSection from "../sections/home";

export default function Home() {
  return (
    <PageLayout>
      <HomeSection />
    </PageLayout>
  );
}

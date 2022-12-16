import React from "react";
import PageLayout from "../layouts/PageLayout";
import HomeSection from "../sections/home";

export default function Home() {
  return (
    <PageLayout title='MyBlog | Home'>
      <HomeSection />
    </PageLayout>
  );
}

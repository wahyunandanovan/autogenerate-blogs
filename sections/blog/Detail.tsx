import React from "react";
import Footer from "../../layouts/PageLayout/Footer";
import BottomDetail from "./BottomDetail";
import CenterDetail from "./CenterDetail";
import TopDetail from "./TopDetail";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { collection, limit, query, where } from "firebase/firestore";
import { firestore } from "../../utils/firebase";
import useFetch from "../../hooks/useFetch";

function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const q = query(collection(firestore, "articles"), where("title", "==", String(id)), limit(1));

  const { data, isLoading } = useFetch(q);

  return (
    <React.Fragment>
      <NextSeo title="My-Blog | Home" />
      <div>
        <TopDetail
          category="ekonomi"
          chipcolor="1"
          title={data[0]?.title}
          short=" Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis
      aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum
      varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit."
        />
        <CenterDetail title={data[0]?.title} />
        <BottomDetail />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Detail;

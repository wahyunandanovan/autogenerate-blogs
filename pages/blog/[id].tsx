import React from "react";
import Detail from "../../sections/blog/Detail";
import { useRouter } from "next/router";

function Id() {
  const router = useRouter();
  const { id } = router.query;

  return <Detail />;
}

export default Id;

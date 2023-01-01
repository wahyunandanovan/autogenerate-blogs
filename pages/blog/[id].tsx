import React from 'react';
import Detail from '../../sections/blog/Detail';
import { collection, documentId, getDocs, limit, query, where } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import { NextSeo } from 'next-seo';

function Id(props: any) {
  const blog = props?.data

  return (
    <React.Fragment>
      <NextSeo title={blog[0]?.title} description={blog[0]?.body?.slice(0, 100)} />
      <Detail query={{ data: blog }} />
    </React.Fragment>
  );
}

export default Id;

export async function getServerSideProps(context: any) {

  const q = await query(collection(firestore, 'articles'), where(documentId(), 'in', [String(context.params.id
  )]), limit(1));

  const blog = await getDocs(q)
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
      return newData
    })

  return {
    props: { data: blog },
  }
}
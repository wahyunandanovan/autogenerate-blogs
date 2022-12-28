import React from 'react';
import Detail from '../../sections/blog/Detail';
import { useRouter } from 'next/router';
import { collection, documentId, getDocs, limit, query, where } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import { NextSeo } from 'next-seo';

function Id() {
  const [data, setData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);

  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      const q = query(collection(firestore, 'articles'), where(documentId(), 'in', [String(id)]), limit(1));

      const fetchPost = async () => {
        await getDocs(q)
          .then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
            setData(newData);
            setIsLoading(false);
          })
          .catch((err) => setIsError(true));
      };
      fetchPost();
    }
  }, [router.isReady]);

  return (
    <React.Fragment>
      <NextSeo title="My-Blog | Home" />
      <Detail query={{ data: data, isLoading: isLoading, isError: isError }} />
    </React.Fragment>
  );
}

export default Id;

import React from 'react';
import Loading from '../../components/Loading';
import Footer from '../../layouts/PageLayout/Footer';
import BottomDetail from './BottomDetail';
import CenterDetail from './CenterDetail';
import TopDetail from './TopDetail';

function Detail({ query }: any) {
  const { data, isLoading, isError } = query;

  const res = data[0];

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <TopDetail
            image={res?.images[0]}
            category={res?.category?.name}
            chipcolor={res?.category?.id}
            title={res?.title}
            view={res?.view}
            short={`${res?.body?.slice(0, 297)}...`}
          />
          <CenterDetail title={res?.title} body={res?.body} />
          <BottomDetail categoryId={res?.category?.id} />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
}

export default Detail;

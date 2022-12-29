import { collection, endAt, orderBy, query, startAt, where } from 'firebase/firestore';
import React from 'react';
import { usePagination } from 'use-pagination-firestore';
import { firestore } from '../../utils/firebase';
import List from './List';

function Blogs() {
  const [count, setCount] = React.useState<number>(1);
  const searchkey = 'Pertemuan';
  const { items, isLoading, isStart, isEnd, getPrev, getNext } = usePagination(query(collection(firestore, 'articles'), orderBy('created_at', 'desc')), {
    limit: 9,
  });

  return (
    <React.Fragment>
      <List
        data={items}
        isLoading={isLoading}
        getPrev={() => {
          setCount((c: number) => c - 1);
          getPrev();
        }}
        getNext={() => {
          setCount((c: number) => c + 1);
          getNext();
        }}
        disabledNext={isEnd}
        disabledPrev={isStart}
        indicatorPage={count}
      />
    </React.Fragment>
  );
}

export default Blogs;

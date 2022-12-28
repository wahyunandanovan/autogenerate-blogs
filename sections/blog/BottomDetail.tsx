import { collection, limit, orderBy, query } from 'firebase/firestore';
import moment from 'moment';
import React from 'react'
import Cover from '../../components/Cover';
import useFetch from '../../hooks/useFetch';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import styles from '../../styles/sections/blog/bottom-detail.module.scss'
import { getColor } from '../../utils';
import { firestore } from '../../utils/firebase';

function BottomDetail() {
    const scrollRef: any = useHorizontalScroll();

    const q = query(collection(firestore, "articles"), limit(6), orderBy("created_at", "desc"));

    const { data, isLoading } = useFetch(q);

    const time = (item: any) => moment(String(item?.created_at)).fromNow();


    return (
        <div className={styles.container}  >
            <h4 className={styles.h4}>
                <span className={styles.span}>You may</span> also like
            </h4>
            <div ref={scrollRef} className={styles.wrapper_map}>
                {data?.map((item: any, index: number) => {
                    return (
                        <div key={index} className={styles.item} >
                            <Cover
                                href={`/blog/f`}
                                image={item?.images[0]}
                                category={item?.category.name.toUpperCase()}
                                avatar="/images/wahyu.jpg"
                                chipcolor={getColor(item?.category.id)}
                                title={item?.title}
                                authorname="Wahyu Nanda"
                                time={time(item)}
                                like={200}
                                view={item?.view}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BottomDetail
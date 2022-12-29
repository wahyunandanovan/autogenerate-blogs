import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import Cover from '../../components/Cover';
import Image from 'next/image';
import Chip from '../../components/Chip';
import Link from 'next/link';
import { AiOutlineRight, AiOutlineLeft, AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
//UTILITY
import useFetch from '../../hooks/useFetch';
import moment from 'moment';
import { collection, limit, query } from 'firebase/firestore';
import { getColor } from '../../utils';
import { palette } from '../../utils/palette';
import { blurDataURL, siteName } from '../../utils/data';
import { firestore } from '../../utils/firebase';
//STYLE
import styles from '../../styles/sections/home/recommendation.module.scss';

function Recommendation() {
  const q = query(collection(firestore, 'articles'), limit(4));

  const { data: recomendationData, isLoading } = useFetch(q);

  const mapArticles = recomendationData.slice(1, 4);

  const firstArr = recomendationData[0];

  return (
    <SectionContainer>
      <div className={styles.row}>
        <div>
          <h4>
            <span>Recomend</span> For You
          </h4>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left_column}>
          <Cover
            href={`/blog/${firstArr?.id}`}
            image={firstArr?.images[0]}
            category={firstArr?.category?.name.toUpperCase()}
            avatar={'/images/wahyu.jpg'}
            chipcolor={getColor(firstArr?.category?.id)}
            title={firstArr?.title}
            authorname="Wahyu Nanda"
            time={moment(String(firstArr?.created_at)).fromNow()}
            // like={firstArr?.like + 20}
            view={firstArr?.view | 0}
          />
        </div>
        <div className={styles.rigth_column}>
          {mapArticles?.map((item: any, idx: number) => {
            const img = item?.images[0];
            const time = moment(String(item.created_at)).fromNow();
            return (
              <div key={idx} className={styles.wrapper_map}>
                <div className={styles.img_wrapp}>
                  <Image src={img}
                    alt={`${item.title} - ${siteName}`}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />
                  <div>
                    <Chip title={item.category.name.toUpperCase()} backgroundColor={getColor(item.category.id)} />
                  </div>
                </div>
                <div className={styles.detail}>
                  <Link href={`/blog/${item.id}`} style={{ textDecoration: 'none' }}>
                    <h5>{item.title}</h5>
                  </Link>
                  <p>Gafar R ~ {time}</p>
                  <div className={styles.like_wrapper}>
                    {/* <div>
                      <AiOutlineHeart size={20} color={palette.grey} style={{ cursor: 'pointer' }} />
                      <p>{item.like + 20}</p>
                    </div> */}
                    <div>
                      <AiOutlineEye size={20} color={palette.grey} style={{ cursor: 'pointer' }} />
                      <p>{item.view | 0}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Recommendation;

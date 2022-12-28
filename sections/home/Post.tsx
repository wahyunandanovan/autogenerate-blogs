import React from 'react';
//COMPONENTS
import PopularPost from '../../components/PopularPost';
import PostCard from '../../components/PostCard';
import SectionContainer from '../../components/SectionContainer';
//UTILITY
import { useRouter } from 'next/router';
//STYLE
import styles from '../../styles/sections/home/post.module.scss';

function Post() {
  const img =
    'https://img.freepik.com/free-photo/special-forces-soldier-holding-assault-rifle-with-laser-sight-aims-target-studio-photo-against-dark-textured-wall_613910-20341.jpg?w=740&t=st=1671857720~exp=1671858320~hmac=da018ba65869c8d9920dcce741c0fe884721951dfb8c8c6dad436ffe41e5d91f';

  const router = useRouter();

  const _goDetail = (id: string) => router.push({ pathname: `/blog/${id}` });

  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.popular}>
          <PopularPost onClick={(v: string) => _goDetail(v)} />
        </div>
        <div className={styles.latest}>
          <h4 className={styles.h4}>
            Latest<span className={styles.span}> Post</span>
          </h4>
          <div className={styles.flex_container}>
            {[1, 2, 3, 4, 5, 6].map((item: any, index: number) => {
              return (
                <div key={index} className={styles.flex_item}>
                  <PostCard
                    img={img}
                    time="Nov 23, 2022"
                    title="#2022 Trends Healthy Food"
                    category="ECONOMIC"
                    description="Nullam non nisi est sit amet. Arcu vitae amet elementum curabitur vitae nunc. Ut tellus elementum"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Post;

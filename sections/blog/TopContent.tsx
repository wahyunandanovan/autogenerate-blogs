import Image from 'next/image';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import Avatar from '../../components/Avatar';
import styles from '../../styles/sections/blog/top-detail.module.scss';
import { blurDataURL, siteName } from '../../utils/data';

interface PropsInterface {
  title: string;
}

function TopDetail({ title }: PropsInterface) {
  return (
    <div className={styles.container}>
      <IoMdArrowBack size={32} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.written}>Written by content writer {siteName}.</p>
      <div className={styles.author_wrapp}>
        <div className={styles.left}>
          <Avatar src="/images/wahyu.jpg" size={32} />
          <p>
            Wahyu <span>2 minutes ago</span>
          </p>
        </div>
      </div>
      <div className={styles.img}>
        <Image src="https://picsum.photos/id/1018/1000/600/" alt="img" placeholder="blur" blurDataURL={blurDataURL} fill />
      </div>
    </div>
  );
}

export default TopDetail;

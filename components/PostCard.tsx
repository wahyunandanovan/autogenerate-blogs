import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/post-card.module.scss';
import Chip from './Chip';
import { getColor } from '../utils';
import { blurDataURL, siteName } from '../utils/data';
import Link from 'next/link';

interface PropsInterface {
  img: string;
  title: string;
  category?: string;
  time?: string;
  description?: string;
  href: any;
  chipColor?: string;
}

function PostCard({ img, title, time, description, category, href, chipColor }: PropsInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={img} alt={`${title} - ${siteName}`} placeholder="blur" blurDataURL={blurDataURL} fill />
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <Chip title={category} backgroundColor={getColor(chipColor)} />
          <p>{time}</p>
        </div>
        <Link href={href} style={{ textDecoration: 'none' }}>
          <h5 className={styles.h5}>{title}</h5>
        </Link>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}

export default PostCard;

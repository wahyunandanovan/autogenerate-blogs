import React from 'react';
//COMPONENTS
import Chip from './Chip';
import Avatar from './Avatar';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { blurDataURL, siteName } from '../utils/data';
//UTILITY
import { palette } from '../utils/palette';
//STYLES
import styles from '../styles/components/cover.module.scss';

interface PropsInterface {
  image: string;
  href?: any;
  chipcolor: string | any;
  category?: string | any;
  trending?: boolean;
  avatar?: string | any;
  title: string;
  authorname?: string;
  time?: string;
  // like?: number;
  view?: number;
  small?: boolean;
  onClick?: () => void;
  onClickLike?: () => void;
  onClickView?: () => void;
}

function Cover({ image, chipcolor, href, trending, category, avatar, title, authorname, time, small, view, onClick, onClickLike, onClickView }: PropsInterface) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'inherit',
      }}
    >
      {image && <Image src={image} alt={`${title} - ${siteName}`} placeholder="blur" blurDataURL={blurDataURL} fill />}
      <div className={small ? styles.absolute_div_small : styles.absolute_div}>
        <div className={styles.top}>
          {trending && (
            <div>
              <Chip trending title="TRENDING" />
            </div>
          )}
          <div>
            <Chip title={category} backgroundColor={chipcolor} />
          </div>
        </div>
        <div className={styles.bottom}>
          {href && (
            <Link href={href} style={{ textDecoration: 'none' }}>
              <h5 className={styles.h5}>{title}</h5>
            </Link>
          )}

          {onClick && (
            <h5 onClick={onClick} className={styles.h5}>
              {title}
            </h5>
          )}

          <div className={styles.footer}>
            <div className={styles.author_wrapp}>
              <Avatar src={avatar} size={34} />
              <div>
                <p className={styles.author}>{authorname}</p>
                <p className={styles.time}>{time}</p>
              </div>
            </div>
            <div className={styles.like_wrapper}>
              {/* <div>
                <AiOutlineHeart onClick={onClickLike} size={20} color={palette.white} style={{ cursor: 'pointer' }} />
                <p>{like}</p>
              </div> */}
              <div>
                <AiOutlineEye onClick={onClickView} size={20} color={palette.white} style={{ cursor: 'pointer' }} />
                <p>{Number(view)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;

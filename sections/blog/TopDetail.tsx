import React from 'react';
//COMPONENTS
import Image from 'next/image';
import Avatar from '../../components/Avatar';
import Chip from '../../components/Chip';
import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineEye } from 'react-icons/ai';
//UTILITY
import { blurDataURL, QueryInterface, siteName } from '../../utils/data';
import { palette } from '../../utils/palette';
import { getColor } from '../../utils';
//STYLE
import styles from '../../styles/sections/blog/top-detail.module.scss';
import { MdCategory } from 'react-icons/md';
import { useRouter } from 'next/router';

function TopDetail({ title, short, category, chipcolor, image, time, view }: QueryInterface) {
  const router = useRouter();
  const _goBack = () => router.back();

  return (
    <div className={styles.container}>
      <IoMdArrowBack onClick={_goBack} size={32} style={{ cursor: 'pointer' }} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.written}>Written by content writer {siteName}.</p>
      <div className={styles.author_wrapp}>
        <div className={styles.left}>
          <Avatar src="/images/wahyu.jpg" size={32} />
          <p>
            Wahyu <span>{time}</span>
          </p>
        </div>
        <div className={styles.view_wrapp}>
          <AiOutlineEye size={20} color={palette.grey} style={{ cursor: 'pointer' }} />
          <p>{view}</p>
        </div>
      </div>
      <div className={styles.img}>
        <div className={styles.chip}>
          <Chip title={category.toUpperCase()} backgroundColor={getColor(chipcolor)} />
        </div>
        <Image src={image} alt={`${image} - ${siteName}`} placeholder="blur" blurDataURL={blurDataURL} fill />
      </div>
      <p className={styles.short_desc}>{short}</p>
    </div>
  );
}

export default TopDetail;

import React from "react";
//COMPONENTS
import Chip from "./Chip";
import Avatar from "./Avatar";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { blurDataURL } from "../utils/data";
//UTILITY
import { palette } from "../utils/palette";
//STYLES
import styles from "../styles/components/cover.module.scss";

interface PropsInterface {
  image: string;
  chipcolor: string | any
  category?: string | any
  trending?: boolean
  avatar?: string | any
  title: string
  authorname?: string
  time?: string
  like?: number
  view?: number
  onClickLike?: () => void
  onClickView?: () => void
}

function Cover({ image, chipcolor, trending, category, avatar, title, authorname, time, like, view, onClickLike, onClickView }: PropsInterface) {
  return (
    <div
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "inherit",
      }}
    >
      <Image
        src={image}
        alt={`image-alt${image}`}
        placeholder='blur'
        blurDataURL={blurDataURL}
        fill
      />
      <div className={styles.absolute_div}>
        <div className={styles.top}>
          {trending && (<div>
            <Chip trending title="TRENDING" />
          </div>)}
          <div>
            <Chip title={category} backgroundColor={chipcolor} />
          </div>
        </div>
        <div className={styles.bottom}>
          <h5 className={styles.h5}>{title}</h5>
          <div className={styles.footer}>
            <div className={styles.author_wrapp}>
              <Avatar src={avatar} size={34} />
              <div>
                <p className={styles.author}>{authorname}</p>
                <p className={styles.time}>{time}</p>
              </div>
            </div>
            <div className={styles.like_wrapper}>
              <div>
                <AiOutlineHeart onClick={onClickLike} size={20} color={palette.white} style={{ cursor: 'pointer' }} />
                <p>{like}</p>
              </div>
              <div>
                <AiOutlineEye onClick={onClickView} size={20} color={palette.white} style={{ cursor: 'pointer' }} />
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;

import React from "react";
//COMPONENTS
import Image from "next/image";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
//UTILITY
import { blurDataURL, siteName } from "../../utils/data";
import { palette } from "../../utils/palette";
import { getColor } from "../../utils";
//STYLE
import styles from "../../styles/sections/blog/top-detail.module.scss";
import { MdCategory } from "react-icons/md";

interface PropsInterface {
  title: string;
  short?: string;
  category?: string | any;
  chipcolor?: string;
}

function TopDetail({ title, short, category, chipcolor }: PropsInterface) {
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
        <div className={styles.view_wrapp}>
          <AiOutlineEye size={20} color={palette.grey} style={{ cursor: "pointer" }} />
          <p>100</p>
        </div>
      </div>
      <div className={styles.img}>
        <div className={styles.chip}>
          <Chip title={category.toUpperCase()} backgroundColor={getColor(chipcolor)} />
        </div>
        <Image
          src="https://picsum.photos/id/1018/1000/600/"
          alt="img"
          placeholder="blur"
          blurDataURL={blurDataURL}
          fill
        />
      </div>
      <p className={styles.short_desc}>{short}</p>
    </div>
  );
}

export default TopDetail;

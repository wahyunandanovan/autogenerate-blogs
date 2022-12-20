import React from "react";
//COMPONENTS
import Chip from "./Chip";
import Avatar from "./Avatar";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
//UTILITY
import { getColor } from "../utils";
//STYLES
import styles from "../styles/components/cover.module.scss";
import { palette } from "../utils/palette";

interface PropsInterface {
  image: string;
}

function Cover({ image }: PropsInterface) {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "inherit",
      }}
    >
      <div className={styles.absolute_div}>
        <div className={styles.top}>
          <div>
            <Chip trending title="TRENDING" />
          </div>
          <div>
            <Chip title="ECONOMIC" backgroundColor={getColor("ECONOMIC")} />
          </div>
        </div>
        <div className={styles.bottom}>
          <h4 className={styles.h4}>Creative photography ideas from smart devices</h4>
          <div className={styles.footer}>
            <div className={styles.author_wrapp}>
              <Avatar size={34} />
              <div>
                <p className={styles.author}>Wahyu Nanda</p>
                <p className={styles.time}>2 minute ago</p>
              </div>
            </div>
            <div className={styles.like_wrapper}>
              <div>
                <AiOutlineHeart size={20} color={palette.white} />
                <p>200</p>
              </div>
              <div>
                <AiOutlineEye size={20} color={palette.white} />
                <p>200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;

import React from "react";
import styles from "../styles/components/cover.module.scss";
import { getColor } from "../utils";
import Chip from "./Chip";

interface PropsInterface {
  image: string
}

function Cover({ image }: PropsInterface) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 24,
        height: '-webkit-fill-available',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className={styles.absolute_div} />
      <div className={styles.top}>
        <div> <Chip trending title="TRENDING" /></div>
        <div><Chip title="ECONOMIC" backgroundColor={getColor('ECONOMIC')} /></div>
      </div>
      <div className={styles.bottom}>
        <h4 className={styles.h4}>Creative photography ideas from smart devices</h4>
      </div>
    </div>
  );
}

export default Cover;

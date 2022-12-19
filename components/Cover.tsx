import React from "react";
import styles from "../styles/components/cover.module.scss";
import Chip from "./Chip";

function Cover() {
  return (
    <div
      style={{
        backgroundImage: `url("https://picsum.photos/id/1015/1000/600/")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 24,
        alignItems: "center",
      }}
    >
      <div>
        <Chip trending title="TRENDING" />
      </div>
    </div>
  );
}

export default Cover;

import React from "react";
import styles from "../styles/components/card.module.scss";

interface PropsInterface {
  children: React.ReactNode;
  width?: string;
  height?: string;
}
function Card({ children, width, height }: PropsInterface) {
  return (
    <div className={styles.card} style={{ width: width, height: height }}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Card;

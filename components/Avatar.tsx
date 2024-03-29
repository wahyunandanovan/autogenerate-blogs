import Image from "next/image";
import React from "react";
import { siteName } from "../utils/data";

interface PropsInterface {
  size: number;
  style?: React.CSSProperties;
  src: string
}

function Avatar({ size, style, src }: PropsInterface) {
  return (
    <div style={style}>
      <Image
        src={src}
        alt={`Author ${siteName}`}
        width={size}
        height={size}
        style={{
          verticalAlign: "middle",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Avatar;

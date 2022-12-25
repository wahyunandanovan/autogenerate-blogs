import Image from "next/image";
import React from "react";

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
        alt="Avatar"
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

import React from "react";

interface PropsInterface {
  size: number;
  style?: React.CSSProperties;
  src: string
}

function Avatar({ size, style, src }: PropsInterface) {
  return (
    <div style={style}>
      <img
        src={src}
        alt="Avatar"
        style={{
          verticalAlign: "middle",
          width: size,
          height: size,
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Avatar;

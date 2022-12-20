import React from "react";

interface PropsInterface {
  size: number;
  style?: React.CSSProperties;
}

function Avatar({ size, style }: PropsInterface) {
  return (
    <div style={style}>
      <img
        src="./images/wahyu.jpg"
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

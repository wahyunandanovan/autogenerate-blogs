import React from "react";
import { palette } from "../utils/palette";

interface PropsInterface {
  color?: string;
  backgroundColor?: string;
  title: string;
}

function Button({ title, color, backgroundColor }: PropsInterface) {
  return (
    <button
      style={{
        padding: "11px",
        color: color ? color : palette.white,
        backgroundColor: backgroundColor ? backgroundColor : palette.primary,
        borderWidth: 0,
        cursor: 'pointer'
      }}
    >
      {title}
    </button>
  );
}

export default Button;

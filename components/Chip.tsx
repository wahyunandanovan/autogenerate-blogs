import React from "react";
import { palette } from "../utils/palette";
import { HiOutlineFire } from "react-icons/hi";

interface PropsInterface {
  trending?: boolean;
  color?: string;
  title: string;
  backgroundColor?: string;
}

function Chip({ color, title, trending, backgroundColor }: PropsInterface) {
  return (
    <React.Fragment>
      {trending ? (
        <div
          style={{
            color: palette.white,
            fontWeight: "500",
            width: "fit-content",
            fontSize: 14,
            padding: "3px 8px",
            backgroundColor: palette.primary,
          }}
        >
          <HiOutlineFire size={16} style={{ marginBottom: -2, marginRight: 4 }} />
          {title}
        </div>
      ) : (
        <div
          style={{
            color: color ? color : palette.white,
            fontWeight: "500",
            width: "fit-content",
            fontSize: 14,
            padding: "3px 8px",
            backgroundColor: backgroundColor ? backgroundColor : palette.primary,
          }}
        >
          {title}
        </div>
      )}
    </React.Fragment>
  );
}

export default Chip;

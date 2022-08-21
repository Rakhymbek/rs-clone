import { Typography } from '@mui/material';
import React, { FC } from 'react';

type typeLogoProps = {
    textColor: string;
}

const Logo: FC<typeLogoProps> = ({textColor}) => {
  return (
    <Typography fontSize={22} fontWeight={600} marginBottom={5} color={textColor}>
      <span
        style={{
          display: "inline-block",
          marginLeft: "-7px",
          color: "#580ea2",
        }}
      >
        ▶
      </span>
      <span
        style={{
          display: "inline-block",
          marginLeft: "-7px",
          color: "#580ea2",
        }}
      >
        ▶
      </span>{" "}
      LePLAYER
    </Typography>
  );
};

export default Logo;

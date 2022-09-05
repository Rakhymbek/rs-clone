import { cn } from '@bem-react/classname';
import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { COLOR_DARK_DEFAULT } from '../../constants';
import { useAppSelector } from '../../hook';
import { extradarkToDark, extradarkToHover } from '../../utils/colorUtils';
import { SpanChangeColor } from '../changeColor/SpanChangeColor';

import './Logo.css';

const cnLogo = cn('Logo');

type typeLogoProps = {
  textColor: string;
};

const Logo: FC<typeLogoProps> = ({ textColor }) => {
  const textColorStore = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorDark = extradarkToDark(decorativeColor);
  const colorHover = extradarkToHover(decorativeColor);

  if (textColor === 'default') {
    return (
      <Typography
        fontSize={22}
        fontWeight={600}
        marginBottom={5}
        color={'#000000'}
      >
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: COLOR_DARK_DEFAULT,
          }}
        >
          ▶
        </span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: COLOR_DARK_DEFAULT,
          }}
        >
          ▶
        </span>{' '}
        LePLAYER
      </Typography>
    );
  } else {
    return (
      <div
        className={cnLogo()}
        style={{
          color: textColor,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: colorDark,
          }}
        >
          ▶
        </span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: colorDark,
          }}
        >
          ▶
        </span>{' '}
        <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
          LePLAYER
        </SpanChangeColor>
      </div>
    );
  }
};

export default Logo;

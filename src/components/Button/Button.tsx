import React from 'react';
import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';

export type ButtonProps = {
  buttonVariant: 'contained' | 'outlined';
  buttonText: string;
  buttonType?: 'button' | 'submit' | 'reset';
  buttonColor?:
    | 'inherit'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
};

export const Button: FC<ButtonProps> = ({
  buttonText,
  buttonVariant,
  buttonColor = 'secondary',
  buttonType,
}) => {
  return (
    <MUIButton
      type={buttonType}
      color={buttonColor}
      variant={buttonVariant}
      sx={{
        width: '278px',
        height: '52px',
        mb: 2.5,
        fontSize: '18px',
        textTransform: 'capitalize',
      }}>
      {buttonText}
    </MUIButton>
  );
};

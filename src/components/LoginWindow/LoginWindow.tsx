import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import './LoginWindow.css';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import Logo from '../Logo/Logo';

const cnLoginWindow = cn('LoginWindow');

export const LoginWindow: FC<{}> = () => {
  return (
    <Box className={cnLoginWindow()}>
      <Logo textColor="#000"/>
      <Input inputPlaceholder="Логин" inputType="text" marginBottom="32px"></Input>
      <Input inputPlaceholder="Пароль" inputType="password" marginBottom="56px"></Input>
      <NavLink to={'/main'}>
        <Button type="filled" buttonText="Войти"></Button>
      </NavLink>
      <NavLink to={'/register'}>
        <Button type="outlined" buttonText="Зарегистрироваться"></Button>
      </NavLink>
    </Box>
  );
};

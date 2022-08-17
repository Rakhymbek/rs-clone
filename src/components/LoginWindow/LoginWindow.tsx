import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import './LoginWindow.css';
import { NavLink } from 'react-router-dom';

const cnLoginWindow = cn('LoginWindow');

export const LoginWindow: FC<{}> = () => {
  return (
    <div className={cnLoginWindow()}>
      <p
        style={{
          fontWeight: '600',
          fontSize: '22px',
          color: '#000000',
          marginBottom: '40px',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: '#580ea2',
          }}
        >
          ▶
        </span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: '#580ea2',
          }}
        >
          ▶
        </span>{' '}
        LePLAYER
      </p>
      <Input inputPlaceholder="Логин" marginBottom="32px"></Input>
      <Input inputPlaceholder="Пароль" marginBottom="56px"></Input>
      <NavLink to={'/main'}>
        <Button type="filled" buttonText="Войти"></Button>
      </NavLink>
      <NavLink to={'/register'}>
        <Button type="outlined" buttonText="Зарегистрироваться"></Button>
      </NavLink>
    </div>
  );
};

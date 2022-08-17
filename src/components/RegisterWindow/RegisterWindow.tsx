import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import './RegisterWindow.css';
import { NavLink } from 'react-router-dom';

const cnRegisterWindow = cn('RegisterWindow');

export const RegisterWindow: FC<{}> = () => {
  return (
    <div className={cnRegisterWindow()}>
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
      <Input inputPlaceholder="Пароль" marginBottom="32px"></Input>
      <Input inputPlaceholder="Повторите пароль" marginBottom="56px"></Input>
      <NavLink to={'/main'}>
        <Button type="filled" buttonText="Зарегистрироваться"></Button>
      </NavLink>
    </div>
  );
};

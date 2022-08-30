import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import { Box, TextField } from '@mui/material';

// import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import Logo from '../Logo/Logo';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../store/auth/auth';
import { Navigate } from 'react-router-dom';

import './LoginWindow.css';

const cnLoginWindow = cn('LoginWindow');

export const LoginWindow: FC<{}> = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (val: any) => {
    const data = await dispatch(fetchAuth(val));
    if (!data.payload) {
      return alert('Не верный логин или пароль!');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/main" />;
  }
  return (
    <Box className={cnLoginWindow()}>
      <Logo textColor="default" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          variant="standard"
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          type="email"
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Пароль"
          {...register('password', { required: 'Укажите пароль' })}
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
        />
        <Button buttonType="submit" buttonVariant="contained" buttonText="Войти"></Button>
      </form>
      <NavLink to={'/register'}>
        <Button buttonVariant="outlined" buttonText="Зарегистрироваться"></Button>
      </NavLink>
    </Box>
  );
};

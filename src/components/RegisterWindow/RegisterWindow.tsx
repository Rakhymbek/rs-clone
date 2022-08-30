import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
// import { NavLink } from 'react-router-dom';
import { Box, FormControl, TextField } from '@mui/material';

// import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import Logo from '../Logo/Logo';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../store/auth/auth';
import { Navigate } from 'react-router-dom';

import './RegisterWindow.css';

const cnRegisterWindow = cn('RegisterWindow');

export const RegisterWindow: FC<{}> = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    setError,
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (val: any) => {
    const data = await dispatch(fetchRegister(val));
    if (!data.payload) {
      return alert('Не удалось зарегистривроваться!');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
    reset();
  };

  if (isAuth) {
    return <Navigate to="/main" />;
  }

  return (
    <Box className={cnRegisterWindow()}>
      <Logo textColor="default" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          variant="standard"
          label="Имя аккаунта *"
          error={Boolean(errors.fullName?.message)}
          type="text"
          helperText={errors.fullName?.message}
          {...register('fullName', {
            required: 'Укажите полное имя',
            minLength: {
              value: 3,
              message: 'Введите имя аккаунта состоящее как минимум из 3 символов',
            },
          })}
        />
        <TextField
          fullWidth
          variant="standard"
          label="E-Mail *"
          error={Boolean(errors.email?.message)}
          // type="email"
          helperText={errors.email?.message}
          {...register('email', {
            required: 'Укажите почту',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Не верный формат e-mail' },
          })}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Пароль *"
          {...register('password', { required: 'Укажите пароль' })}
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
        />
        <Button
          buttonDisabled={!isValid}
          buttonType="submit"
          buttonVariant="contained"
          buttonText="Зарегистрироваться"></Button>
      </form>
    </Box>
  );
};

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import { useAppSelector, useAppDispatch } from '../../hook';
import { closeModal } from '../../store/modalSlice';
import { logout } from '../../store/auth/auth';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

export const AlertDialog: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  const navigate = useNavigate();

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    dispatch(closeModal());
    navigate('/');
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Вы действительно хотите выйти?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={onClickLogout} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

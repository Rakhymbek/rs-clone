import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';

import './App.css';
import { TEXT } from './constants';
import { AlertDialog } from './components/AlertDialog/AlertDialog';
import { useAppDispatch, useAppSelector } from './hook';
import { fetchAuthMe } from './store/auth/auth';

function App() {
  const lang = useAppSelector((state) => state.language.lang);
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <>
      {isOpen && <AlertDialog />}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/main"
          element={<Main header={TEXT.header.tracks[lang]} />}
        ></Route>
        <Route
          path="/hits"
          element={<Main header={TEXT.albums.hits[lang]} />}
        ></Route>
        <Route
          path="/mytracks"
          element={<Main header={TEXT.menu.mytracks[lang]} />}
        ></Route>
        <Route
          path="/profile"
          element={<Main header={TEXT.menu.profile[lang]} />}
        ></Route>
        <Route
          path="/dayplaylist"
          element={<Main header={TEXT.albums.dayplaylist[lang]} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';

import './App.css';
import { text } from './constants';
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
        <Route path="/main" element={<Main header={text.header.tracks[lang]} />}></Route>
        <Route path="/hits" element={<Main header={text.albums.hits[lang]} />}></Route>
        <Route path="/mytracks" element={<Main header={text.menu.mytracks[lang]} />}></Route>
        <Route path="/profile" element={<Main header={text.menu.profile[lang]} />}></Route>
        <Route
          path="/dayplaylist"
          element={<Main header={text.albums.dayplaylist[lang]} />}></Route>
      </Routes>
    </>
  );
}

export default App;

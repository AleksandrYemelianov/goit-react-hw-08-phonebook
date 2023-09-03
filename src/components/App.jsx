import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import("../pages/Home/Home"));
const Contacts = lazy(() => import("../pages/Сontacts/Сontacts"));
const Login = lazy(() => import("pages/Login/Login"));
const SignUp = lazy(() => import("pages/SignUp/SignUp"));
// const NotFound = lazy(() => import("pages/NotFound/NotFound"));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='login' element={<Login />} />
          <Route path='signUp' element={<SignUp />} />
        </Route>
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
      <ToastContainer/>
    </>
  );
};





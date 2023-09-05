import AppBar from 'components/AppBar/AppBar';
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
// import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <>
            <AppBar/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>
    );
};

export default SharedLayout



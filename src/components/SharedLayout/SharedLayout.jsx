import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
// import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <Container>
            <Header/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </Container>
    );
};

export default SharedLayout



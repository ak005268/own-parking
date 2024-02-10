import { createBrowserRouter } from 'react-router-dom';
import { appRoutes } from '~/views/pages';
import { wrapRoutes } from './wrapper';
import { Route } from './types';
import Register from '@pages/register';
import Login from '@pages/login';
import AppLayout from '@layouts/appLayout';

const routes: Route = wrapRoutes({
    path: '/',
    private: true,
    element: <AppLayout />,
    children: appRoutes,

});

export const router = createBrowserRouter([
    { path: 'login', element: <Login/>, },
    { path: '/', element: <Login/> },
    { path: 'register', element: <Register/> },
    { path: '*', element: <>Not found</> },
    routes
]);
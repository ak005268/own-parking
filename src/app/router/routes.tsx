import { createBrowserRouter } from 'react-router-dom';
import { appRoutes } from '~/views/pages';
import LayoutOne from '~/views/layouts/LayoutOne';
import { wrapRoutes } from './wrapper';
import { Route } from './types';
import Register from '@pages/register';
import Login from '@pages/login';

const routes: Route = wrapRoutes({
    path: '/app',
    private: true,
    element: <LayoutOne />,
    children: appRoutes
});

export const router = createBrowserRouter([
    { path: 'login', element: <Login/>, index: true, },
    { path: '/', element: <Login/>, index: true, },
    { path: 'register', element: <Register/> },
    { path: '*', element: <>Not found</> },
    routes
]);
import { Route } from '~/router/types';
import Settings from './Settings';
import Dashboard from './dashboard/Dashboard';

export const appRoutes: Route[] = [{
    path: 'dashboard',
    element: <Dashboard />,
    private: true,
}, {
    path: 'entry',
    element: <Settings />,
    private: true,
},
{
    path: 'out',
    element: <Settings />,
    private: true,
},
{
    path: 'history',
    element: <Settings />,
    private: true,
},
{
    path: 'cash',
    element: <Settings />,
    private: true,
},
{
    path: 'branch',
    element: <Settings />,
    private: true,
},
{
    path: 'settings',
    element: <Settings />,
    private: true,
},
];
import { Route } from '~/router/types';
import Settings from './Settings';
import Dashboard from './dashboard/Dashboard';
import OutEntry from './OutEntry';
import Cash from './Cash';
import Branch from './Branch';
import History from './History';

export const appRoutes: Route[] = [{
    path: 'dashboard',
    element: <Dashboard />,
    private: true,
}, {
    path: 'entry',
    element: <Dashboard />,
    private: true,
},
{
    path: 'out',
    element: <OutEntry />,
    private: true,
},
{
    path: 'history',
    element: <History />,
    private: true,
},
{
    path: 'cash',
    element: <Cash />,
    private: true,
},
{
    path: 'branch',
    element: <Branch />,
    private: true,
},
{
    path: 'settings',
    element: <Settings />,
    private: true,
},
];
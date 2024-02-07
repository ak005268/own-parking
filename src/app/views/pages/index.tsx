import { Route } from '~/router/types';
import Settings from './Settings';
import Dashboard from './dashboard/Dashboard';

export const appRoutes: Route[] = [{
    path: 'dashboard',
    element: <Dashboard />,
    private: true,
}, {
    path: 'settings',
    element: <Settings />,
    private: true,
},
];
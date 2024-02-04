import Dashboard from '@pages/dashboard';
import { Route } from '~/router/types';
import Settings from './Settings';
import Posts from './dashboard/posts/Posts';

export const appRoutes: Route[] = [{
    path: '',
    element: <Dashboard />,
    private: true,
}, {
    path: 'settings',
    element: <Settings />,
    private: true,
},
{
    path: 'posts',
    element: <Posts/>,
    private: true
}];
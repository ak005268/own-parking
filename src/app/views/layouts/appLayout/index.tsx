import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = ():unknown => {
    return (
        <div className=' bg-color-white'>

            <Header/>

            <Sidebar/>

            <Outlet />

        </div>
    );
};

export default AppLayout;
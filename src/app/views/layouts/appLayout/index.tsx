import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = () => {
    return (
        <div className=' bg-color-white'>

            <Header/>

            <Sidebar/>

            <Outlet />

        </div>
    );
};

export default AppLayout;
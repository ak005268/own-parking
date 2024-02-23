import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = () => {
    return (
        <div className=' bg-color-white'>
            <div>
                <Header/>
            </div>
            <div className='flex'>
                <div className='hidden md:block'>
                    <Sidebar/>
                </div>
                <div className='w-full'>
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default AppLayout;
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = () => {
    return (
        <div className=''>
         

            <Header/>
           
            <Sidebar/>

            <Outlet />

        </div>
    );
};

export default AppLayout;
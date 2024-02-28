import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';

const AppLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarHandler=(value:boolean) => {
        setSidebarOpen(value);
    };
    const headerClass=sidebarOpen? 'lg:ml-20':'lg:ml-[200px]';


    return (
        <div className=' bg-color-white'>
            <div className='flex main-layout'>
                <div className='hidden md:block'>
                    <Sidebar sidebarHandler={sidebarHandler} sidebarOpen={sidebarOpen}/>
                </div>
                <div className='w-full header-outlet px-5 overflow-y-auto'>
                    <Header sidebarHandler={sidebarHandler} sidebarOpen={sidebarOpen}/>
                    <div className={`${headerClass}  mt-[60px] ease-in-out duration-1000`}>

                        <Outlet />

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AppLayout;
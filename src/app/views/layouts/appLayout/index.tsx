import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import SidebarItem from './sidebar/SidebarItem';
import { EntryIcon, BranchIcon, OutIcon, HistoryIcon, MoneyIcon, SettingIcon } from '../../../../assets/icons/Icons';

const AppLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarHandler=(value:boolean) => {
        setSidebarOpen(value);
    };
    const headerClass=sidebarOpen? 'lg:ml-20':'lg:ml-[200px]';

    const sideMenu=[
        { icon: <EntryIcon size={25}/>, name: 'Entry', active: true },
        { icon: <OutIcon size={25}/>, name: 'Out' },
        { icon: <HistoryIcon size={25}/>, name: 'History' },
        { icon: <MoneyIcon size={25}/>, name: 'Cash' },
        { icon: <BranchIcon size={25}/>, name: 'Branch' },
        { icon: <SettingIcon size={25}/>, name: 'Settings' }];

    return (
        <div className=' bg-color-white'>
            <div className='flex main-layout '>
                <div className='sm:w-0 lg:block'>
                    <Sidebar sidebarHandler={sidebarHandler} sidebarOpen={sidebarOpen}>
                        {sideMenu.map((item:any, index) => <SidebarItem sidebarOpen={sidebarOpen} key={`sidebar-me-${index}`} text={item.name} icon={item.icon} active={item?.active}/>)}
                    </Sidebar>
                </div>
                <div className='w-full header-outlet overflow-y-auto'>
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
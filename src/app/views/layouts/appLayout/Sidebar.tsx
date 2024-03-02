/* eslint-disable max-len */
import { useMemo } from 'react';
import { RightArrowIcon } from '../../../../assets/icons/Icons';

const Sidebar = (props:any) => {
    const { sidebarHandler, sidebarOpen }=props;
    const logo = useMemo(() => {
        if (!sidebarOpen) {
            return (
                <div className='flex justify-center items-center h-[72px]  slideIn'>
                    <div className='flex items-baseline tracking-wider'>
                        <span className='font-extrabold text-2xl text-color-orange'>P</span>
                        <span className='font-bold'>ar</span>
                        <span className='font-extrabold text-2xl text-color-orange'>K</span>
                        <span>ing</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='flex justify-center items-center h-[72px]  slideIn '>
                    <div className='flex items-baseline'>
                        <span className='font-extrabold text-2xl text-color-orange'>P</span>
                    </div>
                </div>
            );
        }
    }, [sidebarOpen]);

    const sidebarClass=useMemo(() => sidebarOpen? 'lg:w-20 ' : 'lg:w-[200px]', [sidebarOpen]);
    const sideMenu=['Entry', 'Out', 'History', 'Cash', 'Branch', 'Settings'];
    const arrow = useMemo(() => sidebarOpen && 'rotate-180', [sidebarOpen]);

    return (
        <>
            <div className={`${sidebarClass} fixed z-[99]  h-screen ease-in-out duration-1000  bg-color-white bg-opacity-50 shadow-2xl flex flex-col px-2 gap-2 border-r border-r-color-gray-40`}>
                {logo}

                {sideMenu.map((item:any) => (
                    <button key={`sidebar-menu-${item}`} className="bg-color-gray-20 rounded-lg py-2 hover:bg-color-gray-10">{item}</button>
                ))}
                <button onClick={() => sidebarHandler(!sidebarOpen)} className={`${arrow} absolute ease-in-out duration-1000 flex items-center justify-center border-t border border-color-gray-40 rounded-full p-1 -right-[15px] w-8 h-8 top-[25px] bg-color-white`}>
                    <RightArrowIcon className='text-color-orange  rounded-full'/>

                </button>
            </div>
        </>
    );
};

export default Sidebar;
/* eslint-disable max-len */
import { useMemo } from 'react';

const Sidebar = (props:any) => {
    const {sidebarHandler,sidebarOpen}=props;

    const sidebarClass=useMemo(() => sidebarOpen? 'lg:w-20 ' : 'lg:w-[200px]', [sidebarOpen]);

    return (
        <>
            <div className={`${sidebarClass} fixed pt-16 h-screen ease-in-out duration-1000 bg-color-white bg-opacity-50 shadow-2xl flex flex-col px-2 gap-2 border-r border-r-color-gray-40`}>

                <button className="bg-color-gray-20 rounded-lg py-2 hover:bg-color-gray-10">New Entry</button>
                <button className="bg-color-gray-20 rounded-lg py-2 hover:bg-color-gray-10">New Entry</button>
                <button className="bg-color-gray-20 rounded-lg py-2 hover:bg-color-gray-10">New Entry</button>
                <button className="bg-color-gray-20 rounded-lg py-2 hover:bg-color-gray-10">New Entry</button>

                <button className='w-7 h-7 absolute top-[25px] -right-[14px] rounded-full bg-color-white bg-opacity-50 shadow-lg p-1 text-color-black z-[1]' onClick={() => sidebarHandler(!sidebarOpen)}>*</button>
            </div>
        </>
    );
};

export default Sidebar;
/* eslint-disable max-len */
import { ReactNode, useMemo } from 'react';
import { RightArrowIcon } from '../../../../assets/icons/Icons';

const Sidebar = ({ sidebarHandler, sidebarOpen, children }: { sidebarHandler: (open: boolean) => void, sidebarOpen: boolean, children: ReactNode }) => {
    // const { sidebarHandler, sidebarOpen }=props;
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

    const sidebarClass=useMemo(() => sidebarOpen? 'lg:w-20 invisible lg:visible' : 'lg:w-[200px]', [sidebarOpen]);

    const arrow = useMemo(() => sidebarOpen && 'rotate-180', [sidebarOpen]);

    return (
        <>
            <div className={`${sidebarClass} fixed z-[98] h-full ease-in-out lg:duration-1000 bg-color-white shadow-2xl flex flex-col px-2 gap-2 border-r border-r-color-gray-40`}>

                <div className='flex flex-col relative h-full'>
                    <div>
                        {logo}
                    </div>

                    <ul className='flex-1 list-none '>
                        {children}
                    </ul>
                    <button onClick={() => sidebarHandler(!sidebarOpen)} className={`${arrow} absolute ease-in-out lg:duration-1000 flex items-center justify-center border-t border border-color-gray-40 rounded-full p-1 -right-[23px] w-8 h-8 top-[25px] bg-color-white`}>
                        <RightArrowIcon className='text-color-orange  rounded-full'/>
                    </button>

                    <div className="border-t flex p-3">
                        <div className="w-10 h-10 rounded-md bg-color-green-10 flex justify-center items-center px-3">AK</div>
                        <div
                            className={`
                             flex justify-between items-center overflow-hidden transition-all  ${!sidebarOpen ? 'w-52 ml-3' : 'w-0'}                          `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold">Arun Kumar</h4>
                                <span className="text-[10px] text-gray-600">arunkumar@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div tabIndex={0} onClick={() => sidebarHandler(!sidebarOpen)} className={`w-full h-screen bg-color-black bg-opacity-20 z-[96] fixed lg:invisible ${sidebarOpen ?'invisible':'visible'}`}></div>
        </>
    );
};

export default Sidebar;
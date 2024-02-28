/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import { RootState } from '~/store';
import { user } from '../../../../assets/images/Images';

const Header = (props:any) => {
    const { sidebarHandler, sidebarOpen }=props;

    const notify = () => toast('🦄 Wow so easy!', {

        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
    });
    const userName=useSelector((state:RootState) => state.login);
    const headerClass=sidebarOpen? 'lg:w-[calc(100%_-_80px)]':'lg:w-[calc(100%_-_200px)] ';
    return (
        <div className={`fixed css-n79cd2 px-5 flex flex-col top-0 right-0 w-full ease-in-out duration-1000 backdrop-blur-md bg-color-white  opacity-80 left-auto ${headerClass}`}>
            <div className=' h-[60px] flex  items-center p-5 bg-opacity-70'>
                <div className='w-full'> Welcome {userName?.userData?.data?.name} </div>
                <div className='w-full'> Welcome</div>
                <div className='relative'>

                <button className=''>
                    <img src={user} width={60} height={30} alt='hi'/>
                </button>
                <div className='absolute top-8 shadow-2xl transform right-0 w-[300px] h-[400px] rounded-xl bg-color-green-10'>

                </div>
                </div>

            </div>

            {/* <div className="drawer fixed">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-color-white p-0 min-h-8 border-b-2 border-color-gray-30 ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-sm font-bold">Welcome {user?.userData?.data?.name}</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal items-center text-xs p-0">
                                <li><a>Dashboard</a></li>
                                <li><a>Reports</a></li>

                                <button onClick={notify} className="btn bg-color-orange hover:bg-color-orange  text-color-white w-[106px] h-[27px] text-[10px] p-0 rounded-lg min-h-3 max-h-9 mr-6 ml-3">New Entry</button>

                                <div className="avatar">
                                    <div className="w-8 h-8 rounded-full mr-4 justify-center">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>

                                <ul className="menu lg:menu-horizontal bg-base-200 rounded-box p-0 ">
                                    <li>
                                        <details >
                                            <summary>Parent item</summary>
                                            <ul>
                                                <li><a>Branch 1</a></li>

                                            </ul>
                                        </details>
                                    </li>
                                </ul>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div> */}

        </div>
    );
};

export default Header;
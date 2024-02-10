import { toast, Bounce } from 'react-toastify';

const Sidebar = () => {

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

    return (
        <div>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300 max-h-10">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal items-center">
                                {/* Navbar menu content here */}
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>

                                <button onClick={notify} className="btn bg-[#E56B1A] hover:bg-[#E56B1A] text-gray-100 w-[106px] h-[40px] rounded-lg min-h-5 max-h-9 mr-6 ml-3">New Entry</button>

                                <div className="avatar">
                                    <div className="w-8 h-8 rounded-full mr-4 justify-center">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>

                                <ul className="menu lg:menu-horizontal bg-base-200 rounded-box ">
                                    <li>
                                        <details open>
                                            <summary>Parent item</summary>
                                            <ul>
                                                <li><a>Submenu 1</a></li>
                                                <li><a>Submenu 2</a></li>
                                                <li>
                                                    <details open>
                                                        <summary>Parent</summary>
                                                        <ul>
                                                            <li><a>item 1</a></li>
                                                            <li><a>item 2</a></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
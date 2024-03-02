/* eslint-disable max-len */
import { useSelector } from 'react-redux';
// import { toast, Bounce } from 'react-toastify';
import { RootState } from '~/store';
import { user } from '../../../../assets/images/Images';
import { useState } from 'react';

const Header = (props:any) => {
    const { sidebarOpen }=props;
    const [userProfileShow, setuserProfileShow] = useState(false);
    console.log('userProfileShow=>', userProfileShow);
    const menu=['Profile', 'Setting', 'Subscriptions', 'Log out',];

    const userName=useSelector((state:RootState) => state.login);
    const headerClass=sidebarOpen? 'lg:w-[calc(100%_-_80px)]':'lg:w-[calc(100%_-_200px)] ';
    // const userProfileRef = useRef(null);
    // const menuRef = useRef(null);

    const aa=() => {
        setuserProfileShow(!userProfileShow);
    };
    return (
        <div className='relative'>
            <div style={{ backdropFilter: 'saturate(180%) blur(2px)' }} className={`fixed px-5 flex inset-auto flex-col top-0 right-0 w-full ease-in-out duration-1000 bg-[hsla(0,0%,100%,.8)] opacity-80 left-auto ${headerClass}`}>
                <div className=' h-[60px] flex  items-center px-1 lg:px-5 bg-opacity-70'>
                    <div className='w-full'> Welcome {userName?.userData?.data?.name} </div>
                    <div className='w-full'> Welcome</div>
                    <div className='relative'>
                        <button onClick={aa}>
                            <img src={user} width={90} height={30} alt='hi'/>
                        </button>
                    </div>
                </div>
            </div>

            {userProfileShow && (

                <div><div className='w-full h-screen z-[99] fixed ' onClick={() => setuserProfileShow(false)}></div>
                    <div className={' ease-in-out duration-500 z-[101] fixed top-14 right-10 lg:w-[200px] w-full header-outlet px-5 py-4 overflow-y-auto w-[250px] rounded-xl bg-color-white opacity-100'}>

                        {menu.map((item:any) => ( <button key={`menu-${item}`} onClick={() => alert(item)} className=' hover:bg-color-orange hover:rounded-lg w-full py-3 ease-in-out duration-300'>
                            {item}
                        </button>))}

                    </div>
                </div>

            )}

        </div>
    );
};

export default Header;
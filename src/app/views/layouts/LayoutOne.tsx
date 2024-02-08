import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-base my-10 underline'>Layout</p>
        <div className='sample1'>
            <Outlet />
        </div>
        </div>
    );
};

export default LayoutOne;
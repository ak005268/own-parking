import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const LayoutOne = () => {
    return (
        <div className=''>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                // transition Bounce
            />
            <p className='font-bold text-base my-10 underline flex flex-col justify-center items-center'>Layout</p>
            <div className='sample1'>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutOne;
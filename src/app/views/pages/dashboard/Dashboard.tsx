import { useDispatch } from 'react-redux';
import { http } from '~/services';
import { clearLoginState } from '~/store';
import { Bounce, toast } from 'react-toastify';

const Dashboard = () => {
    const dispatch=useDispatch();

    const callApi=() => {
        const response= http.get('/branch');
        console.log('response=>', response);

    };
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

    const logout=() => {
        dispatch(clearLoginState());

    };
    return (
        <div className='mt-10 text-center text-green-500 font-bold text-base'>Dashboard
            <div className='mb-5'>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={callApi}>Api call</button>
            </div>
            <div className='mb-5'>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            </div>
            <div>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={logout}>Logout</button>

            </div>

            {/* <div role="alert" className="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>we use cookies for no reason.</span>
                <div>
                    <button className="btn btn-sm">Deny</button>
                    <button className="btn btn-sm btn-primary">Accept</button>
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;
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
        <div className='h-[1500px] bg-color-gray-30 mx-5 text-center text-green-500 font-bold text-base'>Dashboard
            <div className='mb-5'>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={callApi}>Api call</button>
            </div>
            <div className='mb-5'>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
            </div>
            <div>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={logout}>Logout</button>

            </div>

          
        </div>
    );
};

export default Dashboard;
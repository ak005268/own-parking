import { useDispatch } from 'react-redux';
import { http } from '~/services';
import { clearLoginState } from '~/store';

const Dashboard = () => {
    const dispatch=useDispatch();

    const callApi=() => {
        const response= http.get('/branch');
        console.log('response=>', response);
    };

    const logout=() => {
        dispatch(clearLoginState());

    };
    return (
        <div className='mt-10 text-center text-green-500 font-bold text-base'>Dashboard
            <div className='mb-5'>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={callApi}>Api call</button>
            </div>

            <div>
                <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
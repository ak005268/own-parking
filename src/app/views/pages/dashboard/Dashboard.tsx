import { useDispatch } from 'react-redux';
import { http } from '~/services';
import { clearLoginState } from '~/store';
import { toast } from 'sonner';

const Dashboard = () => {
    const dispatch=useDispatch();

    const callApi=() => {
        const response= http.get('/branch');
        console.log('response=>', response);

    };
    const notify = () => {
        toast.success('This is a sonner toast');
    };

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

            </div>

        </div>
    );
};

export default Dashboard;
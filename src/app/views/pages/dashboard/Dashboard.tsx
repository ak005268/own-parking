/* eslint-disable max-len */
// import { http } from '~/services';
import { toast } from 'sonner';
import TicketEntry from './components/TicketEntry';
// import ModalWindow from '@components/common/ModalWindow';

const Dashboard = () => {

    // const callApi=() => {
    //     const response= http.get('/branch');
    //     console.log('response=>', response);

    // };
    const notify = () => {
        toast.success('Successfully Created');
    };

    return (
        <>

            <div className='h-full bg-color-gray-30 mx-5 text-center text-green-500 font-bold  pt-10 text-base pb-7'>

                <TicketEntry/>

                {/* <div className='mb-5'>
                    <button className=' px-4 py-2 rounded-md bg-slate-700 text-fuchsia-600 ' onClick={notify}>Notify call</button>
                </div> */}
                <div>

                </div>

            </div>
        </>
    );
};

export default Dashboard;
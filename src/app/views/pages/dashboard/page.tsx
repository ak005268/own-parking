import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, exampleAction, updateNumber } from '~/store';

const Dashboard = (): ReactNode => {
    const dispatch = useDispatch();

    const { loading, data, number } = useSelector(
        (state: RootState) => state.example
    );

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        dispatch(exampleAction(randomNumber));
    }, []);

    return (
        <>
            <div className="dashboard">
                {loading ? <>Loading...</> : JSON.stringify(data)}
                <button onClick={() => dispatch(updateNumber(number + 5))}>
                    {number}
                </button>
            </div>

            <div className='flex justify-center'>
                <Link to='posts' className='p-2 w-30  bg-slate-500 rounded-xl'>Posts</Link>

            </div>

            <h1 className=" font-bold text-7xl underline ">Hello world!</h1>
        </>
    );
};

export default Dashboard;

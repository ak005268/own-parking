import Input from '@components/form/Input';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { RootState, loginRequest } from '~/store';

const Login = () => {
    const dispatch=useDispatch();
    const { error, isAuthenticated }=useSelector((state:RootState) => state.login);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { 'phone': '0123456789', 'password': 12345678 }
    });

    const onSubmit = (data: any) => {
        dispatch(loginRequest(data));
    };
    const formerror={ ...errors };
    return (
        <>{isAuthenticated ? <Navigate to="/dashboard" /> : <div className="container mx-auto mt-8">
            <form
                className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded shadow-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>

                <div className="mb-4">
                    <Input
                        type="number"
                        label="Mobile number"
                        name='phone'
                        errors={formerror?.phone?.message}
                        register={register}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="password"
                        label="Password"
                        name='password'
                        errors={formerror?.password?.message}
                        register={register}
                    />
                </div>

                <p className='text-red-500'>{error}</p>

                <div className="w-full flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                Sign in
                    </button>
                </div>
                <div className="w-full flex flex-col items-center justify-center mt-2  font-bold py-2 px-4">
                    {/* <div className='mr-1'>  New to OwnParking?</div> */}
                    <div className='w-full border-gray-300 border border-solid my-2 ' ></div>
                    <Link to={'/register'}
                        className=" text-blue-500 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
               Create an account
                    </Link>
                </div>
            </form>
        </div>}</>

    );
};

export default Login;
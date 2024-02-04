import Input from '@components/form/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '~/store/posts';

const Register = () => {
    const dispatch=useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        dispatch(getPost(data));
    };
    const error={ ...errors };
    return (
        <div className="container mx-auto mt-8">
            <form
                className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded shadow-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Create account</h2>
                <div className="mb-4">
                    <Input
                        type="text"
                        label="Your name"
                        name='name'
                        register={register}
                        errors={error?.name?.message}
                        placeholder='First and last name'
                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="text"
                        label="Company name"
                        name='orgName'
                        register={register}
                        errors={error?.orgName?.message}
                        placeholder='First and last name'
                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="email"
                        label="Email"
                        name='email'
                        register={register}
                        errors={error?.email?.message}

                    />
                </div>
                <div className="mb-6">
                    <Input
                        type="number"
                        label="Mobile number"
                        name='phone'
                        errors={error?.phone?.message}
                        register={register}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="password"
                        label="Password"
                        name='password'
                        errors={error?.password?.message}
                        placeholder='At least 6 characters'
                        register={register}
                    />
                </div>

                <div className="w-full flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div className="w-full flex flex-col items-center justify-center mt-2  font-bold py-2 px-4 ">
                    {/* <span className='mr-1'>Already have an account? </span> */}
                    <div className='w-full border-gray-300 border border-solid my-2 ' ></div>

                    <Link to={'/login'}
                        className="rounded text-blue-500  focus:outline-none focus:shadow-outline"
                        type="button"
                    >

                      Sign in
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default React.memo(Register);

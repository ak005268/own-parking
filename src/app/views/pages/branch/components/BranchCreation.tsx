import Input from '@components/form/Input';
import GlobalLoader from '@components/GlobalLoader';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '~/store';
import { branchRequest } from '~/store/branch';

const BranchCreation = () => {
    const branchState=useSelector((state:RootState) => state.branch);

    const dispatch=useDispatch();
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data:any) => {
        console.warn(data);
        dispatch(branchRequest(data));
    };

    //     const navigationHandeler=useCallback((nav:string) => {
    // navigator('barnch/register')
    //     }, []);

    return (
        <>
            <div className='flex px-5'>
                <div className="w-full">
                    <NavLink to="/Branch">Branch Details</NavLink>
                </div>
              
            </div>
            <div className='h-full bg-color-white'>
                {branchState.isRequesting && <GlobalLoader/>}
                <form
                    className="max-w-md mx-auto border-color-green-10 bg-white p-8 border border-gray-300 rounded shadow-md"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="text-2xl font-semibold text-center mb-4">Create Branch</h2>
                    <div className="mb-4">
                        <Input
                            type="text"
                            label="Branch Name"
                            name='name'
                            register={register}

                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="text"
                            label="Address"
                            name='address'
                            register={register}

                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="number"
                            label="PinCode"
                            name='pinCode'
                            register={register}

                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            type="number"
                            label="Storage Capacity"
                            name='storageCapacity'
                            register={register}

                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="number"
                            label="Two Wheeler Rate"
                            name='twoWheelerRate'
                            register={register}
                        />
                    </div>  <div className="mb-4">
                        <Input
                            type="number"
                            label="Four Wheeler Rate"
                            name='fourWheelerRate'
                            register={register}
                        />
                    </div>

                    <div className="w-full flex justify-center">
                        <button
                            className="bg-color-orange text-color-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
           Submit
                        </button>

                    </div>

                </form>
            </div>

        </>
    );
};

export default BranchCreation;
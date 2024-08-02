import Input from '@components/form/Input';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ticketRequest } from '~/store';
import { validationRules } from '~/utils';

const TicketEntry = () => {

    const dispatch=useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: { vehicleId: 'Tn94' } });

    const onSubmit = (data:any) => {
        dispatch(ticketRequest(data));
    };
    const formError:any={ ...errors };

    return (
        <>
            <form
                className="max-w-md mx-auto border-color-green-10 bg-white p-8 border border-gray-300 rounded shadow-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-semibold text-center mb-4">IN</h2>
                <div className="mb-4">
                    <Input
                        type="text"
                        label="Vehicle Number"
                        name='vehicleId'
                        register={register}
                        errors={formError?.vehicleId?.message}
                        rules={validationRules?.important}

                    />
                    <div className="mb-6">
                        <Input
                            type="text"
                            label="Vendor Name"
                            name='clientName'
                            register={register}

                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="number"
                            label="Mobile Number"
                            name='clientNumber'
                            register={register}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <Input
                        type="text"
                        label="Basic Token"
                        name='tokenId'
                        register={register}

                    />
                </div>
                <div className="mb-4">
                    <Input
                        type="text"
                        label="Narration "
                        name='description'
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
        </>
    );
};

export default TicketEntry;
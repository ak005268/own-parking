import GlobalLoader from '@components/GlobalLoader';
import { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { http } from '~/services';

const Branch = () => {
    const [branchList, setBranchList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const callApi = async () => {

        const response = await http.get('/branch');
        const result = response?.data?.data?.branchList;
        setBranchList(result || []);
        setLoading(false);

    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className='h-full bg-color-white px-5'>
            {loading && <GlobalLoader/>}
            <div className='flex justify-between'>

                <Link to="/Branch">Branch Details</Link>

                <Link to='/Branch/register'>
                    <div className='flex items-end'>
                        <div>  Create Branch</div>
                        <div> <IoIosAddCircleOutline style={{ marginLeft: '0.2rem', color: 'green' }}/></div>

                    </div>
              </Link>

            </div>
            {branchList.length > 0 ? (
                branchList.map((branch, index) => (
                    <div key={index} className="w-[320px] h-[130px] border border-color-orange p-2 mt-5">
                        <div className='capitalize'>Name: {branch.name}</div>
                        <div>Storage Capacity: {branch.storageCapacity}</div>
                        <div>Two Wheeler: {branch.twoWheeler}</div>
                        <div>Four Wheeler: {branch.fourWheeler}</div>
                        <div>Address: {branch.address}</div>
                        <div>Pin code: {branch.pinCode}</div>
                    </div>
                ))
            ) : (
                <div>No branches found</div>
            )}
        </div>
    );
};

export default Branch;

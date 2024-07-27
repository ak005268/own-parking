import GlobalLoader from '@components/GlobalLoader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { http } from '~/services';

const Branch = () => {
    const [branchList, setBranchList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const callApi = async () => {
        try {
            const response = await http.get('/branch');
            const result = response?.data?.data?.branchList;
            setBranchList(result || []);
            setLoading(false);
        } catch (err) {
            console.log('Failed to fetch branch details');
            setLoading(false);
        }
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className='h-[1000px] bg-color-white px-5'>
            {loading && <GlobalLoader/>}
            <div className='flex '>
                <div className="w-full">Branch Details</div>
                <div className="w-full">
                    <Link to='register'>Create Branch</Link>
                </div>
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

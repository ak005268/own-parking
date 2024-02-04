import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '~/store/posts';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.posts);
    const [hitnum, setHitnum] = useState<number>();

    const hitApi = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 95) + 1;
        setHitnum(randomNumber);
        dispatch(getPost(randomNumber));
    }, [dispatch]);

    return (
        <>
            <button onClick={hitApi}>Hit Random number</button>

            <div className='flex justify-center'>
                <button onClick={hitApi} className='p-2 w-30 bg-slate-500 rounded-xl'>
          API HIT
                </button>
            </div>

            <div className='font-bold text-center text-xl'>
                {hitnum}
                <div> {state.loading && <>Loading....</>}</div>
            </div>

            <div className='pl-2'>
                {state?.postData?.map((item: PostData, i: number) => (
                    <div key={item.id}>
                        <p>
                            <span className={`${i===0 && 'hidden '} font-bold text-lg mr-1 `}>{i}</span>

                            {item.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;

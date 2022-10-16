import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import user from '../../assets/user.webp';
import ReactHtmlParser from 'react-html-parser';

export default function SingleReview({ review }) {
    const [see, setSee] = useState(false);
    return (

        <div className="p-8 rounded overflow-hidden gradiend-purple">
            <div className="flex sm:items-center flex-col sm:flex-row justify-between pb-4 ">
                <div className="sm:flex sm:items-center md:items-start lg:items-center sm:flex-row md:flex-col lg:flex-row gap-2">
                    <div>
                        <div className='w-28 h-28 rounded-full overflow-hidden'>
                            <img className='w-full min-h-full' src={review?.image} alt="" />
                        </div>
                    </div>
                    <div className='pt-4 sm:pt-0 flex sm:block justify-center flex-col'>
                        <h2 className='text-2xl font-medium'>{review?.name}</h2>
                        <p className='text-sm'>{review?.position}</p>
                    </div>
                </div>
                <div className='pt-5 sm:pt-0 flex items-center text-lg gap-1'>
                    <span className='text-2xl text-yellow-500'><AiFillStar /></span>
                    5/5
                </div>
            </div>
            <p className='pt-6 border-b-4 border-white pb-4 text-black bg-white px-3 py-6 rounded-md overflow-hidden mx-auto'>
                {ReactHtmlParser(review?.description)}
            </p>
            {/* Website link */}
            <div className='flex items-center justify-end pt-3'>
                <a className='px-4 py-2 ' href={review?.link}>View Details</a>
            </div>
        </div>
    )
}
import { imageUrlGenerator } from '@/HelperFunctions'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'


const ListingCard = ({data}) => {


    return (
        <div className='mx-auto'>
            <Image className='mt-10 rounded-xl ' width={400} height={100} alt={data?.title} src={imageUrlGenerator(data?.poster_path)} />
            <div className='mt-2'>
                <p className='text-xl mb-4 font-semibold'>{data?.title}</p>
                <p className='text-gray-400 text-sm md:text-base'>Rating {data?.vote_average}</p>
                <p className='text-gray-400 text-sm md:text-base'>{moment(data?.release_date).format('MMM DD, YYYY')}</p>
            </div>
        </div>
    )
}

export default ListingCard
import { BASE_PIC_URL } from '@/Env'
import { imageUrlGenerator } from '@/HelperFunctions'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'


// const data = {
//     "adult": false,
//     "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
//     "belongs_to_collection": {
//         "id": 10,
//         "name": "Star Wars Collection",
//         "poster_path": "/r8Ph5MYXL04Qzu4QBbq2KjqwtkQ.jpg",
//         "backdrop_path": "/zZDkgOmFMVYpGAkR9Tkxw0CRnxX.jpg"
//     },
//     "budget": 11000000,
//     "genres": [
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         }
//     ],
//     "homepage": "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
//     "id": 11,
//     "imdb_id": "tt0076759",
//     "origin_country": [
//         "US"
//     ],
//     "original_language": "en",
//     "original_title": "Star Wars",
//     "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
//     "popularity": 105.922,
//     "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
//     "production_companies": [
//         {
//             "id": 1,
//             "logo_path": "/tlVSws0RvvtPBwViUyOFAO0vcQS.png",
//             "name": "Lucasfilm Ltd.",
//             "origin_country": "US"
//         },
//         {
//             "id": 25,
//             "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
//             "name": "20th Century Fox",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "1977-05-25",
//     "revenue": 775398007,
//     "runtime": 121,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "A long time ago in a galaxy far, far away...",
//     "title": "Star Wars",
//     "video": false,
//     "vote_average": 8.2,
//     "vote_count": 20499
// }

const ListingCard = ({data}) => {

    // const imageUrlGenerator = (path) => {
    //     return `${BASE_PIC_URL}${path}`
    // }

    return (
        <div className='mx-auto'>
            <Image className='mt-10 rounded-xl ' width={400} height={100} alt={data?.original_title} src={imageUrlGenerator(data?.poster_path)} />
            <div className='mt-2'>
                <p className='text-xl mb-4 font-semibold'>{data?.original_title}</p>
                <p className='text-gray-400'>{moment(data?.release_date).format('MMM DD, YYYY')}</p>
                <p className='text-gray-400'>Rating {data?.vote_average}</p>
            </div>
        </div>
    )
}

export default ListingCard
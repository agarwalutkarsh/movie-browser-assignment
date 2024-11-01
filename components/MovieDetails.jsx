"use client"
import { getMovieDetails } from '@/ApiService/MoviesApi'
import { imageUrlGenerator } from '@/HelperFunctions'
import moment from 'moment'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MovieDetails = () => {
    // Details page for the movie based on id
    // States and Params
    const searchParams = useSearchParams()
    const id = searchParams?.get('id')
    const [movie, setMovie] = useState({})

    // Getting movie details
    useEffect(() => {
        if (id) {
            const detail = getMovieDetails(id)
            detail?.then(movie => {
                setMovie({ ...movie?.data })
            })
        }
    }, [])

    return (
        <div className=' md:flex'>
            {/* Backdrop image */}
            <Image alt='Movie Backdrop' fill src={imageUrlGenerator(movie?.backdrop_path)} className='object-cover opacity-20 hidden md:flex' />
            <div className='w-1/3 relative h-[90vh] hidden md:block'>
                {/* Poster Image */}
                <Image
                    alt='Movie Poster'
                    src={imageUrlGenerator(movie?.poster_path)}
                    fill
                    className='object-cover rounded-xl'
                />
            </div>
            <div className='w-full relative h-[50vh]  md:hidden'>
                <Image
                    alt='Movie Poster'
                    src={imageUrlGenerator(movie?.poster_path)}
                    fill
                    className='object-cover rounded-xl'
                />
            </div>
            {/* Details */}
            <div className='w-full md:w-1/2 items-center' >
                <p className="ml-8 text-5xl font-normal my-2">{movie?.title}</p>
                <p className="ml-8 text-xl font-normal my-2 italic w-2/3">Tagline: {movie?.tagline}</p>
                <p className="ml-8 text-xl font-light my-4 italics">Director: {movie?.credits?.crew?.filter(item => item?.job === 'Director')[0]?.name}</p>
                <p className="ml-8 text-xl font-light my-2">Realeased On: {moment(movie?.release_date).format('DD MMM, YYYY')}</p>
                <p className="ml-8 text-xl font-light my-4 ">Average Rating: <span className='bg-green-700 p-1 w-max rounded-xl'>{Number(movie?.vote_average).toFixed(1)}/10</span> {movie?.vote_count} votes</p>


                <div className="ml-8 text-xl font-light my-2 italic hidden md:flex">
                    Genres:
                    {movie?.genres?.map((item) =>
                        <span className='ml-2 h-max rounded-lg px-2 bg-[#14525E]' key={item?.id}>{item?.name}</span>

                    )}
                </div>
                <div className="ml-8 text-xl font-light my-2 italic md:hidden">
                    Genres:
                    {movie?.genres?.map((item) =>
                        <p className='ml-2 w-max h-max my-2 md:hidden rounded-lg px-2 bg-[#14525E]' key={item?.id}>{item?.name}</p>
                    )}
                </div>


                <div className="ml-8 text-xl font-light my-2 italic hidden md:flex">
                    Spoken Languages:
                    {movie?.spoken_languages?.map((item) =>
                        <span className='ml-2 h-max rounded-lg px-2 bg-[#14525E]' key={item?.iso_639_1}>{item?.english_name}</span>
                    )}
                </div>
                <div className="ml-8 md:hidden text-xl font-light my-2 italic">
                    Spoken Languages:
                    {movie?.spoken_languages?.map((item) =>
                        <p className='ml-2 rounded-lg px-2 h-max w-max bg-[#14525E]' key={item?.iso_639_1}>{item?.english_name}</p>
                    )}
                </div>
                <p className="ml-8 text-xl font-light my-2">Runtime: {movie?.runtime} minutes</p>
                <p className="ml-8 text-xl font-light my-2">Collection: {movie?.belongs_to_collection?.name}</p>
                <p className="ml-8 text-xl font-light my-2">Budget: $ {movie?.budget?.toLocaleString()}</p>
                <p className="ml-8 text-xl font-light my-2">Revenue: $ {movie?.revenue?.toLocaleString()}</p>
                <p className="ml-8 text-xl font-light my-4 italics"> Overview: {movie?.overview}</p>

            </div>
        </div>
    )
}

export default MovieDetails
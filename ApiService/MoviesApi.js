import { BASE_URL } from "@/Env"
import axios from "axios"
import moment from "moment"

// Exporting the api functions

const apiKey = process.env.NEXT_PUBLIC_API_KEY

// Getting popular movies
export const getPopularMovies = async (page) => {
    try {
        const resp = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=${page}`, {
            params: {
                api_key: apiKey
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}

// Getting upcoming movies
export const getUpcomingMovies = async (page) => {
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
    try {
        const resp = await axios.get(`${BASE_URL}/discover/movie?&primary_release_date.gte=${tomorrow}&sort_by=primary_release_date.asc&page=${page}`, {
            params: {
                api_key: apiKey
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}


// Getting searched movies
export const getSearchedMovie = async (searchString, page) => {
    try {
        const resp = await axios.get(`${BASE_URL}/search/movie?query=${searchString}&page=${page}`, {
            params: {
                api_key: apiKey
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}

// Getting all genres
export const getAllGenres = async () => {
    try {
        const resp = await axios.get(`${BASE_URL}/genre/movie/list`, {
            params: {
                api_key: apiKey,
                language: 'en-US'
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}


// // Getting filter based movies
export const getMoviesByFilter = async (filterObject, page) => {

    try {
        const resp = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: apiKey,
                ...filterObject,
                page
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}

// Getting movie details
export const getMovieDetails = async (id) => {
    try {
        const resp = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: apiKey,
                append_to_response: 'credits'
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}
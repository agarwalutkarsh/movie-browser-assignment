import { BASE_URL } from "@/Env"
import axios from "axios"


export const getPopularMovies = async (page) => {
    try {
        const resp = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=${page}`, {
            params: {
                api_key: '6de2289d1398b8ca55cf3bbee5832f13'
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}

export const getSearchedMovie = async (searchString, page) => {
    try {
        const resp = await axios.get(`${BASE_URL}/search/movie?query=${searchString}&page=${page}`, {
            params: {
                api_key: '6de2289d1398b8ca55cf3bbee5832f13'
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}

export const getAllGenres = async () => {
    try {
        const resp = await axios.get(`${BASE_URL}/genre/movie/list`, {
            params: {
                api_key: '6de2289d1398b8ca55cf3bbee5832f13',
                language: 'en-US'
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}


export const getMoviesByFilter = async (filterObject, page) => {

    try {
        const resp = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: '6de2289d1398b8ca55cf3bbee5832f13',
                ...filterObject,
                page
            }
        })
        return resp
    } catch (err) {
        return err.response
    }
}
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
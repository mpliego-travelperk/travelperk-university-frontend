import axios from 'axios'

export const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000'

export const newAxiosInstance = () => {
    return axios.create({
        baseURL: baseUrl,
        timeout: 1000,
    });
}
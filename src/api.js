import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export const ApiServise = {
    get(data = {}) {
        return axios.get(`${axios.defaults.baseURL}/movies`, { params: data });
    },

    post(data) {
        return axios.post(`${axios.defaults.baseURL}/movies`, data);
    },

    put(data) {
        return axios.put(`${axios.defaults.baseURL}/movies`, data);
    },

    delete(id) {
        return axios.delete(`${axios.defaults.baseURL}/movies/${id}`);
    }
};
import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "323361ee-3913-485b-9757-2ce805a25051" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const followAPI = {
    postUsers(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const unfollowAPI = {
    deleteUsers(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}
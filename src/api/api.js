import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "202ff1eb-c5ae-41f5-ad55-db6f125b33f9" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(usersId) {
        return instance.post(`follow/${usersId}`)
    },
    unfollow(usersId) {
        return instance.delete(`follow/${usersId}`)
    },
    getProfile(userId) {
      return instance.get(`profile/` + userId )
    }
}

export const authAPI ={
    me() {
        return instance.get(`auth/me`)
    }
}
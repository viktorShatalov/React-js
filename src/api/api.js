import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "202ff1eb-c5ae-41f5-ad55-db6f125b33f9" },
    baseURL: 'https://awesome/'
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
        console.warn('Obsolete method . Please use profile.API method');
        return instance.get(`profile/` + userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
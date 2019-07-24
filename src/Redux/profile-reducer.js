import { usersAPI, profileAPI } from '../../src/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        // { id: 1, messege: 'post', likesCount: 153333 } для теста разкоментировать....
    ],
    profile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostElement = {
                id: 5,
                messege: action.newPostElement,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPostElement]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const AddPostAC = (newPostElement) => ({ type: ADD_POST, newPostElement })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStaus = (status) => ({ type: SET_STATUS, status })


export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStaus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStaus(status));
        }
    });
}


export default profileReducer;
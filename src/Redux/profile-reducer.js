import { usersAPI, profileAPI } from '../../src/api/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        // { id: 1, messege: 'post', likesCount: 1 },
        // { id: 2, messege: 'post 11', likesCount: 22 },
        // { id: 3, messege: 'post  222', likesCount: 333 } //для теста разкоментировать....
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)

            }
        default:
            return state;
    }
}

export const AddPostAC = (newPostElement) => ({ type: ADD_POST, newPostElement })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStaus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })


export const getUsersProfile = (userId) => async(dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStaus(response.data));
}

export const updateStatus = (status) => async(dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStaus(status));
    }
}

export default profileReducer;
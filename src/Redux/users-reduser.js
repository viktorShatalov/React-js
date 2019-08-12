import { usersAPI } from '../../src/api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USER:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.usersId] : state.followingInProgress.filter(id => id !== action.usersId)
            }
        default:
            return state;
    }
}


export const followSuccess = (usersId) => ({ type: FOLLOW, usersId })
export const unfollowSuccess = (usersId) => ({ type: UNFOLLOW, usersId })
export const setUsers = (users) => ({ type: SET_USER, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, usersId) =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, usersId })

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (usersId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, usersId));
        usersAPI.follow(usersId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(usersId))
            }
            dispatch(toggleFollowingProgress(false, usersId));
        });

    }
}

export const unfollow = (usersId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, usersId));
        usersAPI.unfollow(usersId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(usersId))
            }
            dispatch(toggleFollowingProgress(false, usersId));
        });

    }
}

export default usersReduser;
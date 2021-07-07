import { usersAPI } from '../../src/api/api';
import { updateObjInArr } from '../utils/helper/objects-helper';

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
                users: updateObjInArr(state.users, action.usersId, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArr(state.users, action.usersId, 'id', { followed: false })
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
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        console.log(getState())
    }

}

const FollowUnfollowFlow = async (dispatch, usersId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, usersId));

    let response = await apiMethod(usersId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(usersId))
    }
    dispatch(toggleFollowingProgress(false, usersId));
}


export const follow = (usersId) => {
    return async (dispatch) => {
        FollowUnfollowFlow(dispatch, usersId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (usersId) => {
    return async (dispatch) => {
        FollowUnfollowFlow(dispatch, usersId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReduser;
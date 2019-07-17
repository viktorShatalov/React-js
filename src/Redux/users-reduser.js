const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';

let initialState = {
    users: [],
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USER:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}


export const followAC = (usersId) => ({ type: FOLLOW, usersId })
export const unfollowAC = (usersId) => ({ type: UNFOLLOW, usersId })
export const setUsersAC = (users) => ({ type: SET_USER, users })

export default usersReduser;
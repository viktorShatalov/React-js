
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';



let initialState = {
    
    users: [
        { id: 1,photoUrl:'https://images11.cosmopolitan.ru/upload/img_cache/668/66869e7d7ba0c7466fc900f00660cfd6_ce_750x497x0x88_fitted_740x0.jpg', fullName: 'awesome', status: 'whats up dog!', location: { city: 'kiev', country: 'ukraine' }, followed: true },
        { id: 2,photoUrl:'https://images11.cosmopolitan.ru/upload/img_cache/668/66869e7d7ba0c7466fc900f00660cfd6_ce_750x497x0x88_fitted_740x0.jpg', fullName: 'awesome', status: 'whats up dog!', location: { city: 'kiev', country: 'ukraine' }, followed: true },
        { id: 3,photoUrl:'https://images11.cosmopolitan.ru/upload/img_cache/668/66869e7d7ba0c7466fc900f00660cfd6_ce_750x497x0x88_fitted_740x0.jpg', fullName: 'awesome', status: 'whats up dog!', location: { city: 'kiev', country: 'ukraine' }, followed: false }
    ],
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
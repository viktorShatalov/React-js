const CHANGE_BTN_CLASS = "CHANGE_BTN_CLASS"
const GET_USERS = "GET_USERS"

let initialState = {
    isActive: false,
    users: []
};



const app2Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BTN_CLASS:
            return {
                ...state,
                activeClass: true
            }
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

export const changeClass = () => ({ type: CHANGE_BTN_CLASS })
export const getUsers = (users) => ({ type: GET_USERS, users })

export const requestUsers = () => {
    return async (dispatch, getState) => {
        let data = await fetch(`http://localhost:3000/users`)
            .then((res) => {
                return res.json()
            })
        dispatch(getUsers(data.items))
        console.log(getState())
    }
}

export default app2Reducer;
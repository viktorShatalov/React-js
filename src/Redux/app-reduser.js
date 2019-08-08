import { getAuthUserData } from './auth-reduser';
const SET_INITIZLIZED_SUCCESS = 'SET_INITIZLIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIZLIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({ type: SET_INITIZLIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })

    dispatch(setInitializedSuccess())
}

export default appReducer;
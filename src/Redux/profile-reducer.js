const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    newPostText: '',
            posts: [
                { id: 1, messege: ' post', likesCount: 153333 },
                { id: 1, messege: 'It my first post', likesCount: 1 },
                { id: 1, messege: 'agsgslga', likesCount: 11 },
                { id: 2, messege: 'hi,how are you?', likesCount: 5 } ],
            profile: null

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = {
                id: 5,
                messege: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [ ...state.posts, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile
            }  
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({ type: ADD_POST })
export const UpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile  })
export default profileReducer;
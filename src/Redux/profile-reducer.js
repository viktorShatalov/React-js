const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    newPostText: '',
            posts: [
                { id: 1, messege: ' post', likesCount: 153333 },
                { id: 1, messege: 'It my first post', likesCount: 1 },
                { id: 1, messege: 'agsgslga', likesCount: 11 },
                { id: 2, messege: 'hi,how are you?', likesCount: 5 }
            ],

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                messege: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
    }
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({ type: ADD_POST })
export const UpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer;
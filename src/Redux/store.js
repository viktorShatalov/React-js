import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        sidebar: {},
        profilePage: {
            newPostText: '',
            posts: [
                { id: 1, messege: ' post', likesCount: 153333 },
                { id: 1, messege: 'It my first post', likesCount: 1 },
                { id: 1, messege: 'agsgslga', likesCount: 11 },
                { id: 2, messege: 'hi,how are you?', likesCount: 5 }
            ],

        },
        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Genya' },
                { id: 4, name: 'Ghon' },
                { id: 5, name: 'Igor' },
                { id: 6, name: 'Jhack' }
            ],
            messeges: [
                { id: 1, messege: 'Hi' },
                { id: 2, messege: 'Hello' },
                { id: 3, messege: 'yo' },
                { id: 4, messege: 'Yo' },
                { id: 5, messege: 'Yo' }

            ],
            newMessegeBody: '',
        }

    },
    _callSubscriber() {
        console.log('state chenged');
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = (observer)
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;
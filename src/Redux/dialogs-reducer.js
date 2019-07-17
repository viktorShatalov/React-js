const UPDATE_NEW_MESSEGE_BODY = "UPDATE-NEW-MESSEGE-BODY";
const ADD_MESSEGE = 'ADD-MESSEGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSEGE-BODY':
            return {
                ...state,
                newMessegeBody: action.newMessege
            };
        case 'ADD-MESSEGE':
            let newMessege = state.newMessegeBody;
            return {
                ...state,
                newMessegeBody : '',
                messeges: [...state.messeges, {id:6,messege:newMessege}]
            };
        default:
            return state;
    }

}
export const sendMessege = () => ({ type: ADD_MESSEGE })
export const UpdateNewMessegeCreator = (body) => ({ type: UPDATE_NEW_MESSEGE_BODY, newMessege: body })
export default dialogsReducer;